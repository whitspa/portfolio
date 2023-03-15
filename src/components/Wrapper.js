import React, { useState } from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

import Footer from "./Footer";

function Wrapper () { 
    const [currentPage,setcurrentPage] = useState("aboutme")
    const renderPages = () => {
        switch(currentPage){
            case "aboutme":
                return <Aboutme />
            case "home":
                return <Home />
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


export default Wrapper;