"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type NavLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string | ((state: { isActive: boolean }) => string);
  end?: boolean;
};

export function NavLink({ href, className, end = false, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    typeof href === "string" &&
    (end
      ? pathname === href
      : href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={
        typeof className === "function" ? className({ isActive }) : className
      }
      aria-current={isActive ? "page" : undefined}
      {...props}
    />
  );
}
