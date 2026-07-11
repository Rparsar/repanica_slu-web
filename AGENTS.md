# Guía de Desarrollo - Repanica SL Landing Page

## Información del Proyecto

**Nombre**: Repanica SL - Landing Page
**Descripción**: Landing page profesional para empresa de alquiler de plantas móviles
**Stack**: Astro 4.x + React 18.x + GSAP + Spline
**Estado**: En desarrollo (Fase 1 - Estructura base completada)

## Comandos Principales

```bash
# Desarrollo
pnpm dev              # Inicia servidor de desarrollo (http://localhost:3000)

# Build
pnpm build            # Compila para producción
pnpm preview          # Visualiza build de producción

# Mantenimiento
pnpm install          # Instala dependencias
pnpm update           # Actualiza dependencias
```

## Estructura de Archivos Importante

```
src/
├── layouts/Layout.astro          # Layout base con estilos globales
├── components/
│   ├── Header.astro              # Navegación sticky
│   ├── Footer.astro              # Pie de página
│   └── sections/                 # Secciones de la página
│       ├── Hero.astro            # Banner principal
│       ├── Features.astro        # Grid de servicios
│       ├── Benefits.astro        # Ventajas competitivas
│       └── CTA.astro             # Llamada a acción
└── pages/index.astro             # Página principal

public/
└── favicon.svg                   # Icono del sitio
```

## Convenciones de Código

### Componentes Astro
- Usar `.astro` para componentes sin interactividad
- Usar React solo para componentes que necesiten `client:*` directives
- Scoped styles con `<style>` tags
- Responsive-first approach

### Estilos
- CSS puro sin frameworks (GSAP para animaciones)
- Variables CSS para colores y espaciado
- Mobile-first media queries
- Respetar `prefers-reduced-motion`

### Animaciones
- GSAP para animaciones complejas y scroll-triggered
- CSS animations para transiciones simples
- ScrollTrigger para animaciones basadas en scroll
- Siempre incluir fallback sin JavaScript

### Tipografía
- Font: Inter (Google Fonts)
- Sizes: 1rem = 16px base
- Line-height: 1.6 para body text

## Paleta de Colores (Mock Neutro)

```css
--color-primary: #ff6b35;      /* Naranja (CTA) */
--color-secondary: #1a1a1a;    /* Negro (Texto) */
--color-white: #ffffff;         /* Blanco (Fondo) */
--color-light-gray: #f5f5f5;    /* Gris claro */
--color-medium-gray: #e8e8e8;   /* Gris medio */
--color-dark-gray: #cccccc;     /* Gris oscuro */
--color-text: #666666;          /* Texto secundario */
```

## Breakpoints Responsive

```css
/* Desktop */
@media (min-width: 1024px) { }

/* Tablet */
@media (max-width: 1023px) and (min-width: 768px) { }

/* Móvil */
@media (max-width: 767px) { }

/* Móvil pequeño */
@media (max-width: 480px) { }
```

## Verificación Antes de Commit

- [ ] `pnpm build` compila sin errores
- [ ] No hay warnings en la consola
- [ ] Responsive en 320px, 768px, 1024px, 1440px
- [ ] Animaciones funcionan sin JavaScript deshabilitado
- [ ] Links internos usan smooth scroll
- [ ] Imágenes tienen alt text
- [ ] Contraste de colores accesible

## Próximas Tareas

### Fase 2 - Animaciones Avanzadas
- [ ] Integrar Spline en Hero o sección multimedia
- [ ] Implementar ScrollTrigger para todas las secciones
- [ ] Parallax effects en hero
- [ ] Stagger animations en grids

### Fase 3 - Funcionalidad
- [ ] Formulario de contacto (Formspree o similar)
- [ ] Validación de formularios
- [ ] Envío de emails
- [ ] Página de privacidad

### Fase 4 - Optimización
- [ ] Lighthouse audit (target: >90)
- [ ] Optimización de imágenes
- [ ] Minificación de CSS/JS
- [ ] Caching strategies

### Fase 5 - Contenido
- [ ] Página de servicios detallados
- [ ] Galería de proyectos
- [ ] Testimonios de clientes
- [ ] Blog/Noticias

## Notas Técnicas

### GSAP
- Ya está importado en index.astro
- ScrollTrigger plugin registrado
- Usar `gsap.to()` para animaciones
- Siempre limpiar triggers en cleanup

### Spline
- Componente React wrapper necesario
- Usar `client:load` para cargar en cliente
- Fallback para navegadores sin soporte
- Optimizar tamaño de escenas 3D

### Astro
- Componentes `.astro` son 0 JavaScript por defecto
- Usar `<script>` tags para lógica del cliente
- Imports de módulos ES6 soportados
- Integración con React automática

## Recursos Útiles

- [Documentación Astro](https://docs.astro.build)
- [GSAP Docs](https://gsap.com/docs)
- [Spline Docs](https://docs.spline.design)
- [React Docs](https://react.dev)

## Contacto y Soporte

Para dudas sobre el desarrollo, revisar:
1. Este archivo (AGENTS.md)
2. README.md para instrucciones generales
3. Comentarios en el código
4. Documentación oficial de las librerías

---

**Última actualización**: 2024-07-02
**Versión**: 0.1.0
