import React, {useState} from 'react';

const Login = (props) => {

    let {signIn, setSignIn, setAlert} = props
    const [input, setInput] = useState({username: "", password: ""})


    function handleInputUsername(e) {
        setInput({...input, [e.target.name]: e.target.value})
    }

    function handleInputPassword(e) {
        setInput({...input, [e.target.name]: e.target.value})
    }

    function SignIn() {

        let users = JSON.parse(localStorage.getItem("users"))
        setAlert({iShow: true, status: "success", message: "login successful"})
        setTimeout(()=> setAlert({iShow: false, status: "", message: ""}), 5000)

        users.map((user=>{
            if(user.username === input.username){
                if(user.password === input.password){
                    setSignIn(true)
                }
            }
            else {
                    console.log("Username or Password Incorrect")
                    setAlert({iShow: true, status: "error", message: "Username or Password Incorrect"})
                    return
            }
            return
        }))

    }

    return (
        <>
                <div style={{display: "flex", flexDirection: "column"}}>
                        <label style={{fontSize: "13px", fontWeight: "bold", color: "#2d0160", marginTop: "10px"}}>Username</label>
                        <input name="username" style={{height: "30px", marginTop: "0.3rem", fontSize: "14px"}} onChange={handleInputUsername} />
                        <label style={{fontSize: "13px", fontWeight: "bold", color: "#2d0160", marginTop: "10px"}}>Password</label>
                        <input name="password" type="password" style={{height: "30px", marginTop: "0.3rem", fontSize: "14px"}} onChange={handleInputPassword} />
                        <button  style={{marginTop: "3rem", backgroundColor: "#2d0160", color: "white", height: "50px", border: "unset", borderRadius: "2px"}} onClick={()=> SignIn()}>Sign In</button>
                </div>
        </>
    );
};

export default Login;
