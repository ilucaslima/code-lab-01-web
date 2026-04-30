import { create } from 'zustand'
import { getUserMock } from '../utils/mocks/get-user-mock'

interface User {
   id: string
   name: string
   avatarUrl: string
   channelUrl: string

}

interface UserStore {
   user: User | null
   token: string | null
   isLoading: boolean
   getToken: () => string | null
   loadUser: () => void
   clearUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
   user: null,
   isLoading: false,
   token: null,
   getToken: () => {
      return "mock-token"
   },
   loadUser: () => {
      set({ isLoading: true })
      setTimeout(() => {
         const userData = getUserMock()
         set({ user: userData, isLoading: false })
      }, 500)
   },

   clearUser: () => {
      set({ user: null, token: null })
   },
}))
