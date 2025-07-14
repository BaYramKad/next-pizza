export type ProductCardT = {
  id: string
  name: string
  price?: number
  count?: number
  imageUrl: string
  className?: string
}

export type ProductsGroupListT = {
  title: string
  items: ProductCardT[]
  productId: number
  className?: string
}
