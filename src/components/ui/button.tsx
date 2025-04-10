import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center rounded-lg h-12 font-semibold text-sm cursor-pointer p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-blue-base text-white hover:bg-blue-dark',
      secondary:
        'bg-gray-200 text-gray-500 border border-transparent hover:border-blue-base',
    },
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
