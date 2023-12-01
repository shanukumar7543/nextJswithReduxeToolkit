/* Components */
import Dashboard from './components/Dashboard/Dashboard'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'

export default function IndexPage() {
  return (
    <>
      {/* <Login /> */}

      <Register />
      {/* <Dashboard /> */}
    </>
  )
}

export const metadata = {
  title: 'Redux Toolkit',
}
