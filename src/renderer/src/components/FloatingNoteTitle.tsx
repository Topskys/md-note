import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, title, ...rest }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('text-center', className)} {...rest}>
      <span className="text-gray-400">{title}</span>
    </div>
  )
}
