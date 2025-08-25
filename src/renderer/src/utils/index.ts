import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'Asia/Shanghai'
})

// 合并类名
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

export function formatDateFromMs(ms: number) {
  return dateFormatter.format(ms)
}
