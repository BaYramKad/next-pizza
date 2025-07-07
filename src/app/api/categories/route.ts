import { NextRequest } from 'next/server'
import { prisma } from '../../../../prisma/prisma-client'

export const POST = async (request: NextRequest) => {
  const data = await request.json()

  const result = await prisma.user.create({ data })

  return Response.json({ result })
}

export const GET = async () => {
  const data = await prisma.category.findMany()

  return Response.json({ data })
}
