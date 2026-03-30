import { useEffect, useState } from 'react';

const AppLoader = () => {
    const [show, setShow] = useState(false);

    // Prevent immediate flicker: Only show spinner if load takes > 250ms
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 250);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-solid border-accent-warm/20 border-t-accent-warm rounded-full animate-spin shadow-lg"></div>
                <span className="sr-only">Laden...</span>
            </div>
        </div>
    );
};

export default AppLoader;
