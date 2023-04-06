'use client'
import {useEffect, useState} from 'react'
import NewsColumnOne from '@/components/home-page/NewsColumnOne'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// import handler, { GET } from './api/hello/route'
import axios from 'axios'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const getData = async()=> {
  await axios.get('/api/users').then(res=>console.log(res.data))
}
  useEffect(()=>{ 
    getData()
  },[])
  return (
    <main className={styles.main}>
      <NewsColumnOne />
    </main>
  )
}
 