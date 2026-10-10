# AGENTS.md — Reglas de revisión de código

Estándares que GGA y los agentes de IA aplican al revisar o generar código en este
repositorio: un portafolio personal, sitio estático de una sola página.

| Palabra clave | Efecto |
| --- | --- |
| `REJECT if` | Regla dura. Si ocurre, el resultado es `STATUS: FAILED`. |
| `REQUIRE` | Patrón obligatorio. Si falta, el resultado es `STATUS: FAILED`. |
| `PREFER` | Recomendación. Se comenta, pero no hace fallar la revisión. |

## Stack

- Nuxt 3 + Vue 3 con Composition API en `<script setup lang="ts">`.
- Tailwind CSS 3 + PostCSS. Los colores son tokens `--ns-*` (`assets/css/styles/_colors.css`) expuestos en `tailwind.config.js`: `primary`, `success`, `danger`, `warn`, `dark`, `light`, `Content`.
- Swiper para los carruseles y Formspree para el formulario de contacto.
- Sitio estático: `nuxt generate` publicado en GitHub Pages. No hay servidor en producción.
- No hay tests ni linter en ejecución: esta revisión es la única barrera automática.

## Estructura

| Ruta | Contenido |
| --- | --- |
| `pages/index.vue` | Página única; monta las secciones. |
| `components/<Seccion>/index.vue` | Una carpeta por sección: `Home`, `About`, `Skills`, `Portfolio`, `Contact`. |
| `components/<Seccion>/components/` | Subcomponentes propios de la sección. |
| `components/<Seccion>/Interface/` | Tipos de la sección (`IEmailContent.ts`). |
| `components/globalComponents/` | Componentes compartidos entre secciones. |
| `components/global.store.ts` | Único estado global: `isDarkMode`, `isMobile`, `isTextVisible`. |
| `utils/` | Funciones puras y composables (`useXxx.ts`). |
| `plugins/` | Solo plugins de Nuxt. |

REQUIRE:
- Ubicar cada archivo nuevo según esta tabla.

## Todos los archivos

REJECT if:
- Hay secretos, tokens o credenciales en el código, o valores propios de una máquina (IP o host local).
- Se usa `any`, incluido `as any`. Usar el tipo real, o `unknown` y verificar antes de operar.
- Hay `@ts-ignore`, `@ts-expect-error` o `eslint-disable` sin un comentario que explique el motivo.
- Queda un `console.log` o un `debugger`.
- Hay un `catch` vacío. Como mínimo registrar el error o relanzarlo.
- Hay código muerto: código comentado, imports, variables o funciones sin usar, o bloques vacíos (`onMounted(() => {})`, `<style scoped></style>`, `@click=""`).
- Se duplica lógica que ya existe en `utils/`, en el store o en otro componente.

REQUIRE:
- Variables, funciones y refs en inglés y en `camelCase`; los booleanos empiezan con `is` o `has` (`isLoading`).
- `UPPER_SNAKE_CASE` para constantes globales. Un número que se repite (breakpoint, duración) va en una constante con nombre.
- `import type` para importar tipos.
- Endpoints de servicios externos y claves leídos de variables de entorno, nunca escritos en el código.

PREFER:
- Alias (`@components/…`, `@assets/…`, `~/utils/…`) en lugar de rutas relativas con `../`.
- Tipo de retorno explícito en las funciones exportadas.
- Datos de contacto (correo, teléfono, enlaces) definidos una sola vez y reutilizados.
- La solución más simple sobre la más ingeniosa.

## Componentes Vue

REJECT if:
- Se accede a `window`, `document`, `localStorage` o `navigator` en código que corre durante el `setup`. Solo se permite dentro de `onMounted`, de un manejador de evento o de `<ClientOnly>`: lo contrario rompe la generación estática.
- Se registra un `addEventListener`, un observer o un `setInterval` sin liberarlo en `onBeforeUnmount` o `onUnmounted`.
- Un `v-for` no tiene `:key`, o comparte elemento con un `v-if`.
- Se muta una prop.
- Se emite un evento que no está declarado con `defineEmits`.
- Se importa `defineProps` o `defineEmits` desde `vue`: son macros del compilador.
- Un componente crea estado o listeners propios para algo que ya expone `global.store.ts` (por ejemplo, un `isMobile` local con su propio `resize`).
- Se usa `v-html` con contenido que no es una constante del propio archivo.
- El componente supera las 200 líneas sin dividirse.

REQUIRE:
- Bloques en este orden: `<script setup lang="ts">`, `<template>`, `<style scoped>`. El script siempre es `setup` con `lang="ts"`.
- Props declaradas por tipo con una `interface` y `defineProps<Props>()`; los valores por defecto, con `withDefaults`.
- Eventos tipados con `defineEmits<{ … }>()`.
- Componentes nuevos en `PascalCase`, sin guiones bajos (`ProjectCard.vue`), salvo el `index.vue` de cada sección. Si el nombre coincide con una etiqueta HTML, agregar un prefijo (`AppHeader.vue`).
- El estado compartido nuevo se agrega a `global.store.ts`; no crear otros stores.

