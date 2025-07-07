import { create } from 'zustand'

type CategoryStore = {
  activeId: string
  setActiveId: (id: string) => void
}

export const useCategory = create<CategoryStore>(set => ({
  activeId: '1',
  setActiveId: (id: string) => set({ activeId: id })
}))
