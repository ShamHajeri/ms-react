import '../homePage/homePage.css'
import React from 'react';
import NavBar from '../../navBar/navBar';
import HomeTitle from '../../homeTitle/homeTitle';
import SildeShow from '../../sildeShow/sildeShow';
import Footer from '../../footer/footer';
import HomePage from '../../../assert/data/Data.ts';
import News from '../../news/news.jsx';

export class HomePages extends React.Component  {
render(){
    return (
            <div class="mainScreen">
                <NavBar />
                <HomeTitle HomeTitleData={HomePage.HomeTitle}/>
                <SildeShow sildes={HomePage.SildesData}/>
                <News/>
                <Footer/>
            </div>
    )
}

}
