import request from '@/utils/request'
class UserApi {
  static login () {
    return request('/api/login')
  }

  static getUserInfo () {
    return request.post('/api/getUserInfo')
  }
}

export default UserApi
