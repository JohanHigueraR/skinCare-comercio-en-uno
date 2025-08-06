import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCOP(value: number): string {
  return value.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });
}

