# Plan de rediseño del frontend

Portafolio personal de Alonso Naro Saldaña. Nuxt 3, Vue 3, Tailwind CSS 3. Sitio estático de una página.

| Dato | Valor |
| --- | --- |
| Estado | No iniciado |
| Rama de trabajo | `feat/ui-ux-presentacion` (commit base `3fc506d`) |
| Fecha del plan | 2026-10-08 |
| Reglas del repositorio | `AGENTS.md` |
| Seguimiento | Sección 11 de este archivo |

## 1. Resumen

Este documento describe, fase por fase, el rediseño visual completo del sitio. Lo puede ejecutar
cualquier agente de IA o persona que tenga solo este archivo y el repositorio.

Lo que cambia a la vista:

| Parte | Hoy | Después |
| --- | --- | --- |
| Estilo general | Degradados verde-azul, rosa y violeta; fuente del sistema | Fondo casi negro, grises y un solo acento azul; JetBrains Mono e IBM Plex Sans |
| Encabezado y pie | Logo y menú aparecen después de cargar; pie siempre en pantalla; barra de scroll oculta | Encabezado fijo de 64 px, scroll normal de página, pie al final |
| Inicio | Saludo genérico y avatar de stock con la marca de agua «Vecteezy» | Nombre completo en grande, rol y dos botones (proyectos y CV). Sin avatar |
| Títulos de sección | Un anillo dibujado encima de las letras | Número de sección y título limpio, a la izquierda |
| Portafolio | Carrusel que muestra 1 de 6 proyectos, en cuarto lugar | Los 6 proyectos a la vista, en segundo lugar |
| Habilidades | 15 logos con el mismo peso | Tres grupos: Frontend, Backend y datos, Herramientas |
| Sobre mí | Foto dentro de un círculo con degradado | Texto, tres datos clave y foto en escala de grises |
| Contacto | Campos solo con placeholder; botón de enviar transparente | Etiquetas visibles, error junto al campo, botón principal azul |

Lo que no cambia: el stack, el contenido (solo se usa lo que ya está en el repositorio), la
validación y el envío del formulario, y la publicación como sitio estático.

Costo previsto: ocho commits. Cada commit que incluye archivos `.vue`, `.ts` o `.js` dispara una
revisión automática que tarda entre 3 y 14 minutos (sección 12).

## 2. Cómo usar este documento

Ciclo de una fase. Repetirlo hasta completar la sección 11.

1. Leer `AGENTS.md` completo y las secciones 3, 4, 6 y 7 de este plan.
2. Comprobar el punto de partida: `git branch --show-current` devuelve `feat/ui-ux-presentacion` y
   `git status --short` solo muestra archivos sin seguimiento (`??`).
3. Tomar la primera fase sin marcar de la sección 11. Leer su campo «Depende de».
4. Tomar la captura «antes» (sección 12).
5. Aplicar los pasos de la fase. No hacer nada que la fase no pida.
6. Ejecutar las comprobaciones comunes (sección 7) y las propias de la fase.
7. Tomar la captura «después».
8. Hacer un solo commit con los archivos de la fase y el mensaje indicado.
9. Anotar en la sección 11 el hash del commit, el resultado de las comprobaciones y la ruta de las capturas.
10. Detenerse. Mostrar al autor las dos capturas y esperar su aprobación antes de la fase siguiente.

Los números de línea de este plan corresponden al commit `3fc506d`. Si una línea ya no coincide,
buscar por el texto citado.

## 3. Reglas para el agente

| Regla | Detalle |
| --- | --- |
| Reglas del repositorio | `AGENTS.md` manda. Sus `REJECT if` y `REQUIRE` bloquean el commit. |
| Rama | Trabajar en `feat/ui-ux-presentacion`. No crear ramas, no hacer `push`, no abrir PR, no ejecutar `npm run deploy`. |
| Una fase, un commit | Solo los archivos de la fase. Después del commit, detenerse y esperar al autor. |
| Contenido | Usar solo textos, imágenes y datos que ya están en el repositorio. No inventar enlaces, cargos, fechas ni cifras. Los únicos cambios de texto son los de la sección 9. |
| Dependencias | No instalar paquetes. El único cambio de dependencias es quitar `swiper` en F7. |
| Archivos protegidos | `nuxt.config.ts`, `tailwind.config.js` y `package.json` se tocan solo como indica cada fase y solo con C1 aprobada. No tocar `.gga`, `tsconfig.json`, `.eslintrc.cjs`, `.prettierrc` ni archivos de entorno. |
| Carpeta `assets/` | No borrar archivos. Una imagen que deja de importarse no llega al sitio generado. |
| Revisión automática | No usar `git commit --no-verify`. |
| Commits | En español, Conventional Commits, asunto sin tildes (como en `git log`), sin líneas de autoría de IA. |
| Formato | No reformatear código que la fase no cambia. |
| Componentes | Máximo 200 líneas por archivo `.vue`. |
| Dudas | Si el repositorio no coincide con este plan, detenerse y avisar al autor. No improvisar. |

Reglas de `AGENTS.md` fáciles de romper al cambiar estilos:

- No usar colores hexadecimales ni `rgb()` en clases arbitrarias: usar los colores de la sección 6.2.
- No usar el atributo `style` con valores fijos, ni variantes `dark:`, ni `<style>` sin `scoped`.
- No dejar bloques `<style scoped>` vacíos ni imports, variables o clases sin usar.
- No acceder a `window` ni a `document` fuera de `onMounted` o de un manejador de evento.
- Todo `addEventListener` u observer se libera al desmontar.

## 4. Decisiones que el autor debe confirmar

Son decisiones visibles o que tocan archivos protegidos. Si alguna sigue en `pendiente`, antes de F0
hay que pedir al autor un sí o un no para cada una, en una sola pregunta, y anotar la respuesta aquí.

El autor aprobó las cinco el 2026-10-08, con la salvedad «por ahora»: puede revisarlas más adelante.

| Id | Decisión | Motivo | Fases | Si se rechaza | Estado |
| --- | --- | --- | --- | --- | --- |
| C1 | Editar `nuxt.config.ts` (F0, F1, F7), `tailwind.config.js` (F1) y `package.json` (F7), y crear `.npmrc` (F0) | No hay otra forma de cargar fuentes, registrar colores ni limpiar la terminal | F0, F1, F7 | Detenerse: el plan no se puede ejecutar | aprobado |
| C2 | Quitar del código el tema claro | Hoy no se puede activar: `setIsDarkMode` nunca se llama y no hay botón de tema | F2, F4, F5 | Detenerse y pedir instrucciones | aprobado |
| C3 | Portafolio en grilla; se eliminan el carrusel y la dependencia `swiper` | Los seis proyectos quedan a la vista sin interacción | F5, F7 | Detenerse y pedir instrucciones | aprobado |
| C4 | Nuevo orden: Inicio, Portafolio, Habilidades, Sobre mí, Contacto | Quien evalúa un portafolio busca primero el trabajo | F2 | Conservar el orden actual (Inicio, Sobre mí, Habilidades, Portafolio, Contacto) y numerar los títulos en ese orden | aprobado |
| C5 | Inicio sin imagen; la foto de Sobre mí pasa a escala de grises | El avatar actual es de stock y tiene marca de agua; la foto real ya está en Sobre mí | F3, F4 | Detenerse y pedir instrucciones | aprobado |

## 5. Estado actual

### 5.1 Proyecto

- `pages/index.vue` es la única página. Monta el encabezado, cinco secciones y el pie.
- Cada sección vive en `components/` con su `index.vue`: `Home`, `About`, `Skills`, `Portfolio`, `Contact`.
- Componentes compartidos en `components/globalComponents/`. Estado global en `components/global.store.ts`.
- Estilos globales en `assets/css/`. Los colores son variables `--ns-*` con tres números separados por comas, expuestas a Tailwind en `tailwind.config.js`.
- Versiones instaladas: Node 24.15.0, Nuxt 3.11.0, Vue 3.4.21, Tailwind CSS 3.4.3, Swiper 11.2.6, Prettier 3.2.5.
- No hay tests ni linter en ejecución. No existen `app.vue`, `layouts/` ni `plugins/`.

