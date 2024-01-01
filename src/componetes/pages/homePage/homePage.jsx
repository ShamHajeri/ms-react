import '../homePage/homePage.css';
import React from 'react';
import NavBar from '../../navBar/navBar';
import HomeTitle from '../../homeTitle/homeTitle';
import SildeShow from '../../sildeShow/sildeShow';
import Footer from '../../footer/footer';
import HomePage from '../../../assert/data/Data.ts';
import NewsEvent from '../../news/newsEvent';
import { Api } from '../../dataService.ts';
import { newsMockData } from '../../../assert/data/newsMock.ts';

export class HomePages extends React.Component {
  constructor() {
    super();
    this.state = {
      newsData: '',
    };
  }

  async updateData() {
    try {
     const data = await Api.request('', 'GET', '');
     // const data = ''
      this.setState({ newsData: data?data:newsMockData });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async componentDidMount(){
    this.updateData()
  }


  render() {
    return (
      <div className="mainScreen">
        <NavBar />
        <HomeTitle HomeTitleData={HomePage.HomeTitle} />
        <NewsEvent NewsEventData={this.state.newsData} />
        <SildeShow sildes={HomePage.SildesData} />
        <Footer />
      </div>
    );
  }
}
