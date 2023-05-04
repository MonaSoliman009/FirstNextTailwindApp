import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div>
            <Head>
                <title>About us | Next js</title>
                <meta name="keywords" content="about"/>
            </Head>
            <Image src="/1.webp" width={400} height={400}/>
            About Us
        </div>
    );
}

export default About;
