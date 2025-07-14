'use client'

import { cn } from './cn'
import { useCategory } from '@/store/categoty-zus'
import React, { useRef, useState } from 'react'
import { Button } from '../ui'
import { RenderLink } from './render-category'
import { useClickAway } from 'react-use'
import { Category } from '@prisma/client'

interface Props {
  className?: string
  categories: Category[]
}

interface ShowMoreCategory {
  isMore: boolean
  moreCategories?: Category[]
}

const maxViewCatigories = 5

export const Categories: React.FC<Props> = ({ className, categories }) => {
  const [showMoreCategories, setMoreCategories] = useState<ShowMoreCategory>({
    isMore: false,
    moreCategories: []
  })

  const ref = useRef(null)

  useClickAway(ref, () =>
    setMoreCategories({
      isMore: false
    })
  )
  const activeCategory = useCategory(state => state.activeId)
  const isMoreThanMaxView = categories.length > maxViewCatigories

  return (
    <div className={cn('flex flex-wrap gap-1 bg-gray-100 p-1 rounded-2xl items-center', className)}>
      {categories.slice(0, maxViewCatigories).map(item => (
        <RenderLink key={item.id} {...item} activeCategory={activeCategory} />
      ))}

      {isMoreThanMaxView && (
        <>
          <Button
            onClick={() =>
              setMoreCategories({
                moreCategories: categories.slice(maxViewCatigories),
                isMore: !showMoreCategories.isMore
              })
            }
          >
            <span>Больше</span>

            {showMoreCategories.isMore && (
              <ul
                ref={ref}
                className="absolute top-[80%] flex flex-col text-black gap-1 items-center justify-center bg-gray-100 p-1 rounded-2xl"
              >
                {showMoreCategories.moreCategories?.map(item => {
                  return <RenderLink key={item.id} {...item} activeCategory={activeCategory} />
                })}
              </ul>
            )}
          </Button>
        </>
      )}
    </div>
  )
}
