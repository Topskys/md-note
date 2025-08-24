import { ComponentProps } from 'react'
import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/model'

export type NotePreviewProps = {
  isActive?: boolean
} & NoteInfo &
  ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...rest
}: NotePreviewProps) => {

  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-400/50': !isActive
        },
        className
      )}
      {...rest}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </div>
  )
}
