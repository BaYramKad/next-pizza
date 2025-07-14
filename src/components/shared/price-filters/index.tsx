'use client'
import { Input, RangeSlider } from '@/components/ui'
import { useState } from 'react'

type Prices = {
  priceFrom: number
  priceTo: number
}

const initialPrices = {
  priceFrom: 0,
  priceTo: 800
}

const minPrice = 0
const maxPrice = 800

export const PriceFilters = () => {
  const [prices, setPrices] = useState<Prices>(initialPrices)

  const updatePrice = (type: keyof Prices, price: string) => {
    setPrices({ ...prices, [type]: price })
  }

  return (
    <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
      <p className="font-bold mb-3">Цена от и до:</p>
      <div className="flex gap-3 mb-5">
        <Input
          type="number"
          placeholder="0"
          min={minPrice}
          max={maxPrice}
          defaultValue={prices.priceFrom}
          onChange={e => updatePrice('priceFrom', e.target.value)}
        />
        <Input
          type="number"
          placeholder="800"
          min={minPrice}
          max={maxPrice}
          defaultValue={prices.priceTo}
          onChange={e => updatePrice('priceTo', e.target.value)}
        />
      </div>
      <RangeSlider
        min={minPrice}
        max={maxPrice}
        step={10}
        value={[prices.priceFrom, prices.priceTo]}
        onValueChange={([prevFrom, prevTo]) => {
          setPrices({
            priceFrom: prevFrom,
            priceTo: prevTo
          })
        }}
      />
    </div>
  )
}
