import { create } from 'zustand'

export const useDarkStore = create((set) => ({
  darkMode: true,
  toggleColorMode: () => set((state) => ({ darkMode: !state.darkMode }))
}))