### 5.2 Problemas de diseño encontrados

| N.º | Problema | Evidencia |
| --- | --- | --- |
| 1 | El inicio no dice quién es ni qué hace a primera vista. Usa un avatar de stock con la marca de agua «Vecteezy», de 177 × 183 px, ampliado hasta 300 px | `components/Home/index.vue:20`, `components/Home/index.vue:35`, `assets/img/developer.png` |
| 2 | El scroll ocurre dentro de `<main>` con la barra oculta, y el pie ocupa pantalla todo el tiempo | `pages/index.vue:71`, `assets/css/tailwind/baseStyle.css:186` |
| 3 | Logo, menú y fotos se pintan después de cargar (`v-if="isMounted"`): se ve un salto | `components/Header_.vue:51`, `components/Header_.vue:58`, `components/Home/index.vue:34`, `components/About/index.vue:30` |
| 4 | El título de cada sección lleva un anillo dibujado encima del texto | `components/globalComponents/ComponentTitle.vue:11` |
| 5 | No hay sistema de color: degradados verde-azul, rosa, coral-violeta, borde lima y sombras de color | `components/Home/index.vue:63`, `components/About/index.vue:49`, `components/Footer_.vue:26`, `components/globalComponents/CarouselItem_project.vue:118` |
| 6 | No hay tipografía definida: se usa la fuente del sistema | `tailwind.config.js` no declara `fontFamily` y `nuxt.config.ts` no carga fuentes |
| 7 | Habilidades: quince mosaicos iguales, sin agrupar | `components/Skills/index.vue:24` |
| 8 | Portafolio: el carrusel muestra un proyecto de seis; en móvil la descripción se abre con un botón sobre una capa | `components/Portfolio/components/CollaborationProject.vue:78`, `components/globalComponents/CarouselItem_project.vue:36` |
| 9 | Contacto: etiquetas ocultas, botón de enviar transparente, la tecla Enter no envía y el teléfono usa `type="number"` | `components/Contact/index.vue:107`, `components/Contact/index.vue:161`, `components/Contact/index.vue:160`, `components/Contact/index.vue:135` |
| 10 | La página generada no tiene `<title>`, ni descripción, ni atributo `lang` | `dist/index.html` del último `npm run generate` |
| 11 | El tema claro existe en el código pero no se puede activar | `components/global.store.ts:14` es la única aparición de `setIsDarkMode` |
| 12 | El texto de Inicio, Habilidades y el pie no se puede seleccionar | `components/Home/index.vue:17`, `components/Skills/index.vue:89`, `pages/index.vue:79` |

### 5.3 Imágenes

| Archivo | Píxeles | Peso | Uso hoy | Uso en el rediseño |
| --- | --- | --- | --- | --- |
| `assets/img/developer.png` | 177 × 183 | 10 KB | Avatar de Inicio | Ninguno |
| `assets/img/foto_2.png` | 430 × 580 | 45 KB | Foto de Sobre mí | Foto de Sobre mí |
| `assets/img/restaurant.png` | 341 × 732 | 60 KB | Proyecto 1 | Proyecto 1 |
| `assets/img/sici_2.png` | 262 × 565 | 33 KB | Proyecto 2 | Proyecto 2 |
| `assets/img/bipbip_app.jpeg` | 702 × 1600 | 74 KB | Proyecto 3 | Proyecto 3 |
| `assets/img/Landing_Page.png` | 341 × 732 | 56 KB | Proyecto 4 | Proyecto 4 |
| `assets/img/la-positiva.png` | 340 × 733 | 69 KB | Proyecto 5 | Proyecto 5 |
| `assets/img/panel_bip.png` | 337 × 739 | 26 KB | Proyecto 6 | Proyecto 6 |
| `assets/svg/logoN@r.svg` | Cuadrado | 5 KB | Logo del encabezado | Logo del encabezado |
| `assets/pdf/CV_ALONSO_NARO_2025.pdf` | No aplica | 70 KB | Modal de CV | Modal de CV |

- Todos los `.png` tienen fondo transparente. Las capturas de proyectos son verticales, con formato de teléfono; `assets/img/bipbip_app.jpeg` es la única opaca y sin marco.
- Sin uso hoy y sin uso después (no tocar): `assets/img/foto_3.png`, `assets/img/new_foto.png`, `assets/img/profile.png`, `assets/img/logo_sici.PNG`, `assets/img/dark.gif`, `assets/img/nublada.gif`, `assets/svg/sol.svg`.
- Importar siempre con el alias `@assets/`. En `components/Skills/index.vue:4` hay imports relativos que se cambian en F4.

## 6. Sistema de diseño

### 6.1 Dirección

Minimalismo suizo en oscuro: fondo casi negro, escala de grises y un solo acento, el azul del logo
(`#1A5CFF`). Retícula estricta, texto alineado a la izquierda, esquinas rectas, líneas de 1 px.
Sin degradados, sin sombras, sin desenfoques, sin brillos.

### 6.2 Colores

Se conservan los nombres que ya existen y cambian sus valores. Se agregan cuatro.

| Clase Tailwind | Variable | Valor RGB | Hex | Uso |
| --- | --- | --- | --- | --- |
| `dark` | `--ns-dark` | 11, 12, 14 | `#0B0C0E` | Fondo de página y del encabezado |
| `Content` | `--ns-backgroundContent` | 19, 21, 24 | `#131518` | Tarjetas, campos, modales |
| `line` (nuevo) | `--ns-line` | 42, 45, 51 | `#2A2D33` | Líneas y bordes decorativos |
| `lineStrong` (nuevo) | `--ns-line-strong` | 104, 111, 124 | `#686F7C` | Borde de campos y de botones secundarios |
| `light` | `--ns-light` | 237, 238, 240 | `#EDEEF0` | Texto principal |
| `muted` (nuevo) | `--ns-muted` | 154, 160, 170 | `#9AA0AA` | Texto secundario |
| `primary` | `--ns-primary` | 25, 91, 255 | `#195BFF` | Relleno del botón principal y contorno de foco. No se usa como color de texto |
| `primarySoft` (nuevo) | `--ns-primary-soft` | 91, 140, 255 | `#5B8CFF` | Texto y enlaces en azul |
| `danger` | `--ns-danger` | 255, 71, 87 | `#FF4757` | Mensajes de error |
| `success`, `warn` | sin cambios | sin cambios | sin cambios | Estados |

Contraste calculado con la fórmula de WCAG 2:

| Par | Relación | Mínimo |
| --- | --- | --- |
| `light` sobre `dark` | 16,9 : 1 | 4,5 |
| `muted` sobre `dark` / sobre `Content` | 7,4 : 1 / 7,0 : 1 | 4,5 |
| `primarySoft` sobre `dark` / sobre `Content` | 6,2 : 1 / 5,8 : 1 | 4,5 |
| Blanco sobre `primary` | 5,3 : 1 | 4,5 |
| `danger` sobre `Content` | 5,5 : 1 | 4,5 |
| `lineStrong` sobre `dark` / sobre `Content` | 3,9 : 1 / 3,6 : 1 | 3 |
| `primary` sobre `dark` (contorno de foco) | 3,7 : 1 | 3 |

`primary` como texto sobre `dark` da 3,7 : 1 y no alcanza 4,5: por eso el texto azul usa `primarySoft`.

No usar modificadores de opacidad de Tailwind con estos colores (por ejemplo `bg-dark/80`): no están
definidos para aceptarlos. Para un fondo translúcido, usar `rgba(var(--ns-dark), 0.85)` dentro de `<style scoped>`.

### 6.3 Tipografía

| Familia | Clase | Pesos | Uso |
| --- | --- | --- | --- |
| JetBrains Mono | `font-mono` | 500, 700 | Títulos, etiquetas, menú, botones, chips |
| IBM Plex Sans | `font-sans` | 400, 500, 600 | Texto corrido |

