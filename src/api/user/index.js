import Get from '../Get'
import Post from '../Post'

const login = (data) => Post('auth', data)
const register = (data) => Post('users', data)

const User = {
  login,
  register
}

export default User