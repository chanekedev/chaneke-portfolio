import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--color-bg)',
    }}>
      <Navbar />
    <main style={{
  flex: 1,
  width: "100%",
}}>
  <Outlet />
</main>
      <Footer />
    </div>
  )
}