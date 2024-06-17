import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'
import { format } from 'date-fns'

export const useMemberProgressStore = defineStore({
  id: 'member-progress',
  state: () => ({
    memberProgress: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchMemberProgress(params) {
      try {
        this.loading = true

        const response = await axiosInstance.get('/member-progress', { params })

        response.data.data.forEach(memberProgress => {
          memberProgress.date = format(new Date(memberProgress.date), 'dd MMMM yyyy')
        })

        this.memberProgress = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    
    async createMemberProgress(payload) {
      try {
        this.loading = true

        const response = await axiosInstance.post('/member-progress', payload)

        this.success = response.data.message

        router.push({ name: 'member-progress' })
      } catch (error) {
        this.error = handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})