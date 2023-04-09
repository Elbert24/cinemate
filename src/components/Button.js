import { Children } from "react";

export const Button = ({children}) => {
  return (
    <button className='w-64 rounded p-3 text-white text-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...'>{children}</button>
  )
}
