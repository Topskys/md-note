import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './NotePreview'
import { useNoteList } from '@/hooks/useNoteList'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ className, onSelect, ...rest }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNoteList({onSelect})
  console.log("🚀 ~ NotePreviewList ~ notes:", notes)

  if (notes?.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...rest}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...rest}>
      {notes?.map((note, index) => (
        <li key={note.title}>
          <NotePreview
            isActive={selectedNoteIndex === index}
            onClick={() => handleNoteSelect(index)}
            {...note}
          />
        </li>
      ))}
    </ul>
  )
}
