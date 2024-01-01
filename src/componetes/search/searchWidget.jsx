import React from 'react';
import { useDispatch } from 'react-redux';
import { updateArticle } from '../redux/articleSlice';

const SearchWidget = (props) => {
    const data = props.data.articles;
    const dispatch=useDispatch();
    console.log(data)

    return (
        <>
            {Array.isArray(data) && data.map((item, index) => (
                <div key={index} className='searchContent'>
                    <span onClick={()=>{dispatch(updateArticle(item)); window.location.href='/dis';}}>{item.title}</span>
                </div>
            ))}
        </>
    );
}

export default SearchWidget;
