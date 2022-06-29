import Logo from "./components/travellious/Logo";
import "./App.css"
import PageDescription from "./components/travellious/PageDescription"
import AuthButton from "./components/travellious/AuthButton";
import FloatContainer from "./components/travellious/FloatContainer";
import SpecialFeatureHeader from "./components/travellious/SpecialFeatureHeader";
import SpecialFeatures from "./components/travellious/SpecialFeatures";

function App() {
    const links = [
        {
            buttonName: "Reviews",
        },
        {
            buttonName: "Tips",
        },
        {
            buttonName: "Alerts",
        },
        {
            buttonName: "Blog",
        }
    ]
  return (
    <div className="app-container">
      <div className="header-container">
          <div className="everything-header">
            <div className="header">
                <div style={{cursor: "pointer"}}>
                    <Logo/>
                </div>
                <div style={{fontFamily: "'Poppins', sans-serif", display: "flex", justifyContent: "center", width: "50%", color: "white"}}>
                    {links.map((link)=> <h4>{link.buttonName}</h4>)}
                </div>
                <AuthButton/>
            </div>
              <PageDescription/>
              <FloatContainer/>
          </div>
      </div>
        <SpecialFeatureHeader/>
        <SpecialFeatures/>
    </div>
  );
}

export default App;
