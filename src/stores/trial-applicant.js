import { axiosInstance } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { handleError } from '@/helpers/errorHelper'

export const useTrialApplicantStore = defineStore({
    id: 'trial-applicant',
    state: () => ({
        loading: false,
        error: null,
        success: null,
    }),
    actions: {
        async createTrialApplicant(payload) {
            try {
                this.loading = true

                const response = await axiosInstance.post('/register/trial', payload)

                console.log(response)

                this.success = response.data.message
            } catch (error) {
                this.error = handleError(error)
            } finally {
                this.loading = false
            }
        },
    }
})