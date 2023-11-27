type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return <>
  <div className="flex flex-row">
  <div className="max-w-[200px] h-screen bg-gray-300">
    <h2>Admin Menu</h2>
    <p>Users</p>
    <p>Courses</p>
    <p>Posts</p>
    <p>Misc</p>
  </div>
  <main>
  {children}
  </main>
  </div>

  </>
}

export default AdminLayout
