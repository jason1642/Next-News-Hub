'use client'
import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import './SiteHeader.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


interface ISiteHeaderProps {
}

const LinkContainer = styled(Link)`
  display: flex;
  height: inherit;
  align-items: center;
  border: 1px solid white;
  /* width: 100%; */
  justify-self: flex-start;
`

const Title = styled.div`
  font-size: 2.1em;
  font-weight: lighter;
`;
const Container = styled.header`
  display: flex;
  /* justify-content: space-around; */
`;

const SearchBox = styled.div`
  display:flex;
  border: 1px solid white;
  justify-content: center;
`;

const FillerDiv = styled.div`
  
`


const SiteHeader: React.FunctionComponent<ISiteHeaderProps> = (props) => {
  return (
    <Container>
 <LinkContainer href="/">
      <Image
        
        alt='logo'
        width={75}
        height={75}
        // className="header-img"
        src="https://cdn3.iconfinder.com/data/icons/abstract-tree-wood-forest-ecology-landscape-eco-gr/1470/green_eco_leaves_circle_logo_eco_recycle-512.png" />
      <div className='font-bold text-3xl'>Next News Hub</div>
      </LinkContainer>

      <SearchBox>
              <TextField id="outlined-basic" label="Search" variant="outlined" />

      {/* <input className="search-box" type="text" placeholder="Search" /> */}
      {/* <Button className="search-button">I&apos;m feeling lucky!</Button> */}
      <Button 
        size='medium'
        variant='contained'
      >Search</Button>
      </SearchBox>

      <FillerDiv />
     

        
    </Container>
  );
};

export default SiteHeader;
