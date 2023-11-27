import { Link, routes } from "@redwoodjs/router"

import { useAuth } from 'src/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header className="py-2 mx-24">

        {isAuthenticated ?
          (<div className="flex flex-row justify-between">
            <h1 className="my-auto font-semibold"><Link to={routes.admin()}>Title</Link></h1>
            <nav>
              <span>Logged in as: {currentUser.email}</span>{" "}
              <button type="button" onClick={logOut}>Logout</button>
            </nav>
          </div>)
          :
          (<div className="flex flex-row justify-between">
            <h1 className="my-auto font-semibold"><Link to={routes.home()}>Title</Link></h1>
            <nav className="flex gap-8 font-semibold">
              <Link to={routes.home()} className="py-1 px-2 rounded-xl hover:text-blue-600">Home</Link>
              <Link to={routes.signup()} className="py-1 px-2 rounded-xl hover:text-blue-600">Register</Link>
              <Link to={routes.login()} className="bg-black text-white py-1 px-2 rounded-xl hover:bg-gray-800">Login</Link>
            </nav>
          </div>)
        }
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default MainLayout
