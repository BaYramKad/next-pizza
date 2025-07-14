import React from 'react'
import { Checkbox } from '../ui/checkbox'

export interface FilterChecboxProps {
  text: string
  value: string
  endAdornment?: React.ReactNode
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked
}) => {
  return (
    <label className="flex justify-between items-center p-1 gap-2 rounded-md leading-none cursor-pointer hover:bg-primary/20">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <span className="mr-auto">{text}</span>
      {endAdornment}
    </label>
  )
}
