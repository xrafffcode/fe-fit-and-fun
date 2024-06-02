import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useGoalStore = defineStore({
  id: 'goal',
  state: () => ({
    goals: [],
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchGoals() {
      try {
        this.loading = true

        const response = await axiosInstance.get('/goals')

        this.goals = response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
    async fetchGoal(id) {
      try {
        this.loading = true

        const response = await axiosInstance.get(`/goal/${id}`)

        return response.data.data
      } catch (error) {
        this.handleError(error)
      } finally {
        this.loading = false
      }
    },
  },
})
