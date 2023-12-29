import React from 'react';
import './news.css'
import News from '../news/news';


const NewsEvent = (props) => {

    const data = props.NewsEventData.articles;
    return (
        <div>
            <h3>Latest Space News</h3>
            <div class='newsBanner'>
                {data.map((item) =>
                    <News newsData={item} />
                )}
            </div>

        </div>

    )
}

export default NewsEvent;