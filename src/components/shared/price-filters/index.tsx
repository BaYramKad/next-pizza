'use client'
import { Input, RangeSlider } from '@/components/ui'
import { Prices } from '../filters'

const minPrice = 0
const maxPrice = 800

type PriceFilterProps = {
  prices: Prices
  handleSelectPrices: (type: keyof Prices, price: string) => void
  updateRangePrices: (prevFrom: number, prevTo: number) => void
}

export const PriceFilters = ({
  prices,
  handleSelectPrices,
  updateRangePrices
}: PriceFilterProps) => {
  return (
    <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
      <p className="font-bold mb-3">Цена от и до:</p>
      <div className="flex gap-3 mb-5">
        <Input
          type="number"
          placeholder="0"
          min={minPrice}
          max={maxPrice}
          value={String(prices.priceFrom)}
          onChange={e => handleSelectPrices('priceFrom', e.target.value)}
        />
        <Input
          type="number"
          placeholder="800"
          min={minPrice}
          max={maxPrice}
          value={String(prices.priceTo)}
          onChange={e => handleSelectPrices('priceTo', e.target.value)}
        />
      </div>
      <RangeSlider
        min={minPrice}
        max={maxPrice}
        step={10}
        value={[prices.priceFrom, prices.priceTo]}
        onValueChange={([from, to]) => {
          updateRangePrices(from, to)
        }}
      />
    </div>
  )
}
