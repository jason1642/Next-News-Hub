import React, { Component } from "react"
// import "./NewsColumnTwo.css"
import axios from "axios"
import Image from 'next/image'

const NewsColumnTwo: React.FunctionComponent<{newsData: any}> = ({newsData})=> {



//     const fetchData = async ()=> {
//              const API_KEY_TWO = "cce7827002dc4aacac0aa05b70ad0f33"
//     const responseTwo = await axios(`https://newsapi.org/v2/top-headlines?q=world&apiKey=${API_KEY_TWO}`)
//      setList( responseTwo.data.articles.map((ele:any) => <li key={ele.uri} className="col-two-li" onClick={() => window.open(ele.url, "_blank")}>{ele.title}</li>)
//     )
//        console.log(responseTwo)
// }

    React.useEffect(()=>{

    
         
   
    },[])



  



    return (
      <div className="flex flex-col max-w-xs items-center">


        {/* Image Container */}
        <div
            onClick={() => window.open(newsData[0].url, "_blank")}
            className="mt-2.5 relative h-full flex items-center w-11/12 flex-col border hover:cursor-pointer"
                >
                <img
                alt=''
                className="relative w-full"
                src={newsData[1].multimedia[0].url} />
                {/* Absolute position Image label */}
                <div className="absolute bottom-0 bg-blue-950 text-white p-2.5 inline-block self-start justify-self-start font-bold">Just In</div>
            </div>

            
            <h2 onClick={() => window.open(newsData[0].url, "_blank")} className="align-center text-center text-lg my-2.5 pb-2.5 border-b font-bold">{newsData[1].title}</h2>
            {/* <br /> */}

                {/* Links List */}
                <ul className="mb-5  w-11/12 ">
                {
                newsData.slice(5, 8).map((ele:any) =>     
                    <li key={ele.uri} className="pb-2.5 border-b" onClick={() => window.open(ele.url, "_blank")}>{ele.title}</li>)}
                </ul>


                {/* Image Container */}
            <div className="mt-2.5 flex relative h-full items-center w-11/12 flex-col border hover:cursor-pointer">
                {newsData[2].multimedia[0].url !== null ?
                    <img 
                        alt='' 
                        onClick={() => window.open(newsData[2].url, "_blank")} 
                        className="relative w-full"
                         src={newsData[2].multimedia[0].url}
                        />
                        : <></>}
                
            </div>
                <h2 onClick={() => window.open(newsData[2].url, "_blank")} className="align-center text-center text-lg my-2.5 pb-2.5 border-b font-bold">{newsData[2].title}</h2>

        {/* Links List */}
        <ul className="mb-5  w-11/12 ">
                {
                newsData.slice(8, 11).map((ele:any) =>     
                    <li key={ele.uri} className="pb-2.5 border-b" onClick={() => window.open(ele.url, "_blank")}>{ele.title}</li>)}
                </ul>





            </div>
    )
  
}

export default NewsColumnTwo