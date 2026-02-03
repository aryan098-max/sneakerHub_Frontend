import { useState } from "react";

const LoginWithPasswordPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>

      <div className="my-6">
        <p className='text-xs py-1 font-bold'>Email*</p>
        <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='Email' 
          className='w-full border border-black p-3' type='text'
        />
      </div>

      <div>
        <p className='text-xs py-1 font-bold'>Password*</p>
        <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='Password' 
          className='w-full border border-black p-3' type='text'
        />
      </div>


    </div>
  )
}

export default LoginWithPasswordPage