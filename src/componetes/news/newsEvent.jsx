import React from 'react';
import './news.css'
import News from '../news/news';


const NewsEvent = (props) => {

    const data = props.NewsEventData.articles;
    return (data?
        <div>
            <h3>Latest Space News</h3><br/><br/>
            <div class='newsBanner'>
                {data.map((item) =>
                    <News newsData={item} />
                )}
            </div>

        </div>:null

    )
}

export default NewsEvent;