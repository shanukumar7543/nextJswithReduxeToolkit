'use client'
import './Login.css' // Import the external CSS file
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Link from 'next/link'

const initialValues = {
  email: '',
  password: '',
}

import { useEffect, useState } from 'react'
import {
  authSlice,
  useSelector,
  useDispatch,
  selectAuth,
  ReduxState,
} from '@/lib/redux'
import { useRouter } from 'next/navigation'

interface User {
  email: string
  password: string
}
export const Login = () => {
  const [view, setView] = useState(false)
  const [confirmPassword, setComfirmPassword] = useState(false)

  // const dispatch = useDispatch()
  const authDetails = useSelector(selectAuth)
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  })
  // console.log('user', user)

  useEffect(() => {
    console.log('authDetails', authDetails)
  }, [authDetails])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }
  const router = useRouter()

  //  const navigate = useNavigate()
  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (user.email === '' && user.password === '') {
      alert('All feilds Are requared')
    } else if (
      user.email === authDetails.email &&
      user.password === authDetails.password
    ) {
      alert('you are Loggedin ')
      router.push('/dashboard')
      setUser({
        email: '',
        password: '',
      })
    } else {
      // dispatch(authSlice.actions.register(user))
      alert('Wrong Credential')
    }
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          loginHandler(e)
        }}
        className="form"
      >
        <h1 className="header1">Login Page</h1>

        <div className="input-container">
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            // onBlur={handleBlur}
            className="input-field"
          />
        </div>

        <div className="password-container">
          <div className="relative">
            <input
              type={view ? 'text' : 'password'}
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              className="password-field"
            />
          </div>
          <div className="visibility-icon" onClick={() => setView(!view)}>
            {!view ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>

        <div className="mb-28">
          <button className="submit-button" type="submit">
            Save
          </button>
        </div>
        <p style={{ display: 'flex', justifyContent: 'center', color: 'blue' }}>
          <Link href="/">Register</Link>
        </p>
      </form>
    </div>
  )
}