PREFER:
- Auto-imports de Nuxt para la API de Vue (`ref`, `computed`, `onMounted`), sin mezclarlos con imports explícitos en el mismo archivo.
- `PascalCase` al usar componentes en el template (`<LayoutBase>`).
- Expresiones simples en el template; lo complejo va a un `computed`.
- Una clave estable (`item.id`) en `v-for` en lugar del índice.
- `provide`/`inject` o el store cuando una prop atraviesa más de dos niveles.

Forma esperada de un componente:

```vue
<script setup lang="ts">
interface Props {
  title: string;
  active?: boolean;
}

withDefaults(defineProps<Props>(), { active: false });
const emit = defineEmits<{ close: [] }>();
</script>

<template>
  <section :class="{ 'opacity-90': active }">
    <h2>{{ title }}</h2>
    <button type="button" aria-label="Cerrar" @click="emit('close')">×</button>
  </section>
</template>
```

## Accesibilidad y HTML

REJECT if:
- Una `<img>` no tiene `alt`, o su `alt` es un nombre de variable o un relleno (`developerPng`, `Imagen 1`). Las imágenes decorativas llevan `alt=""`.
- Un `<div>`, un `<span>` o un `<a>` sin `href` actúa como botón con `@click`. Usar `<button type="button">` o `<a href>`.
- Un botón o enlace que solo contiene un ícono no tiene nombre accesible (`aria-label`, o un `alt` descriptivo en la imagen).
- Un campo de formulario no tiene `<label>` asociado ni `aria-label`. El `placeholder` no cuenta.
- Un `<iframe>` no tiene `title`.
- Un enlace con `target="_blank"` no lleva `rel="noopener noreferrer"`, o un `window.open(…, '_blank')` no pasa `noopener`.

PREFER:
- HTML semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) antes que `<div>`.
- Un solo `<h1>` por página y encabezados sin saltos de nivel.
- `title` y `description` de la página definidos con `useSeoMeta()`.
- Ortografía y tildes correctas en los textos visibles.

## Estilos

REJECT if:
- Hay colores hexadecimales o `rgb()` en clases arbitrarias de Tailwind (`bg-[#f0f0f0]`). Usar los tokens del tema.
- Hay un atributo `style` con valores fijos en el template. Usar clases de Tailwind o `<style scoped>`.
- Un componente tiene un `<style>` sin `scoped`. Los estilos globales viven en `assets/css/`.
- Se usan variantes `dark:` de Tailwind. El modo oscuro se controla con `globalStore.getIsDarkMode()`, no con la preferencia del sistema.

PREFER:
- Clases de Tailwind y las clases globales de `assets/css/tailwind/baseStyle.css` (`button-default`, `input-form`, `content`) antes que CSS nuevo.
- Tokens `rgb(var(--ns-…))` en lugar de colores literales dentro de `<style>`.
- Evitar `!important`.
- Resolver lo responsive con los breakpoints de Tailwind (`md:`, `lg:`) antes que con `isMobile`.

## Nuxt y red

REJECT if:
- Un archivo de `plugins/` no exporta `defineNuxtPlugin(…)`. Nuxt registra como plugin cada archivo de esa carpeta; las funciones auxiliares van en `utils/`.
- Se agrega código que necesita un servidor en producción (`server/api`, `server/routes`). GitHub Pages solo sirve archivos estáticos.

REQUIRE:
- Toda llamada de red dentro de `try/catch` y comprobando `response.ok`.
- La interfaz refleja los tres estados de una petición: cargando, éxito y error visible.
- Los datos del usuario se validan antes de enviarse: campos obligatorios y formato.

PREFER:
- `runtimeConfig.public` con `useRuntimeConfig()` en lugar de `import.meta.env`.

## No reportar

- Formato (comillas, punto y coma, ancho de línea): lo resuelve Prettier con `.prettierrc`.
- Textos de la interfaz y comentarios en español: es el idioma del sitio.
- Nombres heredados: `Header_.vue`, `Footer_.vue`, `layoutBase.vue`, `CarouselItem_project.vue`.
- Atributos `d` largos de los SVG en línea.

## Agentes que editan código

No modificar sin confirmación del autor:
- Archivos de configuración: `.gga`, `nuxt.config.ts`, `tailwind.config.js`, `tsconfig.json`, `.eslintrc.cjs`, `.prettierrc`.
- Dependencias de `package.json` (agregar o quitar paquetes).
- Variables de entorno y archivos `.env`.

Además:
- No mezclar cambios de formato con cambios de lógica en el mismo commit.

## Formato de respuesta

La PRIMERA LÍNEA debe ser exactamente una de estas dos:

```
STATUS: PASSED
STATUS: FAILED
```

Si es `STATUS: FAILED`, listar cada violación en una línea:

`archivo:línea - regla incumplida - problema y corrección concreta`

- Solo `REJECT if` y `REQUIRE` producen `STATUS: FAILED`.
- Las observaciones `PREFER` van al final, bajo `Sugerencias`, y no cambian el estado.
- Ser directo y específico: señalar la línea y el motivo, nunca un simple "esto está mal".
