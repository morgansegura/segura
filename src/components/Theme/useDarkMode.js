import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const toggleTheme = (theme) => {

        switch (theme) {
            case 'light':
                setMode('light');
                break;
            case 'dark':
                setMode('dark');
                break;
            case 'alt1':
                setMode('alt1');
                break;
            case 'alt2':
                setMode('alt2');
                break;
            default:
                setMode('dark');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        } else {
            setMode('light');
        }
        setComponentMounted(true);
    }, []);

    return [theme, toggleTheme, componentMounted];
};
