import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../redux/auth/action';

const Login = () => {
  const dispatch = useDispatch();
  const {isAuth,token} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  console.log(location.state.from.pathname);
  const[loginCred,setLoginCred] = useState({
    email:"eve.holt@reqres.in",
    password:  "cityslicka"
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setLoginCred({
      ...loginCred,
      [name]: value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(login(loginCred))
  }
  useEffect(()=>{
      if(isAuth){
        navigate(comingFrom, {replace: true})
      }
  },[navigate,isAuth])
  console.log(isAuth);
  console.log(token)
  return (
    <div>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="email" name="email" value={loginCred.email} onChange={handleChange} />
            <input type="password" name='password' value={loginCred.password} onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login