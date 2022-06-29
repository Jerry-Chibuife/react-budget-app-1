import './MyApp.css'
import Authentication from "./Authentication";
import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Budget from "./Budget";


const FakeApp = () => {
    const [signIn, setSignIn] = useState(false)

    return(
        <div className="app-container">
            {/*signIn ?*/}
            {/*<Budget signIn={signIn} setSignIn={setSignIn}/>*/}
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Authentication signIn={signIn} setSignIn={setSignIn}/>
                    </Route>
                    <Route path="/dashboard/:identity" >
                        <Budget signIn={signIn} setSignIn={setSignIn}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default FakeApp;