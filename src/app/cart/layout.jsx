import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Cart",
  description: "Here is your cart box",
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
