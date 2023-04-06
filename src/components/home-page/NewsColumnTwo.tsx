import React, { Component } from "react"
import "./NewsColumnTwo.css"
import axios from "axios"



const NewsColumnTwo: React.FunctionComponent<{newsData: any}> = ({newsData})=> {

    const [list, setList ] = React.useState<any>()


    const fetchData = async ()=> {
             const API_KEY_TWO = "cce7827002dc4aacac0aa05b70ad0f33"
    const responseTwo = await axios(`https://newsapi.org/v2/top-headlines?q=world&apiKey=${API_KEY_TWO}`)
     setList( responseTwo.data.articles.map((ele:any) => <li key={ele.uri} className="col-two-li" onClick={() => window.open(ele.url, "_blank")}>{ele.title}</li>)
    )
       console.log(responseTwo)
}

    React.useEffect(()=>{

    
        // fetchData()
   
   
    },[])



  

   
  

  const renderFunc = () => {

    console.log(this.state.list)
    return (<>
      <div onClick={() => window.open(props.newsArr[0].url, "_blank")} className="col-two-img-div">
        <img alt='' className="column-two-img" src={this.props.newsArr[1].multimedia[0].url} />
        <div className="on-img-label">Just In</div>
      </div>
      <h2 onClick={() => window.open(props.newsArr[0].url, "_blank")} className="col-two-main-title">{props.newsArr[1].title}</h2>
      <br />
      <div className="col-two-ul">
        <ul>
          {state.list.slice(0, 3)}
        </ul></div>
      <div className="col-two-story-two">
        {props.newsArr[2].multimedia[0].url !== null ? <img alt='' onClick={() => window.open(props.newsArr[2].url, "_blank")} className="col-two-img-two" src={props.newsArr[2].multimedia[0].url} /> : <></>}
        <h2 onClick={() => window.open(props.newsArr[2].url, "_blank")} className="col-two-main-title">{props.newsArr[2].title}</h2>
        <div className="col-two-ul2">
          <ul>
            {this.state.list.slice(3, 8)}
          </ul></div>
      </div>
    </>
    )
  }

    return (
      <div className="news-column-two">
        {this.props.newsArr[1] ? renderFunc() : <> </>}
      </div>
    )
  
}

export default NewsColumnTwo