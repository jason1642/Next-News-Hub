'use client'
import {useEffect, useState} from 'react'
import { Inter } from 'next/font/google'
import NewsColumnOne from '@/components/home-page/NewsColumnOne'
import NewsColumnTwo from '@/components/home-page/NewsColumnTwo'
import NewsColumnThree from '@/components/home-page/NewsColumnThree'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const getNewsData = async()=> {
  // await axios.get('/api/users').then(res=>console.log(res.data))
  const response = await axios(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`)
setNewsData(response.data.results)
  console.log(response)
  return response
}
const [newsData, setNewsData] = useState<Array<any>>()


  useEffect(()=>{  
    // getData()
    console.log(process.env.NEXT_PUBLIC_NYTIMES_API_KEY)
    getNewsData()
  },[])
  
  return (
    <main className='flex py-4 px-12 mx-auto max-w-7xl content-middle text-black'>
      {newsData && <>
      <NewsColumnOne newsData={newsData}/>
      <NewsColumnTwo newsData={newsData}/>
      <NewsColumnThree newsData={newsData}/>
      </>
    }
    </main>
  )
}
 