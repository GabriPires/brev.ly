import { X } from '@phosphor-icons/react'
import { Button } from './components/ui/button'
import { IconButton } from './components/ui/icon-button'

export function App() {
  return (
    <>
      <Button>Label</Button>
      <Button variant="secondary">Label</Button>
      <IconButton icon={X} />
    </>
  )
}
