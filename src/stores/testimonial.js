import { axiosInstance } from '@/plugins/axios'
import { defineStore } from 'pinia'

export const useTestimonialStore = defineStore({
  id: 'testimonial',
  state: () => ({
    testimonials: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchTestimonials() {
        try {
          this.loading = true
  
          const response = await axiosInstance.get('/testimonials')
  
          this.testimonials = response.data.data
        } catch (error) {
          this.handleError(error)
        } finally {
          this.loading = false
        }
      },
      async fetchTestimonial(id) {
        try {
          this.loading = true
  
          const response = await axiosInstance.get(`/testimonial/${id}`)
  
          return response.data.data
        } catch (error) {
          this.handleError(error)
        } finally {
          this.loading = false
        }
      },
  },
})
