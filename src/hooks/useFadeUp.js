import { useEffect } from "react";

export function useFadeUp(options) {
  useEffect(() => {
    let lastY = 0;
    let timeoutId;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else if (
              entry.boundingClientRect.bottom > 0 &&
              entry.boundingClientRect.y > lastY
            ) {
              entry.target.classList.remove("is-visible");
            }
            lastY = entry.boundingClientRect.y;
          }, 50);
        });
      },
      { threshold: 0.25 },
    );

    options.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        observer.observe(el);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [options]);
}