| Elemento | Clases |
| --- | --- |
| Título principal (`h1`) | `font-mono text-4xl font-bold leading-tight tracking-tight text-light md:text-6xl xl:text-7xl` |
| Título de sección (`h2`) | `font-mono text-2xl font-bold tracking-tight text-light md:text-3xl` |
| Título de tarjeta | `font-mono text-lg font-bold text-light` |
| Etiqueta | clase global `eyebrow` más un color (`text-muted` o `text-primarySoft`) |
| Párrafo destacado | `text-lg leading-relaxed text-muted md:text-xl` |
| Párrafo | `text-base leading-relaxed text-muted` |
| Texto pequeño | `text-sm text-muted` |

Ningún texto por debajo de `text-xs` (12 px).

### 6.4 Retícula y espaciado

| Elemento | Regla |
| --- | --- |
| Contenedor | clase global `content`: `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8` |
| Sección | `py-16 md:py-24`, con `border-t border-line` entre secciones |
| Título a contenido | `mt-10` |
| Columnas | `grid grid-cols-1 md:grid-cols-12`, con `gap-6` o `gap-10` |
| Tarjeta | `border border-line bg-Content p-6` |
| Esquinas | Rectas. No usar clases `rounded-*` |
| Puntos de corte | Los de Tailwind: `sm` 640, `md` 768, `lg` 1024, `xl` 1280 |

### 6.5 Clases globales

Viven en `assets/css/tailwind/baseStyle.css`, dentro de `@layer components`, para que una utilidad de
Tailwind escrita en la plantilla pueda sobrescribirlas (por ejemplo `md:hidden` sobre un botón).

| Clase | Definición |
| --- | --- |
| `content` | Ver 6.4 (se cambia en F2) |
| `eyebrow` | `font-mono text-xs font-medium uppercase tracking-widest` |
| `button-default` | Base de botón más `bg-primary text-white hover:bg-light hover:text-dark` |
| `button-default-border` | Base de botón más `border border-lineStrong text-light hover:border-light` |
| `input-form` | `w-full border border-lineStrong bg-Content px-4 py-3 text-base text-light transition-colors duration-200 focus:border-primary` |

Base de botón: `inline-flex min-h-11 items-center justify-center px-6 py-3 font-mono text-sm font-medium transition-colors duration-200`.

### 6.6 Movimiento y accesibilidad

- Única animación permitida: `transition-colors duration-200` en elementos interactivos. Se retiran las animaciones de entrada, los desplazamientos al pasar el cursor y el efecto de onda.
- Se conserva el bloque `prefers-reduced-motion` de `assets/css/tailwind/baseStyle.css:268`.
- Todo elemento interactivo muestra un contorno de foco de 2 px en `primary` al navegar con teclado.
- Área táctil mínima de 44 × 44 px: los botones usan `min-h-11`.
- Una sola etiqueta `h1` en la página y títulos sin saltos de nivel.
- Toda imagen lleva `width`, `height` y `alt`. Las que no están en la primera pantalla llevan `loading="lazy"` y `decoding="async"`.
- El contenido se renderiza desde el primer momento: no envolver el encabezado ni las imágenes en `v-if="isMounted"`.

## 7. Comprobaciones comunes

Se ejecutan en todas las fases. El repositorio no tiene tests.

| Id | Comprobación | Resultado esperado |
| --- | --- | --- |
| V1 | `npm run generate` | Termina con código 0 y sin líneas `[Vue warn]` |
| V2 | `npx --no-install prettier --end-of-line auto --check <archivos .vue, .ts y .js de la fase>` | `All matched files use Prettier code style!` |
| V3 | Buscar en los archivos de la fase: `[#` dentro de `class`, `style="`, `dark:`, `console.log`, `debugger`, `as any` | Cero coincidencias |
| V4 | Contar las líneas de cada `.vue` de la fase | 200 o menos |
| V5 | Capturas a 1280 px y a unos 500 px de ancho; recorrer la zona con la tecla Tab | Se ve lo que dice «Se ve al terminar»; sin scroll horizontal; foco visible en cada control |
| V6 | `git commit` | La revisión automática termina con `STATUS: PASSED` |

Notas sobre V2:

- Hoy fallan `components/Skills/index.vue` y los cuatro archivos de `assets/css/`. El resto pasa.
- `components/Skills/index.vue` se reescribe en F4 y debe quedar pasando.
- Los `.css` no se comprueban: conservar su sangría de cuatro espacios.
- Sin `--end-of-line auto` la comprobación falla en esta máquina por los finales de línea de Windows.

## 8. Fases

### F0 — Base limpia

| Campo | Contenido |
| --- | --- |
| Objetivo | Que `npm run dev` arranque sin líneas rojas ni avisos de host |
| Se ve al terminar | La terminal ya no muestra las dos líneas `ERROR ... [DEP0180]` ni `Invalid hostname`. El sitio no cambia |
| Depende de | C1 |
| Archivos | `nuxt.config.ts`, `.npmrc` (nuevo) |

Pasos:

1. En `nuxt.config.ts:33`, borrar la línea `host: ' 192.168.35.241',`. Es una IP propia de una máquina y lleva un espacio delante. Conservar `port: 3000`.
2. Crear `.npmrc` en la raíz con una sola línea: `node-options=--disable-warning=DEP0180`.
3. No actualizar `nuxt` ni ninguna otra dependencia.

Datos verificados en esta máquina el 2026-10-08, con Node 24.15.0:

- El aviso nace en `node_modules/nuxi/` (la CLI de Nuxt), en la función `tryStatSync`, y sale dos veces al arrancar. No viene del código del proyecto.
- Con `NODE_OPTIONS=--disable-warning=DEP0180` el servidor arranca sin ninguna línea `ERROR` y la página responde 200.
- Con ese `.npmrc`, npm pasa esa misma variable a los scripts de `package.json`.

Si después de este cambio `DEP0180` sigue apareciendo, detenerse y avisar al autor.

Comprobaciones propias:

- `npm run dev -- --port 3210`: la salida no contiene `DEP0180` ni `Invalid hostname`, y `http://localhost:3210/` responde.
- El aviso amarillo `Browserslist: caniuse-lite is outdated` sigue apareciendo. Es esperado (sección 10).

Mensaje de commit: `fix(config): servidor de desarrollo sin IP fija ni aviso de deprecacion`

### F1 — Sistema de diseño

| Campo | Contenido |
| --- | --- |
| Objetivo | Aplicar colores, fuentes y estilos base a todo el sitio |
| Se ve al terminar | Fondo casi negro y neutro, texto en IBM Plex Sans, botones y campos planos con esquinas rectas. Las secciones conservan su disposición y algunos degradados propios hasta su fase |
| Depende de | C1, F0 |
| Archivos | `assets/css/styles/_colors.css`, `tailwind.config.js`, `nuxt.config.ts`, `assets/css/tailwind/baseStyle.css` |

Pasos:

1. Reemplazar todo el contenido de `assets/css/styles/_colors.css` por:

   ```css
   :root {
       /* Superficies */
       --ns-dark: 11, 12, 14;
       --ns-backgroundContent: 19, 21, 24;
       --ns-line: 42, 45, 51;
       --ns-line-strong: 104, 111, 124;

       /* Texto */
       --ns-light: 237, 238, 240;
       --ns-muted: 154, 160, 170;

       /* Acento: el azul del logo */
       --ns-primary: 25, 91, 255;
       --ns-primary-soft: 91, 140, 255;

       /* Estado */
       --ns-success: 70, 201, 58;
       --ns-danger: 255, 71, 87;
       --ns-warn: 255, 186, 0;

       /* Marca externa */
       --ns-whatsapp: 37, 211, 102;
   }
   ```

   Las variables que desaparecen no tienen uso, salvo `--vs-shadow-opacity` y
   `--vs-shadow-opacity-hover`, que usa `.input-form` y se reescribe en el paso 4.

