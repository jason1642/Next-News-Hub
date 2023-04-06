import Image from "next/image";

const NewsColumnOne: React.FunctionComponent<{newsData: any}> = ({newsData}) => {
   
    
   
         
     
    




    return (
        <div className="news-column-one">







      <div><div onClick={()=>window.open(newsData[0].url, '_blank')}className="main-story-div">
            <h1 className="col-one-title">{newsData[0].title}</h1>
            <Image className="column-one-img"src={newsData[0].multimedia[0].url} alt='something'/>
<p className="col-one-main-desc">{newsData[0].abstract}</p>
        </div>
        <div className="col-one-link-section">
            {newsData.map((ele:any) => {
                    if(ele.subsection !== ''){    
                    let tempSubSec = ele.subsection.split("");
                    tempSubSec[0] = tempSubSec[0].toUpperCase();
                    tempSubSec.join("")      
                    return (<p key={ele.uri} onClick={()=>window.open(ele.url, '_blank')} className="col-one-title-link"><b>{tempSubSec}: </b>{ele.title}</p>)
                    }
                }).slice(0, 5)}
        
        </div></div>


            </div>
        )
    }   
export default NewsColumnOne