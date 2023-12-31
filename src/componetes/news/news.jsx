import React from 'react';
import './news.css';
import { useDispatch } from 'react-redux';
import { updateArticle } from '../redux/articleSlice';
import { useNavigate } from 'react-router-dom';



const News = (props) => {
    const data = props.newsData
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <div class='newsWidgets' onClick={() => { dispatch(updateArticle(data)); window.location.href='/dis'; }}>
            <div class='newsElement' style={{ backgroundImage: `url("${data.urlToImage}")` }}>
                <span class='newsTitle'>{data.title}</span>
            </div>
        </div>
    )
}

export default News;