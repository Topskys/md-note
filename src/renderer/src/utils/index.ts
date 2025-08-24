import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// 合并类名
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
