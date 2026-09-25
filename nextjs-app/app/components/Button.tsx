import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "header" | "light";
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, icon, className = "" }: ButtonProps) {
  let baseStyles = "flex items-center justify-center font-medium transition-colors shrink-0 ";
  let sizeStyles = "h-[39px] text-[12px] px-6 rounded-[19.5px]";
  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-[#1b2845] text-[#fefaf6] hover:bg-black";
    if (icon) sizeStyles = "h-[39px] text-[12px] pl-6 pr-4 rounded-[19.5px] gap-2";
  } else if (variant === "secondary") {
    variantStyles = "border border-[#d2bfaf] text-[#1b2845] hover:bg-[#d2bfaf]/20";
  } else if (variant === "light") {
    variantStyles = "bg-[#f7f1e9] text-[#0d2844] hover:bg-white tracking-[0.2px]";
    sizeStyles = "h-[54px] text-[13px] px-8 rounded-[27px]";
    if (icon) sizeStyles = "h-[54px] text-[13px] pl-8 pr-6 rounded-[27px] gap-6";
  } else if (variant === "header") {
    variantStyles = "bg-[#122c52] text-[#faf6f0] hover:bg-[#1a3d72]";
    sizeStyles = "h-[47px] text-[15.5px] px-6 rounded-[23.5px]";
    if (icon) sizeStyles = "h-[47px] text-[15.5px] px-6 rounded-[23.5px] gap-2";
  }

  return (
    <Link href={href} className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}
