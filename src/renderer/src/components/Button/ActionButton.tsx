import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...rest }: ActionButtonProps) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/500 hover:bg-zinc-600/500 translate-colors-duration-100',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
