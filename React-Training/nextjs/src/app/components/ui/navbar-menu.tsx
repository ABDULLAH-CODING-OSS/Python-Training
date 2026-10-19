"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type MenuProps = {
  children: ReactNode;
  setActive: (item: string | null) => void;
  className?: string;
};

type MenuItemProps = {
  active: string | null;
  children: ReactNode;
  item: string;
  setActive: (item: string | null) => void;
  className?: string;
};

type HoveredLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

type ProductItemProps = {
  title: string;
  href: string;
  src: string;
  description: string;
  className?: string;
};

export function Menu({ children, setActive, className }: MenuProps) {
  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "relative flex items-center justify-center gap-1 rounded-full border border-neutral-200 bg-white/90 p-1 shadow-lg backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/90",
        className,
      )}
      onMouseLeave={() => setActive(null)}
    >
      {children}
    </nav>
  );
}

export function MenuItem({
  active,
  children,
  item,
  setActive,
  className,
}: MenuItemProps) {
  const isActive = active === item;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setActive(item)}
    >
      <button
        type="button"
        aria-expanded={isActive}
        className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
        onClick={() => setActive(isActive ? null : item)}
        onFocus={() => setActive(item)}
      >
        {item}
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 mt-3 min-w-max -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-4 text-neutral-900 shadow-xl dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HoveredLink({
  children,
  href,
  className,
}: HoveredLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-neutral-600 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function ProductItem({
  title,
  href,
  src,
  description,
  className,
}: ProductItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-64 gap-3 rounded-xl p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="h-16 w-20 shrink-0 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url("${src}")` }}
      />
      <span>
        <span className="block text-sm font-semibold">{title}</span>
        <span className="mt-1 block text-xs leading-5 text-neutral-500 dark:text-neutral-400">
          {description}
        </span>
      </span>
    </Link>
  );
}