import React, { useState } from 'react';
import Home from "./Home";
import Aboutme from "./Aboutme";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from ".Resume";
import Header from "./Header";
import Footer from "./Footer";

function Wrapper () { 
    const [currentPage,setcurrentPage] = useState("home")
    const renderPages = () => {
        switch(currentPage){
            case "home":
                return <Home />
            case "aboutme":
                return <Aboutme />
            case "portfolio":
                return <Portfolio />
            case "contact":
                return <Contact />
            case "resume":
                return <Resume />     
            default:
                return <Home />
        }
    }
    const getCurrentComponent = (page)=>{
        setcurrentPage(page)
    }
    return(<main>
        <Header getCurrentComponent={getCurrentComponent} />
        {renderPages()}
        <Footer />
        </main>)
}
