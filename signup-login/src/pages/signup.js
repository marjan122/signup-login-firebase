import { TextField,Button } from '@mui/material';
import { useState } from 'react';
import SignValUser from '../config/firebase/firebasemethods';
function SignUpUser() {
const [userObj, setUserObj] = useState({});

let userAuthVal =()=>{

  if(!userObj.email){
   alert("Email Is Required")
   return ;
  }
  if(!userObj.password || userObj.password.lenght < 6){
      alert("Password Is Required OR It Must Be Greater Than 6")
    return ;
    }
    
  console.log(userObj)
  SignValUser(userObj).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
};


  return (
    <div className="signupstyle">
<div>
<br />
<br />
<br />
<br />
<br />
<br />
<TextField onChange={(e)=>setUserObj({...userObj, name: e.target.value})} id="outlined-basic" type="name" label="Name" variant="outlined" required />      
<br />
<br />
<TextField onChange={(e)=>setUserObj({...userObj, email: e.target.value})} id="outlined-basic" type="email" label="Email" variant="outlined" required />      
<br />
<br />     
<TextField onChange={(e)=>setUserObj({...userObj, password: e.target.value})} id="outlined-basic" type="password" label="Password" variant="outlined" required />      
<br />
<br />
<Button onClick={userAuthVal} color="secondary">Sign Up</Button>
    </div>
    </div>
  );
}

export default SignUpUser;
