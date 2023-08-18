import React from "react";
import Body from "../../body/Body";
import Footer from "../../footer/Footer";
import Analysis from "../../components/graph/Analysis";
import Basis from "../../components/graph/Basis";
import Cost from "../../components/graph/Cost";

const Home = () => {
    return (
        <div >
            <div style={{padding: '20px',margin:'20px', display:'flex',flexDirection:'column',border: '1px', borderColor:'gray', borderStyle: 'solid',borderRadius:'8px', width:'97%'}}>
                <Analysis />
            </div>
            <div style={{padding: '20px',margin:'20px', display:'flex',flexDirection:'column',border: '1px', borderColor:'gray', borderStyle: 'solid',borderRadius:'8px', width:'97%'}}>
                <Basis />
            </div>
            <div style={{padding: '20px',margin:'20px', display:'flex',flexDirection:'column',border: '1px', borderColor:'gray', borderStyle: 'solid',borderRadius:'8px', width:'97%'}}>
                <Cost />
            </div>
            <Body />
            <Footer/>
        </div>
    )
}

export default Home;