import React from 'react'
import { Button } from '@/components/ui'
import { Title } from '@/components/shared'
import { cn } from './cn'
import { Plus } from 'lucide-react'
import { ProductCardT } from '@/types/product-types'
import Image from 'next/image'

export const ProductCard: React.FC<ProductCardT> = ({
  name,
  price,
  count,
  imageUrl,
  className
}) => {
  return (
    <div
      className={cn(
        'grid border-2 border-primary/10 transition-all hover:border-primary p-5 rounded-2xl cursor-pointer',
        className
      )}
    >
      <Image
        src={imageUrl}
        alt="logo"
        width={215}
        height={215}
        className="m-auto bg-primary-500/20 p-5 rounded-2xl"
      />
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
