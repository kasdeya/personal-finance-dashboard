import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut
} from '@clerk/clerk-react'
import { ThemeProvider } from './components/theme-provider.tsx'

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <App />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  </ThemeProvider>
)
