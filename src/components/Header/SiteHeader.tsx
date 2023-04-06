'use client'
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './SiteHeader.css'
import TextField from '@mui/material/TextField';

interface ISiteHeaderProps {
}


const SiteHeader: React.FunctionComponent<ISiteHeaderProps> = (props) => {
  return (
    <header className='flex flex-row'>
 <Link
  className='flex ml-5 h-full items-center justify-center'
   href="/">
      <Image
        
        alt='logo'
        width={75}
        height={75}
        // className="header-img"
        src="https://cdn3.iconfinder.com/data/icons/abstract-tree-wood-forest-ecology-landscape-eco-gr/1470/green_eco_leaves_circle_logo_eco_recycle-512.png" />
      <div className='font-bold text-3xl'>Next News Hub</div>
      </Link>

      <div className='flex mx-auto gap-1 absolute justify-center align-middle'>
              <TextField
                // id="outlined-basic" 
                label="Search" 
                variant="outlined"
                 />

      {/* <input className="search-box" type="text" placeholder="Search" /> */}
      {/* <Button className="search-button">I&apos;m feeling lucky!</Button> */}
      <button 
        className='
          border border-blue-500 rounded-md
          px-4 text-lg bg-blue-500
         '
      >Search</button>
    
      </div>

    <div
     className='h-0 grow bg-green'
    />
        
    </header>
  );
};

export default SiteHeader;
