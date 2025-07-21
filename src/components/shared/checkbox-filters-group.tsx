'use client'

import React, { useState } from 'react'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui/input'
import { cn } from './cn'
import Image from 'next/image'

export type Ing = {
  name: string
  id: string
  createdAt?: Date
  updatedAt?: Date
  price?: number
  imageUrl?: string
}

interface Props {
  title: string
  items: Ing[]
  limit?: number
  searchInputPlaceholder?: string
  className?: string
  handleSelectField: (value: string) => void
  selectedFields: Set<string>
  defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  handleSelectField,
  selectedFields
}) => {
  const [showAll, setShowAll] = React.useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleSearchIng = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const list = showAll
    ? items.filter(val => val.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    : items.slice(0, limit)

  return (
    <div className={cn('', className)}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={handleSearchIng}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div
        className={`flex flex-col gap-4 pr-2 overflow-auto scrollbar overscroll-contain ${
          showAll && 'h-[300px]'
        }`}
      >
        {!list.length && <span>Нет такого</span>}
        {list.map(item => (
          <FilterCheckbox
            onCheckedChange={() => handleSelectField(item.name)}
            checked={selectedFields.has(item.name)}
            key={item.id}
            value={item.id}
            text={item.name}
            endAdornment={
              item.imageUrl && <Image src={item.imageUrl} width={15} height={15} alt={item.name} />
            }
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3 cursor-pointer">
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  )
}
