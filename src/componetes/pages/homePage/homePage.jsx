import '../homePage/homePage.css'
import React from 'react';
import NavBar from '../../navBar/navBar';
import HomeTitle from '../../homeTitle/homeTitle';
import SildeShow from '../../sildeShow/sildeShow';
import Footer from '../../footer/footer';
import HomePage from '../../../assert/data/Data.ts';
import NewsEvent from '../../news/newsEvent';
import { Api } from '../../dataService.ts'; 
import { newsMockData } from '../../../assert/data/newsMock.ts';

export class HomePages extends React.Component  {
    constructor(){
        super();
        this.data=[]
    }
   async componentWillMount(){
    //   this.data= await Api.request('','GET','');
    this.data.newData= newsMockData;
    console.log(this.data)

    }
render(){
    return (
            <div class="mainScreen">
                <NavBar />
                <HomeTitle HomeTitleData={HomePage.HomeTitle}/>
                <NewsEvent NewsEventData={this.data.newData}/>
                <SildeShow sildes={HomePage.SildesData}/>
                <Footer/>
            </div>
    )
}

}
