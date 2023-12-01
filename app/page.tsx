/* Components */
import Dashboard from './components/Dashboard/Dashboard'
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
