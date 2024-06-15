import { axiosInstance } from '@/plugins/axios'
import { defineStore } from 'pinia'

export const useWebConfigurationStore = defineStore({
  id: 'web-configuration',
  state: () => ({
    webConfiguration: null,
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchWebConfiguration() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/web-information')

        this.webConfiguration = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
