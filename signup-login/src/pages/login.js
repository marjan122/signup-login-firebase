import { useState } from "react"
import loginUserval from '../config/firebase/firebaselogin';
import { TextField,Button } from '@mui/material';


function Login(){
const [userObj, setUserObj]=useState({});



const loginUser = () =>{
    if(!userObj.email){
        alert("Email Is Required")
        return ;
       }
       if(!userObj.password || userObj.password.lenght < 6){
           alert("Password Is Required OR It Must Be Greater Than 6")
         return ;
         }
         loginUserval(userObj).then((res)=>{
           console.log('Login')
         }).catch((err)=>{
           console.log(err);
         });
}
    return(
    <>
    <div className="signupstyle">
<div>
<h1>Login</h1>

<br />
<br />
<br />
<br />
<br />
<TextField onChange={(e)=>setUserObj({...userObj, email: e.target.value})} id="outlined-basic" type="email" label="Email" variant="outlined" required />      
<br />
<br />     
<TextField onChange={(e)=>setUserObj({...userObj, password: e.target.value})} id="outlined-basic" type="password" label="Password" variant="outlined" required />      
<br />
<br />
<Button onClick={loginUser} color="secondary">Login</Button>
    </div>
    </div>    
    </>
)
}

export default Login