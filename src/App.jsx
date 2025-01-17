import { useState } from "react";
import Auth from "./Auth";

const App = () =>{

  const [show,setShow] = useState(true);

  return (
    <div  className="flex items-center justify-center bg-gray-200">
    <div>
      <div className=" flex w-[280px] h-60 bg-green-200 h-[80px] p-3 mt-3 justify-evenly ">
        <button className="items-center bg-blue-400 p-3 rounded-lg" onClick={()=>setShow(true)} >Login</button>
        <button className="items-center bg-blue-400 p-3 rounded-lg" onClick={()=>setShow(false)}>SignUp</button>
      </div>
      {
        show?<div className="m-3">
        <form className="flex flex-col gap-2">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Password" />
          <button className="items-center bg-blue-400 p-3 rounded-lg mt-3">Login</button>
          <a href="#" className="flex justify-end">Forget Password ?</a>
          <p>Not a member      <button className="bg-blue-300 rounded-lg p-2" onClick={()=>setShow(false)}>Singup</button></p>
        </form>
        </div>:<div className="flex flex-col gap-5">
        <form className="flex flex-col  gap-5"> 
          <input type="email" placeholder="enter email"/>
          <input type="password" placeholder="enter password"/>
          <input type="password" placeholder="Conf Password"/>
          <button className="bg-blue-400 rounded-lg py-2 px-5">Sing up</button>
        </form>

        </div>
      }
    </div>  
    </div>
  )

}

export default App;