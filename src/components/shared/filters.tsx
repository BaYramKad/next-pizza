'use client'

import { Title, CheckboxFiltersGroup } from '@/components/shared'

import { cn } from './cn'
import { PriceFilters } from './price-filters'
import { Ing } from './checkbox-filters-group'
import { useDebounce, useSet } from 'react-use'
import { useState } from 'react'
interface Props {
  className?: string
  ingredients: Ing[]
}

export type Prices = {
  priceFrom: number
  priceTo: number
}

const initialPrices = {
  priceFrom: 0,
  priceTo: 800
}

export const Filters: React.FC<Props> = ({ className, ingredients }) => {
  const [prices, setPrices] = useState<Prices>(initialPrices)
  const [sizes, { toggle: setSizes }] = useSet<string>(new Set([]))
  const [selectedIngredients, { toggle: setIngredients }] = useSet<string>(new Set([]))

  const updatePrice = (type: keyof Prices, price: string) => {
    setPrices({ ...prices, [type]: price })
  }

  useDebounce(
    () => {
      const parameters = {
        ...prices,
        sizes: [...sizes],
        ingredients: [...selectedIngredients]
      }

      console.log(parameters)
    },
    400,
    [prices, sizes, selectedIngredients]
  )

  return (
    <div className={cn('h-auto', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          className="mt-5"
          title="Размеры"
          items={[
            { id: '1', name: '30 см' },
            { id: '2', name: '25 см' },
            { id: '3', name: '35 см' }
          ]}
          handleSelectField={(size: string) => setSizes(size)}
          selectedFields={sizes}
        />
      </div>

      <PriceFilters
        prices={prices}
        handleSelectPrices={updatePrice}
        updateRangePrices={(prevFrom: number, prevTo: number) =>
          setPrices({
            priceFrom: prevFrom,
            priceTo: prevTo
          })
        }
      />

      <CheckboxFiltersGroup
        className="mt-5"
        title="Ингредиенты"
        limit={4}
        items={ingredients}
        handleSelectField={(ingredient: string) => setIngredients(ingredient)}
        selectedFields={selectedIngredients}
      />
    </div>
  )
}
