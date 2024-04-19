import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...input: ClassValue[]): string {
  return twMerge(clsx(input));
}

export { cn, type ClassValue };
