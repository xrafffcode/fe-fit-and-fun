import { axiosInstance } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useCoachStore = defineStore({
    id: 'coach',
    state: () => ({
        coaches: [],
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        async fetchCoaches() {
            try {
                this.loading = true

                const response = await axiosInstance.get('/coaches')

                this.coaches = response.data.data
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
    },
})
