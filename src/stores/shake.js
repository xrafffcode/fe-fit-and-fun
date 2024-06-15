import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useShakeStore = defineStore({
  id: 'shake',
  state: () => ({
    shakes: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchShakes() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/shake')

        this.shakes = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },

  },
})
