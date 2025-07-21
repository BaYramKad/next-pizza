import { create } from 'zustand'

type CategoryStore = {
  activeId: string
  setActiveId: (id: string) => void
}

type pathStore = {
  paths: {
    type: string
    names: Set<string>
  }
  setName: (type: string, name: Set<string>) => void
}

export const useCategory = create<CategoryStore>(set => ({
  activeId: '1',
  setActiveId: (id: string) => set({ activeId: id })
}))

export const usePath = create<pathStore>(set => ({
  paths: {
    type: '',
    names: new Set()
  },
  setName: (type: string, name: Set<string>) => set({ paths: { names: name, type } })
}))
