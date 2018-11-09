import { get } from '@/config/axios'

export const testapi = () => get('topics', null, res => {
  console.log(res)
  return res
})
