import React from "react"

const NewsColumnThree: React.FunctionComponent<{newsData: any}> = ({newsData}) => {



   


  

  // newsData.then(e => console.log(e))
  return (
    <div className="flex flex-col max-w-xs items-center w-96 ">
            {/* First Image Story */}
          <div className="w-11/12 mt-2.5 relative flex-col flex hover:cursor-pointer">
            {newsData[3].multimedia[0].url !== null &&
              <img 
                alt=''
                onClick={() => window.open(newsData[3].url, "_blank")}
                className="relative mb-1 w-full"
                src={newsData[3].multimedia[0].url}
                 />
              }
          </div>


          <h2
           onClick={() => window.open(newsData[3].url, "_blank")}
           className="text-left text-lg border-b font-bold mb-1 w-11/12 hover:cursor-pointer hover:text-blue-500">
                {newsData[3].title}</h2>
         
         
         <ul className='mb-3 w-11/12'>
              { newsData.slice(10,20).map((ele:any) => 
      <li 
      key={ele.url}
        onClick={() => window.open(ele.url, "_blank")}
        className="w-full pb-1 my-1 border-b  hover:cursor-pointer hover:text-blue-500"
        >{ele.title}</li>
    )}
         </ul>
       
  
    </div>

  )
}

export default NewsColumnThree