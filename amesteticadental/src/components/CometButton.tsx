"use client";

import { ReactNode } from "react";

interface CometButtonProps {
    children: ReactNode;
    href?: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    className?: string;
    speed?: number; // segundos por órbita completa, default 2.5
}

const SIZES = {
    sm:  "px-5  py-2   text-sm  gap-2",
    md:  "px-7  py-3.5 text-sm  gap-3",
    lg:  "px-8  py-4   text-base gap-3",
};

const COMET = "conic-gradient(from 0deg, transparent 0deg, transparent 296deg, rgba(242,185,13,0.04) 312deg, rgba(242,185,13,0.18) 328deg, rgba(250,226,136,0.74) 344deg, rgba(255,250,214,0.95) 351deg, rgba(242,185,13,0.28) 356deg, transparent 360deg)";

const GOLD_GRADIENT = "linear-gradient(115deg, #8f5b11 0%, #c88412 18%, #f0b10d 34%, #f7d15b 49%, #fff0b1 56%, #f4c646 64%, #d19018 82%, #8f5b11 100%)";

export default function CometButton({
    children,
    href,
    target,
    rel,
    onClick,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    speed = 2.5,
}: CometButtonProps) {

    const isPrimary = variant === "primary";

    /* ── Inner content div ───────────────────────────────────────── */
    const inner = (
        <div
            className={`
                relative rounded-full overflow-hidden
                flex items-center justify-center font-manrope font-semibold
                ${SIZES[size]}
                ${isPrimary ? "text-[#0D0D0D]" : "text-[#F2F0E9]"}
                ${fullWidth ? "w-full" : ""}
                ${className}
            `}
            style={isPrimary ? {
                backgroundImage: GOLD_GRADIENT,
                backgroundColor: "#d8a21b",
                backgroundRepeat: "no-repeat",
                backgroundSize: "240% 100%",
                animation: "gold-shimmer 8s linear infinite",
                boxShadow: "inset 0 1px 0 rgba(255,248,214,0.65), inset 0 -8px 18px rgba(143,91,17,0.22)",
            } : {
                backgroundColor: "rgba(13,13,13,0.96)",
            }}
        >
            {/* shimmer highlight layer on top of gradient */}
            {isPrimary && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(108deg, transparent 24%, rgba(255,255,255,0.16) 46%, rgba(255,250,205,0.28) 52%, transparent 76%)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "200% 100%",
                        animation: "gold-shimmer 7s ease-in-out infinite",
                    }}
                />
            )}
            <span className="relative z-10 flex items-center gap-[inherit]">{children}</span>
        </div>
    );

    /* ── Shell: comet orbit + glow ───────────────────────────────── */
    const shell = (
        <div
            className={`comet-btn relative rounded-full p-[1.5px] overflow-hidden ${fullWidth ? "block w-full" : "inline-flex"}`}
            style={isPrimary ? {
                boxShadow: "0 0 22px rgba(242,185,13,0.18), 0 0 56px rgba(242,185,13,0.08)",
            } : undefined}
        >
            {/* Spinning comet */}
            <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                    background: COMET,
                    animation: `comet-orbit ${speed}s linear infinite`,
                }}
            />
            {inner}
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={fullWidth ? "block w-full" : "inline-block"}
            >
                {shell}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={fullWidth ? "block w-full text-left" : "inline-block"}
        >
            {shell}
        </button>
    );
}
