#!/usr/bin/env node
/**
 * Post-build path fixer for Moodle file deployment.
 * Converts leading absolute asset paths ("/_astro/...", "/favicon.svg", etc.)
 * to relative paths ("./_astro/...", "./favicon.svg") so that opening index.html
 * via file:// or inside a zipped Moodle resource resolves assets.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const distDir = join(process.cwd(), 'dist');

function toRelative(value, depth) {
  // Ignore protocol or double slash (e.g. //cdn)
  if (!value.startsWith('/')) return value; // already relative or external
  if (value.startsWith('//')) return value; // protocol-relative external
  // Build prefix based on depth
  const prefix = depth === 0 ? '.' : '../'.repeat(depth).replace(/\/$/, '');
  // Remove any leading './' or duplicate slashes after replacement cleanup later
  return prefix + value.replace(/^\/+/, '/');
}

function fixSrcset(srcset, depth) {
  return srcset.split(',').map(part => {
    const trimmed = part.trim();
    const m = trimmed.match(/^(\S+)(.*)$/); // first token is URL
    if (!m) return part; // leave as-is
    const url = m[1];
    const rest = m[2] || '';
    return toRelative(url, depth) + rest;
  }).join(', ');
}

function collectHtml(dir, prefix = '') {
  const entries = readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const rel = prefix ? `${prefix}/${e.name}` : e.name;
    const full = join(dir, e.name);
    if (e.isDirectory()) files = files.concat(collectHtml(full, rel));
    else if (e.isFile() && e.name.endsWith('.html')) files.push(rel);
  }
  return files;
}

const htmlFiles = collectHtml(distDir);
console.log(`🔧 Ajustando rutas en ${htmlFiles.length} archivos HTML...`);

htmlFiles.forEach(file => {
  const filePath = join(distDir, file);
  let html = readFileSync(filePath, 'utf-8');
  const depth = file.split('/').length - 1; // depth inside dist
  let changed = 0;

  // Replace href/src attributes
  html = html.replace(/(href|src)=(")([^"\n]+)(")/g, (full, attr, q1, url, q2) => {
    const newUrl = toRelative(url, depth);
    if (newUrl !== url) changed++;
    return `${attr}=${q1}${newUrl}${q2}`;
  });

  // Replace srcset
  html = html.replace(/srcset=(")([^"\n]+)(")/g, (full, q1, value, q2) => {
    const newValue = fixSrcset(value, depth);
    if (newValue !== value) changed++;
    return `srcset=${q1}${newValue}${q2}`;
  });

  // Normalize occurrences like '././'
  html = html.replace(/\.\/\.\//g, './');

  if (changed > 0) {
    writeFileSync(filePath, html);
  }
  console.log(`✓ ${file} (${changed} cambios)`);
});

console.log('✅ Rutas convertidas a relativas para Moodle.');
