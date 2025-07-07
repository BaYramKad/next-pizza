import React from 'react'
import { SortPopup } from './sort-popup'
import { Categories } from './categories'
import { Container } from './container'
import { cn } from './cn'
import { prisma } from '../../../prisma/prisma-client'

interface Props {
  className?: string
}

interface CategoriesI {
  id: string
  name: string
}

const getCategories = async (): Promise<CategoriesI[]> => {
  return await prisma.category.findMany()
}

export const TopBar: React.FC<Props> = async ({ className }) => {
  const categories = await getCategories()
  console.log('categories: ', categories)
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex items-center justify-between">
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>
  )
}
