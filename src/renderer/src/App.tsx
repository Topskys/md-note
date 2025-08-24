import {
  RootLayout,
  Content,
  Sidebar,
  ActionButtonRow,
  DraggableTopBar,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from '@/components'

function App(): React.JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="flex justify-between mt-1" />
          <NotePreviewList></NotePreviewList>
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className='py-2' title='Note Title'></FloatingNoteTitle>
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
