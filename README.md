# Repanica SL - Landing Page

Landing page profesional para Repanica SL, empresa dedicada al alquiler de plantas móviles para la extracción de áridos.

## 🚀 Tecnologías

- **Astro 4.x** - Framework web moderno y rápido
- **React 18.x** - Para componentes interactivos
- **GSAP 3.x** - Animaciones avanzadas
- **Spline** - Contenido multimedia 3D
- **TypeScript** - Tipado estático
- **CSS Puro** - Estilos sin dependencias externas

## 📁 Estructura del Proyecto

```
src/
├── layouts/
│   └── Layout.astro          # Layout principal
├── components/
│   ├── Header.astro          # Encabezado con navegación
│   ├── Footer.astro          # Pie de página
│   └── sections/
│       ├── Hero.astro        # Sección hero principal
│       ├── Features.astro    # Sección de servicios
│       ├── Benefits.astro    # Sección de ventajas
│       └── CTA.astro         # Llamada a la acción
└── pages/
    └── index.astro           # Página principal
```

## 🛠️ Instalación y Desarrollo

### Requisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Las dependencias ya están instaladas
# Si necesitas reinstalar:
pnpm install
```

### Desarrollo

```bash
pnpm dev
```

El servidor de desarrollo estará disponible en `http://localhost:3000`

### Build para Producción

```bash
pnpm build
```

Los archivos compilados estarán en la carpeta `dist/`

### Preview de Producción

```bash
pnpm preview
```

## 🎨 Características Actuales

### ✅ Implementado
- [x] Estructura base de Astro
- [x] Componentes principales (Header, Footer, Layout)
- [x] Hero Section con animaciones
- [x] Features Section con grid de servicios
- [x] Benefits Section con ventajas competitivas
- [x] CTA Section para conversión
- [x] Diseño responsive (tablet y móvil)
- [x] Animaciones CSS básicas
- [x] Navegación suave (smooth scroll)

### 🔄 En Desarrollo
- [ ] Integración completa de Spline para contenido 3D
- [ ] Animaciones GSAP avanzadas con ScrollTrigger
- [ ] Optimización de performance
- [ ] SEO mejorado
- [ ] Formulario de contacto funcional

### 📋 Próximas Mejoras
- [ ] Página de servicios detallados
- [ ] Galería de proyectos
- [ ] Blog/Noticias
- [ ] Sistema de reservas
- [ ] Chat en vivo
- [ ] Integración con CRM

## 🎬 Animaciones

### GSAP ScrollTrigger
Las animaciones de scroll están configuradas para:
- Fade-in de elementos al entrar en viewport
- Transiciones suaves entre secciones
- Efectos de parallax (próximamente)

### CSS Animations
- Animaciones de entrada (fadeInUp, fadeInRight, fadeInLeft)
- Transiciones de hover en botones y cards
- Animaciones de carga

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1440px+
- **Tablet**: 768px - 1023px
- **Móvil**: 320px - 767px

## 🔧 Configuración

### Astro Config (`astro.config.mjs`)
- Integración con React para componentes interactivos
- Output estático para máxima performance

### TypeScript (`tsconfig.json`)
- Strict mode habilitado
- JSX support para React

## 📊 Performance

- Lighthouse Score objetivo: > 90
- Optimización de imágenes automática
- Code splitting inteligente
- Carga lazy de componentes

## 🌐 SEO

- Meta tags configurados
- Open Graph tags
- Sitemap automático
- Robots.txt

## 📝 Notas de Desarrollo

### Colores (Mock Neutro)
- Primario: #ff6b35 (Naranja)
- Secundario: #1a1a1a (Negro)
- Fondo: #ffffff (Blanco)
- Grises: #f5f5f5, #e8e8e8, #cccccc

### Tipografía
- Font: Inter (Google Fonts)
- Weights: 400, 500, 600, 700, 800

### Breakpoints
```css
@media (max-width: 768px) { /* Tablet y móvil */ }
@media (max-width: 480px) { /* Solo móvil */ }
```

## 🚀 Deploy

El proyecto está listo para ser deployado en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier servidor estático

## 📞 Contacto

Para más información sobre Repanica SL:
- Email: info@repanica.es
- Teléfono: +34 XXX XXX XXX

## 📄 Licencia

Proyecto privado de Repanica SL - 2024
