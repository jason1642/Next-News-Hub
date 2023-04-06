import Image from "next/image";

const NewsColumnOne: React.FunctionComponent<{newsData: any}> = ({newsData}) => {
   
    
   
         
     
    




    return (
        <div className="flex p-0 flex-column align-middle">







    
        
        <div
         onClick={()=>window.open(newsData[0].url, '_blank')}
         className="main-story-div w-6/12 flex flex-col align-middle border-b border-black border-solid"
         >

 

            <h1 className="text-center text-4xl hover:cursor-pointer hover:text-blue-500">{newsData[0].title}</h1>

            <Image 
            style={{height: 'auto !important', width: '90% !important'}}
            className="h-auto w-11/12"src={newsData[0].multimedia[0].url}
             alt='something' 
             
             width={newsData[0].multimedia[0].width}
             height={newsData[0].multimedia[0].height}
             />
<p className="col-one-main-desc px-5 hover:cursor-pointer hover:text-blue-500">{newsData[0].abstract}</p>
        </div>
        <div className="col-one-link-section">
            {newsData.map((ele:any) => {
                    if(ele.subsection !== ''){    
                    let tempSubSec = ele.subsection.split("");
                    tempSubSec[0] = tempSubSec[0].toUpperCase();
                    tempSubSec.join("")      
                    return (<p key={ele.uri} onClick={()=>window.open(ele.url, '_blank')} className="col-one-title-link hover:cursor-pointer hover:text-blue-500"><b>{tempSubSec}: </b>{ele.title}</p>)
                    }
                }).slice(0, 5)}
        
        </div>
      


            </div>
        )
    }   
export default NewsColumnOne