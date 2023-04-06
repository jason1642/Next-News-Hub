import React from "react"

const NewsColumnThree: React.FunctionComponent<{newsData: any}> = ({newsData}) => {



   


  

  // newsData.then(e => console.log(e))
  return (
    <div className="w-11/12 max-w-xs flex flex-col items-center ">
            {/* First Image Story */}
          <div className="w-full mt-2.5  hover:cursor-pointer">
            {newsData[3].multimedia[0].url !== null &&
              <img 
                alt=''
                onClick={() => window.open(newsData[3].url, "_blank")}
                className="w-full mb-1"
                src={newsData[3].multimedia[0].url}
                 />
              }
          </div>


          <h2 onClick={() => window.open(newsData[3].url, "_blank")} className="text-left text-lg border-b font-bold">{newsData[3].title}</h2>
         
         
         
         { newsData.slice(10,24).map((ele:any) => 
      <div 
        onClick={() => window.open(ele.url, "_blank")}
        className="w-full pb-1 my-1 border-b  hover:cursor-pointer hover:text-blue-500"
        >{ele.title}</div>
    )}
  
    </div>

  )
}

export default NewsColumnThree