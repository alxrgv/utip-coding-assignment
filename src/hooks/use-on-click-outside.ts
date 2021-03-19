import { useEffect, MutableRefObject } from "react";
import { useLatest } from "./use-latest";

const MOUSEDOWN = "mousedown";

export function useOnClickOutside(
  ref: MutableRefObject<HTMLElement | undefined>,
  handler: () => void | null
) {
  const handlerRef = useLatest(handler);

  useEffect(() => {
    if (!handler) {
      return;
    }

    const listener = (event: MouseEvent) => {
      if (
        !ref.current ||
        !handlerRef.current ||
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      handlerRef.current();
    };

    document.addEventListener(MOUSEDOWN, listener);

    return () => {
      document.removeEventListener(MOUSEDOWN, listener);
    };
  }, [handler, handlerRef, ref]);
}
