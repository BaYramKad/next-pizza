'use server'

import { prisma } from '../../../../prisma/prisma-client'
import { ProductCardT } from '@/types/product-types'

export const getAllProducts = async (): Promise<ProductCardT[]> => {
  const products = await prisma.product.findMany()

  return products
}

export const getAllIngredients = async () => {
  const ingredients = await prisma.ingredient.findMany()

  return ingredients
}
