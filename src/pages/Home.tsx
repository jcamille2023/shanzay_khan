import React from 'react';
import BannerImg from "../1.png"
import Header from 'template-stuff/header/header.jsx';
const Banner: React.FC = () => {
    return (
        <div>
            <img src={BannerImg} alt="Banner" width="100%" height="100%"/>
        </div>
    );

}
const Home: React.FC = () => {
    return (
        <>
            <Header links={ 
                [
                    { name: "Home", url: "/", key: 0 },
                    { name: "About", url: "/about", key: 1 },
                    { name: "Contact", url: "/contact", key: 2 }
                ]
            } />
            <Banner />
        </>
    );
}


export default Home;