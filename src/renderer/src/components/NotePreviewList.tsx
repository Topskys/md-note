import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { notesMock } from '@renderer/store/mocks'
import { twMerge } from 'tailwind-merge'

export const NotePreviewList = ({ className, ...rest }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...rest}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...rest}>
      {
        // TODO: Add note preview items
        notesMock.map((note) => (
          <li key={note.title}>
            <NotePreview {...note} />
          </li>
        ))
      }
    </ul>
  )
}
