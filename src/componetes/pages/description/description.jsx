import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../navBar/navBar';
import './description.css';
import Footer from '../../footer/footer';

const Description = () => {

    const data = useSelector((state) => state.article.articles);

    return (data?
        <div class='description'>
            <NavBar />
            <div class='mainDescription'>
                <div class='mainElement'>
                    <div class='imageAndOther'
                        style={{ backgroundImage: `url("${data.urlToImage}")` }}
                    >
                    </div>
                    <div class='authorOther'>
                        <span class='titleReport'> {data.title}</span>
                        <span class='sourceReport'>{data.author} &sdot; {data.source.name} &sdot; {data.publishedAt}</span>
                    </div>
                </div>
                <div class='moreDetail'>
                <span class='titleReport'> {data.description}</span><br/><br/>
                <span>{data.content}</span>
                </div>
                <button onClick={()=>{window.location.href=`${data.url}`}} class="goToSiteBtn">
                    Go to site 
                </button>
            </div>
            <Footer/>
        </div>:""


    )
}

export default Description
