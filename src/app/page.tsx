'use client'
import {useEffect, useState} from 'react'
import NewsColumnOne from '@/components/home-page/news-columns/NewsColumnOne'
import NewsColumnTwo from '@/components/home-page/news-columns/NewsColumnTwo'
import NewsColumnThree from '@/components/home-page/news-columns/NewsColumnThree'
import axios from 'axios'
// const inter = Inter({ subsets: ['latin'] })
import WeatherDashboard from '../components/weather-section/Container'

export default function Home() {

// const getNewsData = async()=> {
//   // await axios.get('/api/users').then(res=>console.log(res.data))
//   const response = await axios(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NEXT_PUBLIC_NYTIMES_API_KEY}`)
// setNewsData(response.data.results)
//   // console.log(response)
//   return response
// }




const [newsData, setNewsData] = useState<Array<any>>()

  useEffect(()=>{  
    // getData()
      
    // getNewsData()
  },[])
  
  return (
    <main className='flex mt-5 flex-col mx-auto content-middle text-black'>
      {newsData && 
        <section className='flex max-w-7xl mx-auto content-middle text-black'>
          <NewsColumnOne newsData={newsData}/>
          <NewsColumnTwo newsData={newsData}/>
          <NewsColumnThree newsData={newsData}/>
        </section>
      }
  <section className='flex max-w-7xl mx-auto content-middle text-black '>
    {/* Weather line graph */}
    {/* Table of hourly weather information, sectioned by days */}
    <WeatherDashboard /> 
  </section>

    
    </main>
  )
}
 