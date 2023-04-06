'use client'
import {useEffect, useState} from 'react'
import NewsColumnOne from '@/components/home-page/NewsColumnOne'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
// import handler, { GET } from './api/hello/route'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(()=>{ 
    fetch('/api/hello').then(res => console.log());
  },[])
  return (
    <main className={styles.main}>
      <NewsColumnOne />
    </main>
  )
}
