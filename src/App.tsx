import './App.css'
import { ClerkProvider } from '@clerk/clerk-react'

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
console.log(clerkPubKey)

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
    <div>

      <h1>Personal Finance Dashboard</h1>

    </div>
</ClerkProvider>
  )
}

export default App
