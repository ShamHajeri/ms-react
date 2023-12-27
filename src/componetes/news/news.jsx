import React from 'react';
import './news.css';
import aa from '../../assert/logo.png'


const News = (props) => {
    const data = props.newsData
    return (
        <div class='newsWidgets'>
            <div class='newsContainer'>
                <div class='newsimage'>
                 <img src={aa} alt="news"/>
                </div>
                <div class='newsTitle'>
                    {data.heading}
                </div>
            </div>
        </div>
    )
}

export default News;