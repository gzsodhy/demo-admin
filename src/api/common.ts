import request from '@/utils/request'
import { Itoken } from './types/token'

export const getLoginInfo = () => {
  return request<Itoken>({
    method: 'POST',
    url: '/api/UserCenter/GetToken'
  })
}
