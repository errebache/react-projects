import { useContext } from "react";
import ThemeContext from "../context/ThemeContext"

export function Button({text,className,...props}) {
 const theme = useContext(ThemeContext);
  return (
    <button 
    {...props}
    className={`btn btn-${theme} ${className ? className : ''}`}
    >{text}</button>
  )
}

export function ButtonSecondary({text,className,...props}) {
    const theme = useContext(ThemeContext);
     return (
       <button 
       {...props}
       className={`btn btn-reverse-${theme} ${className ? className : ''}`}
       >{text}</button>
     )
   }