2. En `tailwind.config.js`, dejar `theme.extend` así:

   ```js
   extend: {
     colors: {
       primary: 'rgb(var(--ns-primary))',
       primarySoft: 'rgb(var(--ns-primary-soft))',
       success: 'rgb(var(--ns-success))',
       danger: 'rgb(var(--ns-danger))',
       warn: 'rgb(var(--ns-warn))',
       dark: 'rgb(var(--ns-dark))',
       light: 'rgb(var(--ns-light))',
       Content: 'rgb(var(--ns-backgroundContent))',
       muted: 'rgb(var(--ns-muted))',
       line: 'rgb(var(--ns-line))',
       lineStrong: 'rgb(var(--ns-line-strong))',
     },
     fontFamily: {
       sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
       mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
     },
   },
   ```

3. En `nuxt.config.ts`, agregar dentro de `defineNuxtConfig`:

   ```ts
   app: {
     head: {
       htmlAttrs: { lang: 'es' },
       link: [
         { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
         { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
         {
           rel: 'stylesheet',
           href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap',
         },
       ],
     },
   },
   ```

4. En `assets/css/tailwind/baseStyle.css`:
   - Agregar al inicio:

     ```css
     @layer base {
         body {
             @apply bg-dark font-sans text-base text-light antialiased;
         }

         a:focus-visible,
         button:focus-visible,
         input:focus-visible,
         textarea:focus-visible {
             outline: 2px solid rgb(var(--ns-primary));
             outline-offset: 2px;
         }
     }

     @layer components {
         .eyebrow {
             @apply font-mono text-xs font-medium uppercase tracking-widest;
         }

         .button-default,
         .button-default-border {
             @apply inline-flex min-h-11 items-center justify-center px-6 py-3 font-mono text-sm font-medium transition-colors duration-200;
         }

         .button-default {
             @apply bg-primary text-white hover:bg-light hover:text-dark;
         }

         .button-default-border {
             @apply border border-lineStrong text-light hover:border-light;
         }

         .button-default:disabled,
         .button-default-border:disabled {
             @apply cursor-not-allowed opacity-50;
         }

         .input-form {
             @apply w-full border border-lineStrong bg-Content px-4 py-3 text-base text-light transition-colors duration-200 focus:border-primary;
         }
     }
     ```

   - Borrar las definiciones anteriores de `.button-default` (línea 41), `.button-default-border` (línea 99), `.input-form` (línea 26) y el bloque de foco (línea 257).
   - Cambiar `.classDark` (línea 6) a `@apply bg-dark text-light;`.
   - No tocar todavía `.content` (F2) ni borrar otras clases (F7).

Si la revisión automática rechaza la URL de Google Fonts por la regla de endpoints externos:
detenerse y avisar al autor. No forzar el commit.

Comprobaciones propias:

- `dist/index.html` contiene `lang="es"` y un enlace a `fonts.googleapis.com`.
- En el navegador, el texto corrido usa IBM Plex Sans y los botones JetBrains Mono.

Mensaje de commit: `feat(ui): sistema de diseno con colores monocromos y tipografia propia`

### F2 — Marco de la página

| Campo | Contenido |
| --- | --- |
| Objetivo | Esqueleto nuevo: scroll de página, encabezado fijo, pie al final, título de sección limpio y orden nuevo |
| Se ve al terminar | Encabezado de 64 px siempre visible con logo pequeño y menú; barra de scroll normal; el pie solo aparece al final; títulos a la izquierda y sin anillo; secciones en el orden de C4; botón de WhatsApp abajo a la derecha, neutro |
| Depende de | F1, C2, C4 |
| Archivos | `pages/index.vue`, `components/Header_.vue`, `components/Footer_.vue`, `components/globalComponents/WhatsAppButton.vue`, `components/globalComponents/ComponentTitle.vue`, `components/globalComponents/layoutBase.vue`, `assets/css/tailwind/baseStyle.css` |

```text
768 px o más
+--------------------------------------------------------------------------+
| [logo]               Inicio  Portafolio  Habilidades  Sobre mí  Contacto |  64 px, fijo
+--------------------------------------------------------------------------+

Menos de 768 px
+--------------------------------+
| [logo]                [ Menú ] |  64 px, fijo
+--------------------------------+
| Inicio                         |  panel: solo si el menú está abierto
| Portafolio                     |
| Habilidades                    |
| Sobre mí                       |
| Contacto                       |
+--------------------------------+
```

Pasos:

1. `assets/css/tailwind/baseStyle.css`: borrar `.content` (línea 2) y `.classDark`, y agregar dentro de `@layer components`:

   ```css
   .content {
       @apply mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8;
   }
   ```

2. `components/globalComponents/layoutBase.vue`: la plantilla queda `<div class="content py-16 md:py-24"><slot></slot></div>`.

3. `pages/index.vue`:
   - Raíz: `<div class="flex min-h-screen flex-col">`.
   - `<main class="flex-1">`, sin `content`, sin `overflow-y-auto`, sin `scrollbarClass`.
   - Cada sección: `<section v-for="(component, key) in components" :key="key" :id="key" class="scroll-mt-16 border-t border-line first:border-t-0">`.
   - Orden del objeto `components` (línea 19): `home`, `portfolio`, `skills`, `about`, `contact`.
   - Opciones del observer (línea 42): `{ rootMargin: '-40% 0px -60% 0px', threshold: 0 }`. Con el umbral actual de 0,5 una sección más alta que dos pantallas nunca se marcaría como activa.
   - Borrar `isDarkMode` (línea 15), el bloque `<style scoped>` (línea 82) y `class="select-none"` del pie.
   - Conservar `provide('activeSection', ...)`, `checkMobile`, el listener de `resize` y la limpieza de `onBeforeUnmount`.

4. `components/Header_.vue`:
   - Script: borrar `isDarkMode` e `isMounted`. Conservar `activeSection`, `isMobile`, `isActivatedMenu`, `toggleMenu`, `closeMenu` y los dos listeners.
   - `menuItems`: mismo orden que el paso 3, con `Sobre mí` con tilde.
   - En `scrollToSection`, cambiar `if (isMobile.value) toggleMenu();` por `isActivatedMenu.value = false;`.
   - Agregar `watch(isMobile, (isNowMobile) => { if (!isNowMobile) isActivatedMenu.value = false; });`.
   - Plantilla:

     ```vue
     <header class="sticky top-0 z-40 border-b border-line bg-dark">
       <div id="menu-container" class="content relative flex h-16 items-center justify-between">
         <img src="@assets/svg/logoN@r.svg" alt="Logo de Alonso Naro" width="32" height="32" class="h-8 w-8" />
         <button
           type="button"
           class="button-default-border md:hidden"
           aria-controls="main-menu"
           :aria-expanded="isActivatedMenu"
           @click="toggleMenu"
         >
           Menú
         </button>
         <nav
           id="main-menu"
           aria-label="Navegación principal"
           :class="isActivatedMenu ? 'flex' : 'hidden'"
           class="absolute inset-x-0 top-16 flex-col border-b border-line bg-dark px-4 py-2 md:static md:flex md:flex-row md:gap-8 md:border-0 md:p-0"
         >
           <button
             v-for="item in menuItems"
             :key="item.id"
             type="button"
             :aria-current="activeSection === item.id ? 'true' : undefined"
             :class="activeSection === item.id ? 'text-primarySoft' : 'text-muted hover:text-light'"
             class="min-h-11 text-left font-mono text-sm transition-colors duration-200"
             @click="scrollToSection(item.id)"
           >
             {{ item.name }}
           </button>
         </nav>
       </div>
     </header>
     ```

   - Borrar el bloque `<style scoped>` completo.

5. `components/Footer_.vue`: borrar el script del store y el bloque de estilos. Plantilla:

   ```vue
   <footer class="border-t border-line">
     <p class="content py-8 text-center text-sm text-muted md:text-left">
       &copy; {{ year }},
       <a
         href="https://github.com/CarlosNaro"
         target="_blank"
         rel="noopener noreferrer"
         class="text-light underline-offset-4 transition-colors duration-200 hover:text-primarySoft hover:underline"
         >Developer Naro</a
       >
     </p>
   </footer>
   ```

