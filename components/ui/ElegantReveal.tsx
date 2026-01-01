"use client";

import { useEffect, useRef, useState } from "react";

type ElegantRevealProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none"; // Kept for API compatibility, though currently hardcoded to 'enter' animation
};

export default function ElegantReveal({
    children,
    delay = 0,
    className = "",
}: ElegantRevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                animationDelay: `${delay}ms`,
            }}
            className={`
        ${visible ? "animate-enter" : "opacity-0"} 
        ${className}
      `}
        >
            {children}
        </div>
    );
}
