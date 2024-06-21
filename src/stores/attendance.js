import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'
import { format } from 'date-fns'

export const useAttendanceStore = defineStore({
  id: 'attendance',
  state: () => ({
    attendances: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchAttendances(params) {
      try {
        this.loading = true

        const response = await axiosInstance.get('/attendance', { params })

        response.data.data.forEach(attendance => {
          attendance.program.time = format(new Date(attendance.program.time), 'dd MMMM yyyy HH:mm')
        })

        this.attendances = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
   
    async createAttendance(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/attendance', payload)

        this.success = response.data.message

        router.push({ name: 'attendance-history' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
