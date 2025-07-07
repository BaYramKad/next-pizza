'use client'

import React from 'react'
import { ProductCard, Title } from '@/components/shared'
import { useCategory } from '@/store/categoty-zus'
import { ProductsGroupListT } from '@/types/product-types'
import { useIntersection } from '@/hooks/useIntersection'

export const ProductsGroupList: React.FC<ProductsGroupListT> = ({
  title,
  items,
  productId,
  className
}) => {
  const setActiveId = useCategory(state => state.setActiveId)
  const groupRef = useIntersection(() => setActiveId(String(productId)))

  return (
    <div className={className} ref={groupRef} id={`${productId}`}>
      <Title text={title} size="lg" className="font-bold mb-4" />

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[50px] mb-20">
        {items.map(item => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={390}
          />
        ))}
      </div>
    </div>
  )
}
