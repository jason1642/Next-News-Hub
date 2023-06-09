import React from "react"


const NewsColumnTwo: React.FunctionComponent<{newsData: any}> = ({newsData})=> {

    return (
      <div className="flex flex-col max-w-xs items-center w-96">


        {/* First Story Image Container */}
        <div
            onClick={() => window.open(newsData[0].url, "_blank")}
            className="mt-2.5 relative flex items-center w-11/12 flex-col hover:cursor-pointer"
                >
                <img
                alt=''
                className="relative w-full"
                src={newsData[1].multimedia[0].url} />
                {/* Absolute position Image label */}
                <div className="absolute bottom-0 bg-blue-950 text-white p-2.5 inline-block self-start justify-self-start font-bold">Just In</div>
            </div>

            {/* First Story Title */}
            <h2 
                onClick={() => window.open(newsData[0].url, "_blank")} 
                className=" leading-tight align-center w-11/12 text-left text-lg my-2.5 pb-2.5 border-b font-bold hover:cursor-pointer hover:text-blue-500"
                >{newsData[1].title}</h2>
          

                {/* Links List */}
                <ul className="mb-5  w-11/12 ">
                {
                newsData.slice(7, 9).map((ele:any) =>     
                    <li key={ele.uri} className="pb-2.5 border-b hover:cursor-pointer" onClick={() => window.open(ele.url, "_blank")}>{ele.title}</li>)}
                </ul>


                {/* Second Story Image Container */}
            <div className="mt-2 flex relative items-center w-11/12 flex-col hover:cursor-pointer">
                {newsData[2].multimedia[0].url !== null ?
                    <img 
                        alt='' 
                        onClick={() => window.open(newsData[2].url, "_blank")} 
                        className="relative w-full"
                         src={newsData[2].multimedia[0].url}
                        />
                        : <></>}
                
            </div>
                <h2 onClick={() => window.open(newsData[2].url, "_blank")} className="align-center text-left w-11/12 text-lg my-2 pb-2.5 border-b font-bold hover:cursor-pointer hover:text-blue-500">{newsData[2].title}</h2>

        {/* Links List */}
        <ul className="mb-5  w-11/12 ">
                {
                newsData.slice(11, 12).map((ele:any) =>     
                    <li key={ele.uri} className="pb-2.5 border-b hover:cursor-pointer hover:text-blue-500" onClick={() => window.open(ele.url, "_blank")}>{ele.title}</li>)}
                </ul>





            </div>
    )
  
}

export default NewsColumnTwo