6. `components/globalComponents/WhatsAppButton.vue`:
   - Contenedor: `fixed bottom-4 right-4 z-30`.
   - Enlace: `btn-whatsApp flex h-12 w-12 items-center justify-center border border-lineStrong bg-Content transition-colors duration-200`. Conservar `href`, `target`, `rel` y `aria-label`.
   - Ícono: `width="24" height="24"`.
   - Estilos con alcance: `.btn-whatsApp { color: rgb(var(--ns-whatsapp)); }` y `.btn-whatsApp:hover { border-color: rgb(var(--ns-whatsapp)); }`. Borrar el resto.

7. `components/globalComponents/ComponentTitle.vue`: props `title: string` e `index?: string` (valor por defecto `''` con `withDefaults`). Plantilla:

   ```vue
   <div class="flex flex-col gap-3">
     <span v-if="index" class="eyebrow text-primarySoft">{{ index }}</span>
     <h2 class="font-mono text-2xl font-bold tracking-tight text-light md:text-3xl">{{ title }}</h2>
   </div>
   ```

   Cada sección pasa su número (`01` a `04`) en su propia fase.

Comprobaciones propias:

- La barra de scroll es la del navegador y el pie solo se ve al llegar al final.
- Cada opción del menú lleva a su sección y el título no queda tapado por el encabezado.
- Al recorrer la página, la opción activa cambia también dentro de Portafolio.
- A unos 500 px de ancho: `Menú` abre y cierra el panel; elegir una opción lo cierra.
- `dist/index.html` contiene `Navegación principal`: el menú ya se renderiza desde el servidor.

Mensaje de commit: `feat(shell): encabezado fijo, pie al final y scroll de pagina`

### F3 — Inicio

| Campo | Contenido |
| --- | --- |
| Objetivo | Que la primera pantalla diga quién es, qué hace y a dónde ir |
| Se ve al terminar | Etiqueta azul con el rol, nombre completo en grande, una frase, dos botones y una línea con el stack. Sin avatar |
| Depende de | F2, C5 |
| Archivos | `components/Home/index.vue` |

```text
+------------------------------------------------------------------+
| DESARROLLADOR DE SOFTWARE                    etiqueta, azul suave |
|                                                                  |
| Alonso Naro Saldaña                          h1: 36 / 60 / 72 px |
|                                                                  |
| Soy un desarrollador de software apasionado por crear            |
| soluciones tecnológicas eficientes y escalables.                 |
|                                                                  |
| [ Ver proyectos ]  [ Visualizar CV ]                             |
|                                                                  |
| Vue.js · Django · TypeScript · Tailwind CSS       mono, atenuado |
+------------------------------------------------------------------+
```

Pasos:

1. Dentro de `<LayoutBase>`, sin clases extra:
   - `<p class="eyebrow text-primarySoft">Desarrollador de software</p>`
   - `<h1>` con las clases de 6.3 más `mt-6`: `Alonso Naro Saldaña`
   - `<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">` con la frase del dibujo.
   - `<div class="mt-10 flex flex-col gap-4 sm:flex-row">` con `<a href="#portfolio" class="button-default">Ver proyectos</a>` y `<button type="button" class="button-default-border" @click="isModalVisible = true">Visualizar CV</button>`.
   - `<p class="mt-12 font-mono text-sm text-muted">Vue.js · Django · TypeScript · Tailwind CSS</p>`
2. Modal de CV: conservar `Teleport`, `isModalVisible` y el cierre al pulsar fuera. Dentro del panel, una fila superior con `<a :href="cvPdfUrl" target="_blank" rel="noopener noreferrer">Abrir en una pestaña nueva</a>` y `<button type="button" class="button-default-border">Cerrar</button>`; debajo, el `<iframe>` con su `title` actual.
3. Estilos con alcance del modal, solo con variables: fondo `rgba(var(--ns-dark), 0.85)`; panel con fondo `rgb(var(--ns-backgroundContent))` y borde de 1 px `rgb(var(--ns-line))`; visor de 80vw por 80vh como hoy.
4. Borrar: los imports `developerPng`, `eyeSolidSvg` e `imageSolidSvg`, `isMounted`, la imagen, el esqueleto, `select-none` y todas las reglas con `linear-gradient` o `!important`.

Comprobaciones propias:

- `dist/index.html` contiene una sola etiqueta `<h1` y el texto `Alonso Naro Saldaña`.
- Ningún archivo de `dist/_nuxt/` empieza por `developer.`.
- `Ver proyectos` lleva a Portafolio. El modal abre, cierra con `Cerrar` y al pulsar fuera, y el enlace abre el PDF en otra pestaña.

Mensaje de commit: `feat(home): inicio tipografico con nombre, rol y accesos a proyectos y CV`

### F4 — Habilidades y Sobre mí

| Campo | Contenido |
| --- | --- |
| Objetivo | Habilidades legibles por área y un perfil que se lee en diez segundos |
| Se ve al terminar | Habilidades en tres filas con nombre de grupo; Sobre mí con texto a la izquierda, foto en escala de grises a la derecha y tres datos debajo del texto |
| Depende de | F2, C2, C5 |
| Archivos | `components/Skills/index.vue`, `components/About/index.vue` |

```text
02
Habilidades
--------------------------------------------------------------------
FRONTEND          [Vue.js] [Element-plus] [Ionic] [TypeScript]
                  [JavaScript] [HTML] [CSS] [Tailwind CSS]
--------------------------------------------------------------------
BACKEND Y DATOS   [Python] [Django] [PostgreSQL] [Firebase] [Supabase]
--------------------------------------------------------------------
HERRAMIENTAS      [Git] [GitHub]

03
Sobre mí
+------------------------------------------+-----------------------+
| Párrafo 1 (sin cambios)                  |                       |
| Párrafo 2 (sin cambios)                  |     foto_2.png        |
|                                          |   escala de grises    |
| TÍTULO      | UNIVERSIDAD   | CIUDAD     |                       |
+------------------------------------------+-----------------------+
```

Pasos en `components/Skills/index.vue`:

1. Cambiar los imports relativos por el alias: `@assets/svg/<archivo>.svg`.
2. Reemplazar `arraySkills` por `skillGroups`, con `id`, `name` y `skills`:

   | `id` | `name` | Habilidades, en este orden |
   | --- | --- | --- |
   | `frontend` | `Frontend` | Vue.js, Element-plus, Ionic, TypeScript, JavaScript, HTML, CSS, Tailwind CSS |
   | `backend` | `Backend y datos` | Python, Django, PostgreSQL, Firebase, Supabase |
   | `tools` | `Herramientas` | Git, GitHub |

3. Plantilla: `<ComponentTitle index="02" title="Habilidades" />`; debajo, `<div class="mt-10">` con una fila por grupo:
   - Fila: `grid grid-cols-1 gap-4 border-t border-line py-6 md:grid-cols-12`.
   - Nombre del grupo: `<h3 class="eyebrow text-muted md:col-span-3">`.
   - Lista: `<ul class="flex flex-wrap gap-3 md:col-span-9">`.
   - Elemento: `<li class="flex items-center gap-3 border border-line bg-Content px-3 py-2">` con `<span class="flex h-7 w-7 items-center justify-center bg-light"><img :src="skill.icon" alt="" width="20" height="20" class="h-5 w-5" /></span>` y `<span class="text-sm text-light">{{ skill.name }}</span>`.
   - El cuadro claro garantiza que todos los logos se vean sobre el fondo oscuro, sea cual sea su color.
4. Borrar `isDarkMode`, el import del store, `select-none` y el bloque `<style scoped>`.

Pasos en `components/About/index.vue`:

1. `<ComponentTitle index="03" title="Sobre mí" />`.
2. Retícula: `mt-10 grid grid-cols-1 gap-10 md:grid-cols-12`. Texto en `md:col-span-7`, foto en `md:col-span-5`.
3. Los dos textos de `components/About/index.vue:20` y `components/About/index.vue:25` se conservan palabra por palabra, cada uno en un `<p class="text-base leading-relaxed text-muted">`, con `mt-4` entre ellos.
4. Debajo, `<dl class="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">`. Cada dato: `<dt class="eyebrow text-muted">` y `<dd class="mt-2 text-sm text-light">`.

   | `dt` | `dd` |
   | --- | --- |
   | `Título` | `Ingeniero de sistemas e informática` |
   | `Universidad` | `Universidad Nacional de la Amazonía Peruana` |
   | `Ciudad` | `Iquitos, Loreto, Perú` |

