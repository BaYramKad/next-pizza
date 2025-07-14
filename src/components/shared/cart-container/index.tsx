import { Button } from '@/components/ui'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

export const HeaderCart = () => {
  return (
    <div className="flex gap-x-2">
      <Button variant="outline" className="flex gap-2 items-center">
        <User size={16} />
        Войти
      </Button>

      <div>
        <Button className="group relative">
          <b className="text-white">520 ₽</b>
          <span className="h-full w-[1px] bg-white/30 mx-3" />
          <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
            <ShoppingCart color="#fff" size={16} className=" relative" strokeWidth={2} />
            <b className="text-white">44</b>
          </div>
          <ArrowRight
            color="#fff"
            size={20}
            className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
          />
        </Button>
      </div>
    </div>
  )
}
