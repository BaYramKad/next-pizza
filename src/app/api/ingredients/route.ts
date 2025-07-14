import { NextRequest } from 'next/server'
import { prisma } from '../../../../prisma/prisma-client'

export const POST = async (request: NextRequest) => {
  const data = await request.json()
  const result = await prisma.ingredient.createMany({
    data
  })

  return Response.json({ result })
}
