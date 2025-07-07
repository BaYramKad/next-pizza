import React from 'react'
import { Button } from '@/components/ui'
import { Title } from '@/components/shared'
import { cn } from './cn'
import { Plus } from 'lucide-react'
import { ProductCardT } from '@/types/product-types'
import Image from 'next/image'

export const ProductCard: React.FC<ProductCardT> = ({
  id,
  name,
  price,
  count,
  imageUrl,
  className
}) => {
  console.log(id)
  return (
    <div className={cn(className)}>
      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        {/* <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" /> */}
        <Image src={imageUrl} alt="logo" width={215} height={215} />
      </div>
      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400">
        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>

        {count ? (
          <span>{count}</span>
        ) : (
          <Button variant="secondary">
            <Plus className="mr-1" size={16} />
            Добавить
          </Button>
        )}
      </div>
    </div>
  )
}
