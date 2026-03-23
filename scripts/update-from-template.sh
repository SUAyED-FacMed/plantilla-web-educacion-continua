#!/bin/bash

# Script para actualizar un proyecto derivado con cambios del template base
# Uso: 
#   ./update-from-template.sh           # Modo normal (requiere resolver conflictos manualmente)
#   ./update-from-template.sh --ours    # En conflictos, mantener cambios locales
#   ./update-from-template.sh --theirs  # En conflictos, aceptar cambios del template
#   ./update-from-template.sh --auto    # Auto-merge a main si no hay conflictos

TEMPLATE_REPO="https://github.com/SUAyED-FacMed/plantilla-web-educacion-continua.git"
TEMPLATE_BRANCH="main"
STRATEGY=""
AUTO_MERGE=false

# Parsear argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        --ours)
            STRATEGY="-Xours"
            shift
            ;;
        --theirs)
            STRATEGY="-Xtheirs"
            shift
            ;;
        --auto)
            AUTO_MERGE=true
            shift
            ;;
        *)
            echo "❌ Opción desconocida: $1"
            echo "Uso: $0 [--ours|--theirs] [--auto]"
            exit 1
            ;;
    esac
done

echo "🔄 Actualizando desde template base..."

# Verificar que estamos en un repositorio git
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "❌ Error: No estás en un repositorio Git"
    exit 1
fi

# Verificar que estamos en branch main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Cambiando a branch main..."
    git checkout main || {
        echo "❌ Error: No se pudo cambiar a branch main"
        exit 1
    }
fi

# Agregar el template como remote si no existe
if ! git remote get-url template >/dev/null 2>&1; then
    echo "➕ Agregando template como remote..."
    git remote add template $TEMPLATE_REPO
fi

# Fetch del template
echo "📥 Descargando cambios del template..."
git fetch template $TEMPLATE_BRANCH || {
    echo "❌ Error: No se pudo descargar del template"
    exit 1
}

# Verificar si hay cambios nuevos
CHANGES=$(git log --oneline main..template/$TEMPLATE_BRANCH)
if [ -z "$CHANGES" ]; then
    echo "✅ No hay cambios nuevos en el template"
    exit 0
fi

echo "📋 Cambios disponibles en el template:"
echo "$CHANGES"
echo ""

# Crear branch temporal para merge
TEMP_BRANCH="update-from-template-$(date +%Y%m%d-%H%M%S)"
echo "🌿 Creando branch temporal: $TEMP_BRANCH"
git checkout -b $TEMP_BRANCH

# Merge cambios del template
if [ -n "$STRATEGY" ]; then
    echo "🔀 Aplicando cambios del template con estrategia: $STRATEGY"
else
    echo "🔀 Aplicando cambios del template..."
fi

if git merge template/$TEMPLATE_BRANCH $STRATEGY --allow-unrelated-histories --no-commit --no-ff; then
    echo "✅ Merge exitoso sin conflictos"
    git add .
    git commit -m "feat: update from template $(date +%Y-%m-%d)"
    
    if [ "$AUTO_MERGE" = true ]; then
        echo "🚀 Auto-merge activado, aplicando a main..."
        git checkout main
        git merge $TEMP_BRANCH --no-edit
        git branch -d $TEMP_BRANCH
        echo "🎉 Cambios aplicados y mergeados a main automáticamente"
    else
        echo "🎉 Cambios aplicados correctamente en branch temporal"
        echo ""
        echo "📋 Comandos para aplicar a main:"
        echo "   git checkout main             # Volver a main"
        echo "   git merge $TEMP_BRANCH        # Aplicar cambios"
        echo "   git branch -d $TEMP_BRANCH    # Limpiar branch temporal"
    fi
else
    MERGE_STATUS=$?
    if [ $MERGE_STATUS -eq 1 ]; then
        echo "⚠️  Hay conflictos que resolver"
        CONFLICT_FILES=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
        echo "📋 Archivos en conflicto:"
        echo "$CONFLICT_FILES"
        echo ""
        
        # Generar comandos copy-paste para resolver
        echo "🔧 OPCIÓN 1 - Mantener tus cambios (ours):"
        echo "-------------------------------------------"
        echo "git checkout --ours . && git add . && git commit -m 'feat: update from template $(date +%Y-%m-%d)' && git checkout main && git merge $TEMP_BRANCH && git branch -d $TEMP_BRANCH"
        echo ""
        
        echo "🔧 OPCIÓN 2 - Aceptar cambios del template (theirs):"
        echo "-----------------------------------------------------"
        echo "git checkout --theirs . && git add . && git commit -m 'feat: update from template $(date +%Y-%m-%d)' && git checkout main && git merge $TEMP_BRANCH && git branch -d $TEMP_BRANCH"
        echo ""
        
        echo "🔧 OPCIÓN 3 - Resolver manualmente:"
        echo "------------------------------------"
        echo "   Edita los archivos en conflicto"
        echo "   git add .                      # Marcar como resueltos"
        echo "   git commit -m 'feat: update from template $(date +%Y-%m-%d)'"
        echo "   git checkout main              # Volver a main"
        echo "   git merge $TEMP_BRANCH         # Aplicar cambios"
        echo "   git branch -d $TEMP_BRANCH     # Limpiar branch temporal"
        echo ""
        echo "⚠️  ABORTAR TODO:"
        echo "git merge --abort && git checkout main && git branch -D $TEMP_BRANCH"
    else
        echo "❌ Error en el merge"
        git merge --abort
        git checkout main
        git branch -D $TEMP_BRANCH
        exit 1
    fi
fi
