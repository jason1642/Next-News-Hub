import Image from "next/image";

const NewsColumnOne: React.FunctionComponent<{newsData: any}> = ({newsData}) => {
   


    return (
        <div className="flex flex-column flex-col align-middle max-w-screen-sm">







    
        {/* Main News(Single) Container */}
        <div
         onClick={()=>window.open(newsData[0].url, '_blank')}
         className="
         w-full flex-col flex  align-middle
          border-b border-slate-400 border-solid p-2
          "
         >

 
            {/* Title */}
            <h1 className="text-center text-4xl hover:cursor-pointer hover:text-blue-500">{newsData[0].title}</h1>

            <Image 
            className="h-auto w-11/12"
            src={newsData[0].multimedia[0].url}
             alt='something' 
             width={newsData[0].multimedia[0].width}
             height={newsData[0].multimedia[0].height}
             />

            {/* Description for main story */}
      <p className="text-2xl text-left px-5 hover:cursor-pointer font-medium  hover:text-blue-500">{newsData[0].abstract}</p>
        </div>



        {/* col-one-link-section  */}
        <div className="flex flex-col align-middle w-11/12">
            {newsData.map((ele:any) => {
                    if(ele.subsection !== ''){    
                    let tempSubSec = ele.subsection.split("");
                    tempSubSec[0] = tempSubSec[0].toUpperCase();
                    tempSubSec.join("")      
                    return (
                      <p 
                      key={ele.uri} 
                      onClick={()=>window.open(ele.url, '_blank')}
                       className="
                        border-b border-slate-300 border-solid
                        hover:cursor-pointer hover:text-blue-500
                        text-left text-base pt-2 pb-2
                        "><b>{tempSubSec}: </b>{ele.title}</p>)
                    }
                }).slice(0, 5)}
        
        </div>
      


            </div>
        )
    }   
export default NewsColumnOne