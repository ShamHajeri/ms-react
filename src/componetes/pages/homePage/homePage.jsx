import '../homePage/homePage.css'
import React from 'react';
import NavBar from '../../navBar/navBar';
import HomeTitle from '../../homeTitle/homeTitle';
import SildeShow from '../../sildeShow/sildeShow';
import Footer from '../../footer/footer';
import HomePage from '../../../assert/data/Data.ts';
import NewsEvent from '../../news/newsEvent';
import { Api } from '../../dataService.ts'; 

export class HomePages extends React.Component  {
    constructor(){
        super();
        this.data=[]
    }
   async componentDidMount(){
      this.data= await Api.request('','GET','');
    }
render(){
    return (
            <div class="mainScreen">
                <NavBar />
                <HomeTitle HomeTitleData={HomePage.HomeTitle}/>
                <NewsEvent/>
                <SildeShow sildes={HomePage.SildesData}/>
                <Footer/>
            </div>
    )
}

}
