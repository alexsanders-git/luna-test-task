import {RefObject, useEffect, useRef} from "react";

const useClickOutside = (
    elementRef: RefObject<HTMLElement | null>,
    callback: () => void
) => {
    const callbackRef = useRef<() => void>(null);
    callbackRef.current = callback;

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                elementRef.current &&
                !elementRef?.current?.contains(e.target as Node) &&
                callbackRef.current
            ) {
                callbackRef.current();
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [elementRef, callbackRef]);
};

export default useClickOutside;