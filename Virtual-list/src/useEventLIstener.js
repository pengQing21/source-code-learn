import { useEffect } from 'react';

const useEventListener = (event, handler = (...e) => { }, target = window) => {

    useEffect(() => {
        const targetElement = 'current' in target ? target.current : window;
        const useEventListener = (event) => {
            return handler(event)
        }
        targetElement.addEventListener(event, useEventListener)
        return () => {
            targetElement.removeEventListener(event, useEventListener)
        }
    }, [event])
};

export default useEventListener;