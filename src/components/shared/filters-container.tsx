import React from 'react'
import { getAllIngredients } from './services/alt-product'
import { Filters } from './filters'

interface Props {
  className?: string
}

export const FiltersContainer: React.FC<Props> = async ({ className }) => {
  const ingredients = await getAllIngredients()
  return <Filters ingredients={ingredients} className={className} />
}
