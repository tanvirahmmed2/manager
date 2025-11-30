import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login",
  description: "Log in to your accoun to access more data",
};


const RootLayout = async({children}) => {

  const token =  (await cookies()).get('user_token')?.value
  
      if(token){
          redirect('/profile')
      }
  
  return (
    <>
    {children}
    </>
  )
}

export default RootLayout
