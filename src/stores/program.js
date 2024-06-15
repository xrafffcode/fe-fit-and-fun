import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'
import { format } from 'date-fns'

export const useProgramStore = defineStore({
  id: 'program',
  state: () => ({
    programs: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchPrograms() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/program')

        response.data.data.forEach(program => {
          program.time = format(new Date(program.time), 'dd MMMM yyyy HH:mm')
        })

        this.programs = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
