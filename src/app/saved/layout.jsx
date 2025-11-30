import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Saved",
  description: "Here is your saved data box",
};


const CartLayout = async({children}) => {

  const token =  (await cookies()).get('user_token')?.value
  
      if(!token){
          redirect('/login')
      }
  
  return (
    <>
    {children}
    </>
  )
}

export default CartLayout