5. Foto: `<div class="flex items-end justify-center border border-line bg-Content">` con `<img :src="foto2" alt="Foto de Alonso Naro" width="430" height="580" loading="lazy" decoding="async" class="h-auto w-full max-w-xs grayscale" />`.
6. Borrar `isMounted`, el esqueleto, el import `imageSolidSvg`, el `id="circulo"`, las clases `mirror` y `mask-gradient-both`, y el bloque `<style scoped>`.

Comprobaciones propias:

- Las 15 habilidades aparecen una vez cada una, en el grupo indicado.
- `dist/index.html` contiene tres etiquetas `<dt`.
- La foto se ve en escala de grises y no se deforma.

Mensaje de commit: `feat(ui): habilidades agrupadas por area y perfil con datos clave`

### F5 — Portafolio

| Campo | Contenido |
| --- | --- |
| Objetivo | Que los seis proyectos se vean sin interacción |
| Se ve al terminar | Seis tarjetas con captura, número, título, descripción completa y tecnologías. Dos columnas desde 1280 px, una por debajo. Sin carrusel ni botón de ojo |
| Depende de | F2, F4, C2, C3 |
| Archivos | `components/Portfolio/index.vue`, `components/Portfolio/components/CollaborationProject.vue`, `components/Portfolio/components/ProjectCard.vue` (nuevo), `components/Portfolio/Interface/IProject.ts` (nuevo), `components/global.store.ts`; se borran `components/globalComponents/CarouselSlider.vue` y `components/globalComponents/CarouselItem_project.vue` |

```text
1280 px o más: dos columnas          Menos de 640 px: una columna, apilado
+------------------------------+     +------------------------+
| +--------+  01               |     |      +--------+        |
| |        |  Título           |     |      | captura|        |
| | captura|  Descripción      |     |      +--------+        |
| |        |  completa         |     | 01                     |
| +--------+  [chip] [chip]    |     | Título                 |
+------------------------------+     | Descripción completa   |
                                     | [chip] [chip]          |
                                     +------------------------+
```

Pasos:

1. `components/Portfolio/Interface/IProject.ts`: `export interface IProject` con `id: number`, `src: string`, `title: string`, `description: string`, `technologies: string[]`, `width: number`, `height: number`.
2. `components/Portfolio/components/CollaborationProject.vue`:
   - Renombrar `images` (línea 18) a `projects`, tiparlo como `IProject[]` y agregar a cada proyecto el tamaño de su imagen según la tabla 5.3.
   - Aplicar los dos cambios de texto de la sección 9.
   - Borrar los imports de Swiper, del carrusel y del store, `activeIndex`, `isNavigationEnabled`, `onSlideChange` y el bloque `<style scoped>`.
   - Agregar `const formatIndex = (position: number): string => String(position + 1).padStart(2, '0');`.
   - Plantilla: `<h3 class="eyebrow mt-10 text-muted">Proyectos en colaboración</h3>` y `<div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">` con `<ProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" :index="formatIndex(index)" />`.
3. `components/Portfolio/components/ProjectCard.vue`: props `project: IProject` e `index: string`. Plantilla:

   ```vue
   <article class="flex flex-col gap-6 border border-line bg-Content p-6 sm:flex-row">
     <div class="flex shrink-0 justify-center border border-line bg-dark p-3 sm:w-40 sm:self-start">
       <img
         :src="project.src"
         :alt="project.title"
         :width="project.width"
         :height="project.height"
         loading="lazy"
         decoding="async"
         class="h-56 w-auto sm:h-auto sm:w-full"
       />
     </div>
     <div>
       <span class="eyebrow text-primarySoft">{{ index }}</span>
       <h4 class="mt-2 font-mono text-lg font-bold text-light">{{ project.title }}</h4>
       <p class="mt-3 text-sm leading-relaxed text-muted">{{ project.description }}</p>
       <ul class="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
         <li
           v-for="tech in project.technologies"
           :key="tech"
           class="border border-line px-2 py-1 font-mono text-xs text-muted"
         >
           {{ tech }}
         </li>
       </ul>
     </div>
   </article>
   ```

4. `components/Portfolio/index.vue`: `<ComponentTitle index="01" title="Portafolio" />`. El párrafo de la línea 10 se conserva palabra por palabra con `class="mt-10 max-w-3xl text-base leading-relaxed text-muted"`.
5. Borrar los dos archivos del carrusel.
6. `components/global.store.ts`: borrar `isDarkMode` e `isTextVisible` con sus funciones `get` y `set`. Queda solo `isMobile`, que usa `components/Header_.vue`.
7. No tocar `components/Portfolio/components/PersonalProject.vue` (sección 10).

Comprobaciones propias:

- `dist/index.html` contiene seis etiquetas `<article`.
- La búsqueda de `swiper` en `components/` y `pages/` no devuelve nada.
- La búsqueda de `isDarkMode` e `isTextVisible` en `components/` y `pages/` no devuelve nada.
- A unos 500 px de ancho las tarjetas se apilan y la captura no se deforma.

Mensaje de commit: `feat(portfolio): grilla con los seis proyectos a la vista en lugar del carrusel`

### F6 — Contacto

| Campo | Contenido |
| --- | --- |
| Objetivo | Un formulario que se entiende sin adivinar y un botón de enviar evidente |
| Se ve al terminar | Datos de contacto a la izquierda como lista con etiquetas; formulario a la derecha con etiquetas visibles, error bajo el campo y botón azul `Enviar mensaje` |
| Depende de | F2 |
| Archivos | `components/Contact/index.vue`, `components/Contact/components/ContactInfo.vue` (nuevo), `components/Contact/components/ContactField.vue` (nuevo), `components/globalComponents/Alert.vue` |

```text
04
Contacto
+--------------------------+---------------------------------------+
| ¿Tienes un proyecto en   | NOMBRE *            EMAIL *           |
| mente? Hablemos.         | [_______________]   [_______________] |
|                          |                     Email inválido    |
| CORREO                   | NÚMERO DE CELULAR   ASUNTO *          |
| alonsonaro75@gmail.com   | [_______________]   [_______________] |
| UBICACIÓN                | MENSAJE *                             |
| Iquitos-Loreto, Perú     | [___________________________________] |
| TELÉFONO                 | [___________________________________] |
| +51 995 069 323          |                                       |
|                          | [ Enviar mensaje ]                    |
+--------------------------+---------------------------------------+
```

Pasos:

1. `components/Contact/components/ContactInfo.vue`: componente sin lógica. Un `<dl class="mt-8 flex flex-col gap-6">` con tres pares `dt` (`eyebrow text-muted`) y `dd` (`mt-2 text-base text-light`):
   - `Correo`: `<a href="mailto:alonsonaro75@gmail.com">alonsonaro75@gmail.com</a>`
   - `Ubicación`: `Iquitos-Loreto, Perú`
   - `Teléfono`: `<a href="tel:+51995069323">+51 995 069 323</a>`
   - Enlaces: `underline-offset-4 transition-colors duration-200 hover:text-primarySoft hover:underline`.
2. `components/Contact/components/ContactField.vue`:
   - Props con `interface Props` y `withDefaults`: `id: string`, `label: string`, `modelValue: string`, `type?: 'text' | 'email' | 'tel'` (por defecto `'text'`), `isRequired?: boolean`, `isMultiline?: boolean`, `error?: string` (por defecto `''`).
   - Evento: `defineEmits<{ 'update:modelValue': [value: string] }>()`, emitido desde una función `onInput(event: Event)`.
   - La raíz es un único `<div>`: así la clase que recibe desde fuera (por ejemplo `sm:col-span-2`) se aplica a él.
   - Plantilla: `<label :for="id" class="eyebrow mb-2 block text-muted">` con el texto y, si es obligatorio, `<span aria-hidden="true"> *</span>`; después un `<textarea class="input-form min-h-36">` si `isMultiline`, o un `<input class="input-form">` si no. Ambos con `:id`, `:value`, `:required`, `:aria-invalid="error ? 'true' : undefined"` y `:aria-describedby="error ? id + '-error' : undefined"`. Al final, `<p v-if="error" :id="id + '-error'" class="mt-2 text-sm text-danger">{{ error }}</p>`.
