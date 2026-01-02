import { isManager } from "@/lib/middleware"
import { use } from "react"


const Manage = async () => {
  const auth = await isManager()

  if (!auth.success) return <p>Please Log in</p>
  const user = auth.payload
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <p>Welcome, <span className="text-2xl font-semibold text-center">{user.name}</span></p>
      <p>Have a great day!</p>
      
    </div>
  )
}

export default Manage
