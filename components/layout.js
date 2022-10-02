import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <Navbar />
      </div>

      <main className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100">
        <div>{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
