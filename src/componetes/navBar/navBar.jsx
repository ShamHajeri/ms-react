import './navBar.css'
import HomePage from '../../assert/data/Data.ts';
import { useNavigate } from 'react-router-dom';
import Search from '../search/search.jsx';
import { useState } from 'react';

const NavBar = () => {

    const [searchShow, SetSearchShow] = useState('none');
    const navElementMap = HomePage.NavBar.nav;
    const navigate = useNavigate();
    const navList = navElementMap.map((item) =>
        <a class="navElement" onClick={() => navigate(`${item.url}`)}>{item.Name}</a>
    );
    const SearchShowBtn = () => {
        SetSearchShow("unset");
    }

    const SearchHideBtn = (data) => {
        if(data){
            SetSearchShow("none");
        }
    }

    return (
        <div class="mainBar">
            <div class="navBar">
                <div>
                    <div class="navLogo" onClick={() => {
                        window.location.href = '/home'
                    }} />
                </div>
                <div class='navElements'>
                    {navList}
                </div>
                <div class='searchBar'>
                    <div onClick={() => { SearchShowBtn() }} class='searchClass1'>
                        Search
                    </div>
                </div>
            </div>
            <div class='sBox' style={{display:`${searchShow}`}}> <Search closeBtn={SearchHideBtn}/></div>
        </div>
    )
}
export default NavBar;