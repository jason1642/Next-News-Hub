'use client'
import * as React from 'react';
import Link from 'next/link';
import './SiteHeader.css'
import TextField from '@mui/material/TextField';

interface ISiteHeaderProps {
}


const SiteHeader: React.FunctionComponent<ISiteHeaderProps> = (props) => {
  return (
    <header className='flex h-10 relative flex-row w-full py-7 justify-around items-center bg-black'>
 <Link
  className='flex ml-5 h-full items-center justify-center'
   href="/">
      <img
        
        alt='logo'
        className="h-5/6"
        src="https://cdn3.iconfinder.com/data/icons/abstract-tree-wood-forest-ecology-landscape-eco-gr/1470/green_eco_leaves_circle_logo_eco_recycle-512.png" />
      <div className='text-2xl'>Next News Hub</div>
      </Link>

      <div className='flex mx-auto gap-1 absolute justify-center items-center'>
              <TextField
                className='bg-white p-0'
                // id="outlined-basic" 
                sx={{padding: 0, borderRadius: '7px'}}
                margin='none'
                label="Search" 
                size='small'
                variant="outlined"
                 />
      <button 
        className='
        rounded-sm
          px-3 py-0 text-lg  bg-blue-500
         '
      >Search</button>
    
      </div>

    <div className='h-0 grow'/>
        
    </header>
  );
};

export default SiteHeader;
