'use client'
import './Registration.css' // Import the external CSS file
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
}

import { useEffect, useState } from 'react'
import {
  authSlice,
  useSelector,
  useDispatch,
  selectAuth,
  ReduxState,
} from '@/lib/redux'

interface User {
  name: string
  email: string
  password: string
  confirm_password: string
}
export const Register = () => {
  const [view, setView] = useState(false)
  const [confirmPassword, setComfirmPassword] = useState(false)

  const dispatch = useDispatch()
  const authDetails = useSelector(selectAuth)
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  })

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

  // function LoginPage() {
  //   return <Link href="/login">Dashboard</Link>
  // }
  const router = useRouter()

  //  const navigate = useNavigate()
  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (user.email === '' && user.password === '') {
      alert('All feilds Are requared')
    } else if (user.password !== user.confirm_password) {
      alert('Passwords do not match')
    } else {
      dispatch(authSlice.actions.register(user))
      alert('Register Sucessfully')
      router.push('/login')
      setUser({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      })
    }
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(e) => {
          registerHandler(e)
        }}
        className="form"
      >
        <h1 className="header1">Register Page</h1>

        <div className="input-container">
          <input
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            // onBlur={handleBlur}
            className="input-field"
          />
        </div>

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
              // onBlur={handleBlur}
              className="password-field"
            />
          </div>
          <div className="visibility-icon" onClick={() => setView(!view)}>
            {!view ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>

        <div className="password-container">
          <div className="relative">
            <input
              type={confirmPassword ? 'text' : 'password'}
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={user.confirm_password}
              onChange={handleChange}
              // onBlur={handleBlur}
              className="password-field"
            />
          </div>
          <div
            className="visibility-icon"
            onClick={() => setComfirmPassword(!confirmPassword)}
          >
            {!confirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </div>

        <div className="mb-28">
          <button className="submit-button" type="submit">
            Save
          </button>
        </div>
        <p style={{ display: 'flex', justifyContent: 'center', color: 'blue' }}>
          <Link href="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

{
  /* <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOddAsync(incrementAmount))}
        >
          Add If Odd
        </button>
      </div> */
}
// </div>
// )
// }
