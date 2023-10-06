import { useUser } from '@clerk/clerk-react'
import './App.css'
import Expenses from './components/expense_dashboard/Expenses'

function App () {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <main>
      <h1>Personal Finance Dashboard</h1>
      <p>Hello {user.fullName}</p>
      <Expenses />
    </main>
  )
}

export default App
