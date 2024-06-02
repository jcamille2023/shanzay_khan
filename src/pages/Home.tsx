import React from 'react';
import Header from 'template-stuff/header/header.jsx';
const Home: React.FC = () => {
    /* interface Link {
        name: string;
        url: string;
        key: number;
    } */
    return (
        <>
            <Header links={ [
        { name: "Home", url: "/", key: 0 },
        { name: "About", url: "/about", key: 1 },
        { name: "Contact", url: "/contact", key: 2 }
    ]}></Header>
        </>
    );
}

export default Home;