3. `components/Contact/index.vue`:
   - No cambiar `sendEmail`, `closeAlert`, `showMessage`, `closeDialog` ni los estados.
   - Agregar `const emailError = computed(() => (formData.value.email && !isValidEmail(formData.value.email) ? 'Email inválido' : ''));`.
   - `<ComponentTitle index="04" title="Contacto" />`.
   - Retícula: `mt-10 grid grid-cols-1 gap-10 md:grid-cols-12`. Columna izquierda `md:col-span-4`: la frase de la sección 9 en `<p class="text-lg text-muted">` y `<ContactInfo />`. Columna derecha `md:col-span-8`: el formulario.
   - Formulario: `<form class="grid grid-cols-1 gap-6 sm:grid-cols-2" novalidate @submit.prevent="sendEmail">`. Con `novalidate` siguen funcionando las alertas propias en lugar de los globos del navegador.
   - Campos, con `v-model` sobre `formData`:

     | `id` | `label` | `type` | Obligatorio | Ancho |
     | --- | --- | --- | --- | --- |
     | `contact-name` | `Nombre` | `text` | Sí | Media fila |
     | `contact-email` | `Email` | `email` | Sí | Media fila; `:error="emailError"` |
     | `contact-phone` | `Número de celular` | `tel` | No | Media fila |
     | `contact-subject` | `Asunto` | `text` | Sí | Media fila |
     | `contact-message` | `Mensaje` | texto largo | Sí | Fila completa (`sm:col-span-2`) |

   - Botón: `<button type="submit" class="button-default sm:col-span-2 sm:justify-self-start" :disabled="isLoading" :aria-busy="isLoading">` con `Enviando…` mientras `isLoading` y `Enviar mensaje` en otro caso.
   - En la alerta de error, cambiar `text-red-500` por `text-danger`.
   - Borrar los imports de íconos que queden sin uso y el bloque `<style scoped>`.
4. `components/globalComponents/Alert.vue`:
   - No cambiar las props, el evento ni `role="alert"`.
   - El botón de cierre pasa a `class="button-default-border"` con el texto `Cerrar`.
   - Estilos con alcance, solo con variables: capa `rgba(var(--ns-dark), 0.85)` sin `backdrop-filter`; panel con borde de 1 px `rgb(var(--ns-line))`, sin `border-radius`. Borrar `.close-button`.
   - Título: `font-mono text-xl font-bold`. Línea bajo el título: `border-line` en lugar de `border-gray-700`.

En este repositorio no existe el archivo de entorno con `VITE_FORMSPREE_URL`. Por eso, al enviar
datos válidos en local aparece la alerta de error de envío. Es lo esperado (`utils/sendContactEmail.ts:8`).

Comprobaciones propias:

- Enviar vacío: alerta `Error` con el texto de campos obligatorios.
- Email mal escrito: `Email inválido` bajo el campo; al enviar, alerta de formato.
- La tecla Enter dentro de un campo de una línea envía el formulario.
- El campo de celular no muestra flechas de número y admite el signo `+`.
- Cada campo tiene su etiqueta visible y el orden de tabulación sigue el orden visual.
- `components/Contact/index.vue` tiene 200 líneas o menos.

Mensaje de commit: `feat(contact): formulario con etiquetas visibles, error junto al campo y boton principal`

### F7 — Pulido

| Campo | Contenido |
| --- | --- |
| Objetivo | Cerrar el rediseño: metadatos, limpieza y revisión en todos los anchos |
| Se ve al terminar | La pestaña del navegador muestra el título del sitio. Ningún otro cambio visible |
| Depende de | F0 a F6, C1, C3 |
| Archivos | `pages/index.vue`, `assets/css/tailwind/baseStyle.css`, `nuxt.config.ts`, `package.json`, `package-lock.json` |

Pasos:

1. `pages/index.vue`: agregar `useSeoMeta({ title: 'Alonso Naro Saldaña — Desarrollador de software', description: 'Portafolio de Alonso Naro Saldaña, desarrollador de software: proyectos, habilidades y contacto.' });`.
2. `assets/css/tailwind/baseStyle.css`: para cada clase y cada `@keyframes` que queden fuera de `@layer`, buscar su nombre en `components/` y `pages/`. Borrar los que no tengan uso. Candidatos: `.card`, `.skeleton-img`, `.button-default-transparent`, `.button-light-icon`, `.custom-divider`, `.active`, `.ns-button__content`, `.scrollbarClass`, `.animate-fade-in`, `.animate-fade-in-img`, `.animate-logoPersonal` y los cuatro `@keyframes`. Conservar el bloque `prefers-reduced-motion`.
3. Quitar Swiper: en `nuxt.config.ts`, borrar las líneas 7 a 12 (los cuatro imports `swiper/css...` y sus comentarios), y ejecutar `npm uninstall swiper`. Las dos cosas van juntas: si se desinstala el paquete y quedan los imports, el build falla.
4. Revisar a 375, 768, 1024 y 1440 px de ancho: sin scroll horizontal, sin texto cortado, botones de al menos 44 px de alto.
5. Recorrer toda la página con el teclado: cada control recibe foco visible y en orden.
6. Comprobar que cada `<img>` tiene `width`, `height` y `alt`.
7. Ejecutar V1 y revisar `dist/index.html`: contiene `<title>`, `<meta name="description"` y `lang="es"`.
8. No ejecutar `npm run deploy`. Informar al autor de esta observación, sin cambiar nada: `nuxt.config.ts:30` define `router.baseURL` como `/personal-portfolio/`, pero el HTML generado lleva `baseURL:"/"`. Si el sitio se sirve bajo esa ruta, hay que verificar con el autor que los archivos de `/_nuxt/` cargan.

Comprobaciones propias:

- La búsqueda de `swiper` en todo el repositorio, sin `node_modules/`, solo aparece en este plan y en `AGENTS.md`.
- `npm run generate` termina con código 0 después de desinstalar el paquete.

Mensaje de commit: `feat(ui): metadatos de pagina y limpieza final del rediseno`

## 9. Cambios de texto

Son los únicos permitidos. Todo lo demás se conserva palabra por palabra.

| Dónde | Hoy | Después | Motivo |
| --- | --- | --- | --- |
| Menú y título | `Sobre mi` | `Sobre mí` | Tilde |
| Título de sección | `portafolio` | `Portafolio` | El título ya no se muestra en mayúsculas |
| Inicio | `¡Hola!` y `Me llamo Alonso, soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes y escalables.` | Etiqueta `Desarrollador de software`, título `Alonso Naro Saldaña` y frase `Soy un desarrollador de software apasionado por crear soluciones tecnológicas eficientes y escalables.` | El nombre pasa a ser el título. El nombre completo ya figura en Sobre mí |
| Inicio | No existe | `Vue.js · Django · TypeScript · Tailwind CSS` | Son las tecnologías que nombra el texto de Sobre mí |
| Inicio | Botón `Visualizar CV` | Botones `Ver proyectos` y `Visualizar CV` | Acceso directo al trabajo |
| Modal de CV | Botón `X` | Enlace `Abrir en una pestaña nueva` y botón `Cerrar` | Algunos navegadores móviles no muestran un PDF embebido |
| Encabezado móvil | Ícono de tres rayas | Botón con el texto `Menú` | Nombre visible |
| Portafolio | `# Proyecto en colaboración` | `Proyectos en colaboración` | Son seis proyectos |
| Portafolio, proyecto 3 | `Sistema de Transporte ( BipBip – Perú )` | `Sistema de Transporte (BipBip – Perú)` | Espacios dentro del paréntesis |
| Portafolio, proyecto 4 | `formulario de Pre inscripción` | `formulario de preinscripción` | Ortografía |
| Sobre mí | No existe | Datos `Título`, `Universidad` y `Ciudad` (F4) | Valores tomados de los dos párrafos |
| Contacto | `¿Tienes un proyecto en mente? Hablemos 😉` | `¿Tienes un proyecto en mente? Hablemos.` | Sin emoji |
| Contacto | Placeholders `Nombre`, `Email`, `N° celular`, `Asunto`, `Mensaje` | Etiquetas visibles `Nombre`, `Email`, `Número de celular`, `Asunto`, `Mensaje`, sin placeholder | Las etiquetas ya existían, ocultas |
| Contacto | Íconos con `alt` `Correo electrónico`, `Ubicación`, `Teléfono` | Etiquetas `Correo`, `Ubicación`, `Teléfono` | Texto en lugar de íconos |
| Contacto | Botón `Enviar` | `Enviar mensaje`; mientras envía, `Enviando…` | Claridad |
| Alertas | Botón `X` | Botón `Cerrar` | Nombre visible |

