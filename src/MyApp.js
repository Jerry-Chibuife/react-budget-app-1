import React from 'react';
import MyButton from "./components/travellious/MyButton";
import ProfileCard from "./components/travellious/ProfileCard";
import './MyApp.css'

const MyApp = () => {
    return (
       <div className="myapp-container">
           <ProfileCard username="Arishem" hobby="Creating eternals"/>
           <ProfileCard username="Ego" hobby="Seeding planets"/>
       </div>
    );
};

export default MyApp;
