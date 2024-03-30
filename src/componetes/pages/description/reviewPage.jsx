import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../navBar/navBar';
import './description.css';
import Footer from '../../footer/footer';

const ReviewPage = () => {

    const reivewData = useSelector((state) => state.store.reviewReducer.review);
    const PointDiv = reivewData.points.map((item) => <p class="pointDiv"><h4>{item.pointName}</h4><br></br><span>{item.pointContent}</span></p>)
    console.log(reivewData.points)

    return (reivewData ?
        <div class='description'>
            <NavBar />
            <div class='mainDescription' style={{ height: `60rem` }}>
                <div class='mainElement'>
                    <div class='imageAndOther'
                        style={{ backgroundImage: `url("${reivewData.url}")` }}
                    >
                    </div>
                    <div class='authorOther'>
                        <span class='titleReport'>
                            {reivewData.name}
                        </span>
                        <span class='sourceReport'>
                            {reivewData.content}
                        </span>
                    </div>
                </div>
                <div class='moreDetail'>
                    <span>{reivewData.description}</span>
                    <br></br>
                    {PointDiv}
                </div>
            </div>
            <Footer />
        </div> : ""

    )
}


export default ReviewPage
