import '../homePage/homePage.css'
import NavBar from '../../navBar/navBar';
import HomeTitle from '../../homeTitle/homeTitle';
import SildeShow from '../../sildeShow/sildeShow';
import Footer from '../../footer/footer';
import HomePage from '../../../assert/data/Data.ts';
const HomePages = () => {

    return (
        <>
            <div class="mainScreen">
                <NavBar />
                <HomeTitle HomeTitleData={HomePage.HomeTitle}/>
                <SildeShow/>
                <Footer/>
            </div>
        </>
    )
}
export default HomePages;