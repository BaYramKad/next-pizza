'use client'
import { useRouter } from 'next/navigation'
import QueryString from 'qs'

export const useRoutingFilter = () => {
  const router = useRouter()

  const pushPath = (str: Record<string, string>) => {
    const query = QueryString.stringify(str, {
      arrayFormat: 'comma'
    })
    console.log(query)
    router.push(`?${query}`)
  }

  return { pushPath }
}
