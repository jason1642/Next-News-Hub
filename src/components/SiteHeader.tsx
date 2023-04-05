'use client'
import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
interface ISiteHeaderProps {
}

const Container = styled.header`
  
`;

const SiteHeader: React.FunctionComponent<ISiteHeaderProps> = (props) => {
  return (
    <Container>

      <Image
      alt='logo'
      width={90}
      height={90}
      className="header-img"
       src="https://cdn3.iconfinder.com/data/icons/abstract-tree-wood-forest-ecology-landscape-eco-gr/1470/green_eco_leaves_circle_logo_eco_recycle-512.png" />
      <h1 className="header-title">Header</h1>
      <input className="search-box" type="text" placeholder="Search" />
      <button className="search-button">I&apos;m feeling lucky!</button>
      <button className="search-button">Search</button>
      {/* <Link className="home-link" to="/">Home</Link> */}

        
    </Container>
  );
};

export default SiteHeader;
