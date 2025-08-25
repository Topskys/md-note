import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { selectedNoteAtom } from '@/store'

export const FloatingNoteTitle = ({ className, ...rest }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return null

  return (
    <div className={twMerge('text-center', className)} {...rest}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  )
}
