# Prueba del Sistema de i18n - Hero Section

## ✅ Implementación Completada

Se ha implementado el sistema de internacionalización (i18n) server-side para la sección Hero de la landing page.

## 🧪 Cómo Probar

### 1. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

El servidor estará disponible en `http://localhost:3000`

### 2. Pruebas de Idioma

Accede a la página principal con diferentes parámetros de idioma:

#### Español (por defecto)
```
http://localhost:3000/
http://localhost:3000/?lang=es
```

**Esperado:**
- Título: "Soluciones en Alquiler de Plantas Móviles"
- Subtítulo: "Equipos especializados para extracción de áridos con máxima fiabilidad"
- Botón: "Solicitar presupuesto"

#### Inglés
```
http://localhost:3000/?lang=en
```

**Esperado:**
- Título: "Solutions in Mobile Plant Rental"
- Subtítulo: "Specialized equipment for aggregate extraction with maximum reliability"
- Botón: "Request a quote"

#### Francés
```
http://localhost:3000/?lang=fr
```

**Esperado:**
- Título: "Solutions de Location de Centrales Mobiles"
- Subtítulo: "Équipements spécialisés pour l'extraction d'agrégats avec fiabilité maximale"
- Botón: "Demander un devis"

#### Alemán
```
http://localhost:3000/?lang=de
```

**Esperado:**
- Título: "Lösungen für Mietanlagen"
- Subtítulo: "Spezialisierte Ausrüstung für Gesteinskörnungsgewinnung mit maximaler Zuverlässigkeit"
- Botón: "Angebot anfordern"

### 3. Pruebas del Selector de Idiomas

1. Haz clic en el selector de idiomas (esquina superior derecha)
2. Selecciona un idioma diferente
3. Verifica que:
   - La bandera del header cambia
   - El texto del header (ES/EN/FR/DE) cambia
   - El contenido del Hero se actualiza
   - La URL cambia a `?lang=xx`

### 4. Verificar en la Consola del Navegador

Abre la consola del navegador (F12) y ejecuta:

```javascript
// Ver idioma actual
new URLSearchParams(window.location.search).get('lang') || 'es'

// Ver traducciones disponibles
console.log(document.querySelector('.hero-title').textContent)
console.log(document.querySelector('.hero-subtitle').textContent)
```

## 📋 Checklist de Validación

- [ ] El Hero muestra texto en español por defecto
- [ ] El parámetro `?lang=en` muestra el Hero en inglés
- [ ] El parámetro `?lang=fr` muestra el Hero en francés
- [ ] El parámetro `?lang=de` muestra el Hero en alemán
- [ ] El selector de idiomas actualiza la bandera
- [ ] El selector de idiomas actualiza el código de idioma (ES/EN/FR/DE)
- [ ] Al hacer clic en un idioma, la URL cambia correctamente
- [ ] El contenido del Hero se actualiza sin recargar la página

## 🔧 Archivos Modificados

1. **`src/i18n/es.json`** - Traducciones al español
2. **`src/i18n/en.json`** - Traducciones al inglés
3. **`src/i18n/fr.json`** - Traducciones al francés
4. **`src/i18n/de.json`** - Traducciones al alemán
5. **`src/i18n/i18n.ts`** - Funciones helper para traducciones
6. **`src/components/sections/Hero.astro`** - Actualizado para usar traducciones
7. **`src/pages/index.astro`** - Actualizado para pasar el idioma al Hero
8. **`src/components/Header.astro`** - Actualizado para cambiar idioma con parámetros de URL

## 📝 Próximos Pasos

Una vez validado que funciona correctamente:

1. Aplicar el mismo patrón a otros componentes (AboutBusiness, Services, etc.)
2. Crear rutas dinámicas `[lang]/` para mejor SEO
3. Agregar persistencia de idioma en localStorage
4. Implementar redirección automática según el idioma del navegador

## ⚠️ Notas Importantes

- El cambio de idioma actualmente usa parámetros de URL (`?lang=xx`)
- No requiere recarga de página (es server-side rendering)
- El idioma por defecto es español
- Si el parámetro `lang` no es válido, se usa español

## 🐛 Troubleshooting

### El Hero no cambia de idioma
1. Verifica que la URL tiene `?lang=xx`
2. Abre la consola del navegador (F12)
3. Verifica que no hay errores de JavaScript
4. Recarga la página (Ctrl+R)

### El selector de idiomas no funciona
1. Verifica que JavaScript está habilitado
2. Abre la consola del navegador (F12)
3. Busca errores en la consola
4. Verifica que los elementos HTML tienen los IDs correctos

### Las traducciones no aparecen
1. Verifica que los archivos JSON existen en `src/i18n/`
2. Verifica que la estructura de las claves es correcta
3. Verifica que el módulo `i18n.ts` se importa correctamente

---

**Última actualización**: 2024-07-22
**Versión**: 1.0.0
