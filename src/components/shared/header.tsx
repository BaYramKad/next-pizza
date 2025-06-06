import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import { Button, Input } from '../ui';
import { ArrowRight, ShoppingCart, SquareBottomDashedScissors, User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('', className)}>
      <Container className='flex items-center justify-between py-4 gap-x-6 border-b-1'>
        <div className='flex items-center justify-between gap-4'>
          <SquareBottomDashedScissors color='rgb(255, 105, 0)' size={35} />
          <div>
            <h1 className='font-black text-2xl uppercase text-[#ff6900]'>Barber</h1>
            <p className='text-sm text-gray-400 leading-3'>лучше не куда</p>
          </div>
        </div>

        <div className='w-[400px]'>
          <Input />
        </div>
        <div className='flex gap-x-2'>
          <Button variant='outline' className='flex gap-2 items-center'>
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className='group relative'>
              <b className='text-white'>520 ₽</b>
              <span className='h-full w-[1px] bg-white/30 mx-3' />
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart color='#fff' size={16} className=' relative' strokeWidth={2} />
                <b className='text-white'>44</b>
              </div>
              <ArrowRight color='#fff' size={20} className=' absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
