import { useEffect } from "react";

export function useSectionReveal(selector = ".gsap-section") {
  useEffect(() => {
    void selector;
  }, [selector]);
}
