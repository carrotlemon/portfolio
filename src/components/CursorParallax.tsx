import { type ReactNode, useEffect, useRef } from "react";

interface Props {
    children: ReactNode;
    strength?: number;
}

export default function RotateParallax({ children, strength = 20 }: Props) {
    const ref = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;

            // Use window size and center for parallax calculation
            const { innerWidth, innerHeight } = window;
            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;

            const offsetX = e.clientX - centerX;
            const offsetY = e.clientY - centerY;

            const moveX = (offsetX / centerX) * strength;
            const moveY = (offsetY / centerY) * strength;

            el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            
            
        };
        const resetTransform = () => {
            const el = ref.current;
            if (el) el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", resetTransform);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", resetTransform);
        }
    }, []);

    return (
      <div
        ref={ref}
        style={{
          transition: "transform 0.1s ease-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    );
};


