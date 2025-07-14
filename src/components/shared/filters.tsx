import { FilterCheckbox, Title, CheckboxFiltersGroup } from '@/components/shared'

import { cn } from './cn'
import { getAllIngredients } from './services/alt-product'
import { PriceFilters } from './price-filters'
interface Props {
  className?: string
}

export const Filters: React.FC<Props> = async ({ className }) => {
  const ingredients = await getAllIngredients()
  console.log('ingredients: ', ingredients)
  return (
    <div className={cn('sticky top-[7rem] h-auto', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <PriceFilters />

      <CheckboxFiltersGroup
        className="mt-5"
        title="Ингредиенты"
        limit={6}
        defaultItems={[]}
        items={ingredients}
      />
    </div>
  )
}
