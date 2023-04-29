import { useState, useEffect } from 'react';

function useDebounce<T>(
    value: T,
    time: number,
    unDebounceFn?: (value: T, prevValue: T) => boolean
): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const unDebounced = unDebounceFn
            ? unDebounceFn(value, debouncedValue)
            : false;
        let debounce: NodeJS.Timeout | null = null;
        if (unDebounced) {
            setDebouncedValue(value);
        } else {
            debounce = setTimeout(() => {
                setDebouncedValue(value);
            }, time);
        }
        return () => {
            if (debounce !== null) {
                clearTimeout(debounce);
            }
        };
    }, [value, time]);

    return debouncedValue;
}

export default useDebounce;