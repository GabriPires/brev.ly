import Logo from '@/assets/logo.svg'
import { NewLinkForm } from '@/components/new-link-form'

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <img
        src={Logo}
        alt="Logo do brev.ly"
        className="w-[96px] mt-8 mx-auto mb-6"
      />

      <NewLinkForm />
    </div>
  )
}
