import { SquareBottomDashedScissors } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <SquareBottomDashedScissors color="rgb(255, 105, 0)" size={35} />
      <div>
        <h1 className="font-black text-2xl uppercase text-[#ff6900]">Barber</h1>
        <p className="text-sm text-gray-400 leading-3">лучше не куда</p>
      </div>
    </div>
  )
}

export default Logo
