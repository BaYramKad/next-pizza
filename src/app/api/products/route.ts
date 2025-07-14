import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../prisma/prisma-client'

export const POST = async (request: NextRequest) => {
  const data = await request.json()
  const result = await prisma.product.createMany({
    data
  })

  return Response.json({ result })
}

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || ''

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive'
      }
    },
    take: 5
  })

  return NextResponse.json(products)
}
