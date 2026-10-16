const REVEAL_SELECTOR = '[data-reveal]';
const REVEAL_MIN_VISIBLE_PX = 80;
const REVEAL_MAX_ORDER = 8;
const SUBPIXEL_TOLERANCE_PX = 0.5;
const THRESHOLD_STEPS = 20;
const REVEAL_THRESHOLDS = Array.from({ length: THRESHOLD_STEPS + 1 }, (_, step) => step / THRESHOLD_STEPS);

// Anima la entrada de los elementos con `data-reveal` cuando llegan a la ventana.
// Solo oculta lo que al cargar queda debajo de la ventana: lo visible nunca parpadea
// y, sin JavaScript, todo el contenido sigue a la vista.
export function useScrollReveal(): void {
  let revealObserver: IntersectionObserver | undefined;

  const handleEntries = (entries: IntersectionObserverEntry[]): void => {
    let order = 0;

    entries.forEach((entry) => {
      const element = entry.target;
      if (!(element instanceof HTMLElement)) return;

      if (element.dataset.revealState !== 'pending') {
        const isBelowViewport = !entry.isIntersecting && entry.boundingClientRect.top > 0;

        if (isBelowViewport) {
          element.dataset.revealState = 'pending';
        } else {
          revealObserver?.unobserve(element);
        }
        return;
      }

      const requiredHeight = Math.min(REVEAL_MIN_VISIBLE_PX, entry.boundingClientRect.height) - SUBPIXEL_TOLERANCE_PX;
      if (entry.intersectionRect.height < requiredHeight) return;

      // Lo que entra a la vez se escalona en el orden del documento
      element.style.setProperty('--motion-order', String(Math.min(order, REVEAL_MAX_ORDER)));
      element.dataset.revealState = 'in';
      revealObserver?.unobserve(element);
      order += 1;
    });
  };

  onMounted(() => {
    const observer = new IntersectionObserver(handleEntries, { threshold: REVEAL_THRESHOLDS });

    document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => observer.observe(element));
    revealObserver = observer;
  });

  onBeforeUnmount(() => {
    revealObserver?.disconnect();
  });
}
