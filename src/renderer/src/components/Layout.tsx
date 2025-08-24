import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export function Sidebar({ className, children, ...rest }: ComponentProps<'aside'>) {
  return (
    <aside
      className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)}
      {...rest}
    >
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={twMerge('flex-1 h-full overflow-auto', className)} {...rest}>
        {children}
      </div>
    )
  }
)

export const RootLayout = ({ className, children, ...rest }: ComponentProps<'main'>) => {
  return <main className={twMerge('flex h-screen', className)} {...rest}>{children}</main>
}