## 10. Fuera de alcance

| Qué queda fuera | Por qué | Dónde entraría después |
| --- | --- | --- |
| Enlace a la demo o al repositorio de cada proyecto, rol y fechas | No están en el repositorio | Campos opcionales en `components/Portfolio/Interface/IProject.ts` y un enlace en `components/Portfolio/components/ProjectCard.vue` |
| Proyectos personales | `components/Portfolio/components/PersonalProject.vue` es un borrador sin uso | Segunda grilla en `components/Portfolio/index.vue` |
| Foto profesional | Solo hay fotos informales | Reemplazar `assets/img/foto_2.png` |
| Tema claro | Decisión C2 | Un segundo juego de valores en `assets/css/styles/_colors.css` bajo otro selector. Los componentes no cambian: solo usan los nombres de color |
| Envío real del formulario | Falta el archivo de entorno con `VITE_FORMSPREE_URL` | Lo crea el autor |
| Ruta base del despliegue | Ver F7, paso 8 | `nuxt.config.ts`, decisión del autor |
| Fuentes alojadas en el propio sitio | Requiere descargar archivos de fuente | Carpeta `public/` y reglas `@font-face` |
| Aviso `caniuse-lite is outdated` | Corregirlo cambia `package-lock.json` | Decisión del autor |
| Teléfono repetido | Está en `components/Contact/index.vue` y en `components/globalComponents/WhatsAppButton.vue` | Una constante compartida en `utils/` |

Al terminar, `AGENTS.md` queda desactualizado en estos puntos. Son informativos y no hacen fallar la
revisión. Corregirlos es decisión del autor:

- Stack: nombra Swiper y no nombra los colores nuevos (`primarySoft`, `muted`, `line`, `lineStrong`).
- Estructura: dice que `components/global.store.ts` tiene `isDarkMode`, `isMobile` e `isTextVisible`. Queda solo `isMobile`.
- Estilos: dice que el modo oscuro se controla con `globalStore.getIsDarkMode()`.
- No reportar: nombra `CarouselItem_project.vue`, que deja de existir.

## 11. Seguimiento

Marcar cada fase solo cuando su commit exista y sus comprobaciones se hayan observado.

- [x] F0 — Base limpia · commit: 29495ae · evidencia: V1-V6 OK; devServer sin DEP0180 ni host IP; capturas f0-antes.png y f0-despues.png en C:/Users/Windows11/AppData/Local/Temp/personal-portfolio/capturas/
- [x] F1 — Sistema de diseño · commit: e8419d7 · evidencia: V1-V6 OK; tokens y tipografia cargados; dist/index.html con lang="es" y Google Fonts; GGA PASSED
- [x] F2 — Marco de la página · commit: dd5cd63 · evidencia: V1-V6 OK; encabezado sticky 64px, scroll nativo, pie al final, nav en dist/index.html; GGA PASSED
- [x] F3 — Inicio · commit: a0e32a9 · evidencia: V1-V6 OK; h1 unico con nombre, rol, sin avatar, modal CV; GGA PASSED
- [x] F4 — Habilidades y Sobre mí · commit: 18254e8 · evidencia: V1-V6 OK; 15 skills agrupadas en 3 areas, perfil con datos clave y foto grayscale; GGA PASSED
- [x] F5 — Portafolio · commit: 6f95583 · evidencia: V1-V6 OK; grilla con 6 tarjetas, eliminados carrusel y estados muertos del store; GGA PASSED
- [x] F6 — Contacto · commit: 04abfd5 · evidencia: V1-V6 OK; formulario con etiquetas visibles, validacion y error en campo; Alert actualizado; GGA PASSED
- [x] F7 — Pulido · commit: 24c21ee · evidencia: V1-V6 OK; useSeoMeta cargado; baseStyle.css limpio; swiper desinstalado; GGA PASSED

Para retomar: ejecutar `git log --oneline -12` y comparar los asuntos con los mensajes de commit de
la sección 8. La primera fase cuyo commit no aparece es la siguiente. Si `git status --short` muestra
archivos modificados, son de una fase a medias: revisarlos antes de seguir.

## 12. Anexo: comandos de esta máquina

Windows 11 con Git Bash. Verificados el 2026-10-08.

### Servidor de desarrollo

```bash
npm run dev -- --port 3210
```

Dejarlo en segundo plano. La página queda en `http://localhost:3210/`. Mientras arranca responde 503
durante unos segundos: esperar a que responda 200 antes de capturar. Para detenerlo, en PowerShell:

```powershell
Get-NetTCPConnection -LocalPort 3210 -State Listen | Select-Object -ExpandProperty OwningProcess
taskkill /F /T /PID <pid>
```

### Capturas

Con Microsoft Edge sin ventana. Guardarlas fuera del repositorio y usar siempre barras `/` en las rutas.

```bash
"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --disable-gpu \
  --no-first-run --hide-scrollbars --virtual-time-budget=8000 \
  --user-data-dir="<carpeta-temporal>/edge-<nombre>" \
  --window-size=1280,4200 \
  --screenshot="<carpeta-temporal>/capturas/<fase>-<antes|despues>.png" \
  http://localhost:3210/
```

- Una ventana de 1280 × 4200 captura la página completa. Antes de F2 es la única forma fiable: el scroll está dentro de `<main>`.
- Desde F2 también sirve una ventana de 1280 × 800 con el ancla de la sección: `#home`, `#portfolio`, `#skills`, `#about`, `#contact`.
- Para ver la versión móvil usar `--window-size=500,3000`. En Windows la ventana no baja de unos 500 px de ancho.
- Usar una carpeta `--user-data-dir` distinta por captura.
- Sirve igual cualquier otra herramienta de navegador que tenga el agente, a 1280 px y a 375 px de ancho.

### Revisión automática al hacer commit

- `.git/hooks/pre-commit` ejecuta `gga run`. La configuración está en `.gga`.
- Revisa los archivos en commit que terminan en `.ts`, `.tsx`, `.js`, `.jsx` o `.vue` contra `AGENTS.md`. Un commit que solo tiene `.css` o `.md` pasa al instante.
- La revisión la hace la CLI de Claude con la cuenta del autor, sea cual sea el agente que haga el commit. Consume su cuota.
- Tiempo observado: entre 3 y 14 minutos. El límite por defecto es de 300 segundos. Para ampliarlo:

  ```bash
  GGA_TIMEOUT=900 git commit -m "<mensaje>"
  ```

- La herramienta que ejecute el comando debe permitir al menos 16 minutos.
- Un commit a la vez. No lanzar otros procesos de IA mientras corre la revisión.
- `STATUS: FAILED` bloquea el commit y lista cada infracción con archivo y línea: corregirlas y repetir. Incluye infracciones que ya existían en un archivo que la fase toca.
- Un fallo con `session limit` o `ENOTFOUND` es de cuota o de red, no del código: esperar y repetir más tarde.
- Nunca usar `--no-verify`.
