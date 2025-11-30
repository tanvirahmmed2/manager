import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const metadata={
    title:'Profile',
    description: "profile page"
}


const ProfileLayout = async({children}) => {

    const token =  (await cookies()).get('user_token')?.value

    if(!token){
        redirect('/login')
    }

  return (
    <>{children}</>
  )
}

export default  ProfileLayout
