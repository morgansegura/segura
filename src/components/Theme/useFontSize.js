import { useEffect, useState } from 'react';

export const useFontSize = () => {
    const [fontSize, setSize] = useState('normal');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = (mode) => {
        window.localStorage.setItem('fontSize', mode);
        setSize(mode);
    };

    const toggleFontSize = (size) => {
        switch (size) {
            case 'normal':
                setMode('normal');
                break;
            case 'medium':
                setMode('medium');
                break;
            case 'large':
                setMode('large');
                break;
            default:
                setMode('normal');
        }
    };

    useEffect(() => {
        const localFontSize = window.localStorage.getItem('fontSize');
        if (localFontSize) {
            setSize(localFontSize);
        } else {
            setMode('normal');
        }
        setComponentMounted(true);
    }, []);

    return [fontSize, toggleFontSize, componentMounted];
};
