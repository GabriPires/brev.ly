import { DownloadSimple } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { LinkListItem } from './link-list-item'

export function MyLinks() {
  return (
    <div className="flex flex-col bg-white p-6 w-full rounded-lg gap-5 mt-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Meus Links</h2>
        <Button variant="secondary">
          <DownloadSimple size={16} className="mr-1.5" />
          Baixar CSV
        </Button>
      </div>

      <div className="flex flex-col">
        <LinkListItem />
        <LinkListItem />
        <LinkListItem />
        <LinkListItem />
      </div>
    </div>
  )
}
