import http from '@/shared/plugins/axios'
import { DSignin, DSignup } from '@/shared/types/index'

export const signin = (payload: DSignin) => {
  http.post('auth/signin', payload)
}

export const signup = (payload: DSignup) => {
  http.post('auth/signup', payload)
}
