import React, { ReactElement } from 'react'

interface Props<E extends ReactElement = ReactElement> {
  className?: string
  children?: React.ReactElement
  as?: E
}

type MyButton = Props & { as?: HTMLButtonElement }

export const MyButton = ({ className, children }: MyButton) => {
  return <button className={className}>{children}</button>
}

export const MyButton2: React.FC = () => {
  return <MyButton></MyButton>
}
