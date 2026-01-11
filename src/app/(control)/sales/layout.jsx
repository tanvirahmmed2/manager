
import SalesNavbar from "@/components/ui/SalesNavbar"
import SalesSidebar from "@/components/ui/SalesSidebar"
import { isSales } from "@/lib/middleware"
import { redirect } from "next/navigation"

export const metadata = {
  title: 'Sales',
  description: 'Sales site'
}


const PosLayout = async ({ children }) => {
  const auth = await isSales()
  if (!auth.success) {
    return redirect('/login')
  }
  return (
    <div className='w-full flex flex-col'>
      <SalesNavbar />
        <div className=" flex flex-row w-full  justify-between">
          <SalesSidebar />
          {children}
        </div>

    </div>
  )
}

export default PosLayout
