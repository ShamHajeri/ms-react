import React from 'react';
import './news.css';


const News = (props) => {
    const data = props.newsData
    console.log(data)
    return (
        <div class='newsWidgets' >
                <div class='newsElement' style={{backgroundImage:`url("${data.urlToImage}")`}}>
                   <span class='newsTitle'>{data.description}</span> 
                </div>
        </div>
    )
}

export default News;