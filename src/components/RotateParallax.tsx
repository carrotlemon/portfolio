import { type ReactNode, useEffect, useRef } from "react";

interface Props {
    children: ReactNode;
    perspective?: number;
    rotate?: boolean;
}

export default function RotateParallax({ children, perspective = 100, rotate = false }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const el = containerRef.current;
            if (!el) return;

            const { innerWidth, innerHeight } = window;
            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;

            const offsetX = e.clientX - centerX;
            const offsetY = e.clientY - centerY;

            const rotateY = (offsetX / centerX) * 10 * +rotate; // +boolean converts it to 1 or 0
            const rotateX = -(offsetY / centerY) * 10 * +rotate;

            el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            };

            const resetTransform = () => {
            const el = containerRef.current;
            if (el) el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            };

            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseleave", resetTransform);

            return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", resetTransform);
        };
    }, []);

    return (
      <div
        ref={containerRef}
        style={{
          transition: "transform 0.1s ease-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    );
};