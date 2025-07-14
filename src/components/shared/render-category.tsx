import Link from 'next/link'
import { cn } from './cn'

type RenderLinkProps = {
  id: string
  name: string
  activeCategory: string
}

export const RenderLink = ({ id, name, activeCategory }: RenderLinkProps) => {
  return (
    <>
      <Link
        key={id}
        className={cn(
          'flex hover:bg-primary/40 justify-center items-center font-bold h-11 flex-grow-1 w-max min-w-[150px] rounded-2xl px-5',
          activeCategory === id && 'bg-white shadow-md shadow-gray-200 text-primary'
        )}
        href={`/#${id}`}
      >
        {name}
      </Link>
    </>
  )
}
