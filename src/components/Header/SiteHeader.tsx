'use client'
import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import './SiteHeader.css'
import Button from '@mui/material/Button';

interface ISiteHeaderProps {
}

const Container = styled.header`
  
`;

const SiteHeader: React.FunctionComponent<ISiteHeaderProps> = (props) => {
  return (
    <Container>
 <Link className="home-link" href="/">
      <Image
        
        alt='logo'
        width={90}
        height={90}
        className="header-img"
        src="https://cdn3.iconfinder.com/data/icons/abstract-tree-wood-forest-ecology-landscape-eco-gr/1470/green_eco_leaves_circle_logo_eco_recycle-512.png" />
     
      Home</Link>

      
      <h1 className="header-title">Header</h1>


      <input className="search-box" type="text" placeholder="Search" />
      {/* <Button className="search-button">I&apos;m feeling lucky!</Button> */}
      <Button className="search-button">Search</Button>
     

        
    </Container>
  );
};

export default SiteHeader;
