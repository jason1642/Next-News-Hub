'use client'
import {useEffect, useState} from 'react'
import NewsColumnOne from '@/components/home-page/NewsColumnOne'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// import handler, { GET } from './api/hello/route'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const getNewsData = async()=> {
  // await axios.get('/api/users').then(res=>console.log(res.data))
  const response = await axios(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
setMainNewsApi(response.data)
  console.log(response)
  // return response
}
const [mainNewsApi, setMainNewsApi] = useState()


  useEffect(()=>{ 
    // getData()
    getNewsData()
  },[])
  return (
    <main className={styles.main}>
      <NewsColumnOne />
    </main>
  )
}
 