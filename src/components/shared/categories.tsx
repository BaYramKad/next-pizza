'use client'

import { cn } from './cn'
import { useCategory } from '@/store/categoty-zus'
import Link from 'next/link'
import React from 'react'

interface CategoriesI {
  id: string
  name: string
}
interface Props {
  className?: string
  categories: CategoriesI[]
}

// const cats = [
//   { name: 'Пиццы', id: 1 },
//   { name: 'Комбо', id: 2 },
//   { name: 'Закуски', id: 3 },
//   { name: 'Коктейли', id: 4 },
//   { name: 'Кофе', id: 5 },
//   { name: 'Напитки', id: 6 },
//   { name: 'Десерты', id: 7 }
// ]

export const Categories: React.FC<Props> = ({ className, categories }) => {
  const activeCategory = useCategory(state => state.activeId)

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map(item => (
        <Link
          key={item.id}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeCategory === item.id && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${item.id}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
