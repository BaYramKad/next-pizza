import { cn } from './cn'
import React from 'react'
import { Container } from './container'
// import { Input } from '../ui'
import Logo from './logo'
import { HeaderCart } from './cart-container'
import { SearchInput } from './searchInput'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('', className)}>
      <Container className="flex items-center justify-between py-4 gap-x-6 border-b-1">
        <Logo />
        <div className="w-[400px]">
          <SearchInput />
        </div>

        <HeaderCart />
      </Container>
    </header>
  )
}
