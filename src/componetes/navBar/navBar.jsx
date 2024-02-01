import './navBar.css'
import HomePage from '../../assert/data/Data.ts';
import { useNavigate } from 'react-router-dom';
import Search from '../search/search.jsx';
import { useState, useLayoutEffect } from 'react';

const NavBar = () => {

    const [searchShow, SetSearchShow] = useState('none');
    const [screenWidth, SetScreenWidth] = useState('1000');
    const [toggleMenu, SettoggleMenu] = useState(true);

    const navElementMap = HomePage.NavBar.nav;
    const navigate = useNavigate(false);

    useLayoutEffect(() => {
        // Function to update the window width
        const updateWindowWidth = () => {
            SetScreenWidth(window.innerWidth);
            console.log(window.innerWidth)
        };

        // Attach the event listener
        window.addEventListener('resize', updateWindowWidth);

        // Call the update function once when the component mounts
        updateWindowWidth();

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, [screenWidth]);


    const navList = navElementMap.map((item) =>
        <a class="navElement" onClick={() => navigate(`${item.url}`)}>{item.Name}</a>
    );
    const SearchShowBtn = () => {
        SetSearchShow("unset");
    }

    const SearchHideBtn = (data) => {
        if (data) {
            SetSearchShow("none");
        }
    }

    const menuToggle = () => {
        if (toggleMenu) {
            SettoggleMenu(false)
        }
        else {
            SettoggleMenu(true)
        }
    }

    const mobileView = () => {
        return (<>
            <div class="navBar">
                <details>
                    <summary class={toggleMenu ? '' : 'change'} onClick={menuToggle} >
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </summary>
                    <div class='mobileViewElements'>
                        {navList}
                    </div>

                    <Search closeBtn={SearchHideBtn} />

                </details>
                <div class='mobile-Logo'>
                    <div class="navLogo" onClick={() => {
                        window.location.href = '/home'
                    }} ></div>
                </div>
            </div>

        </>
        )
    }
    const desktopView = () => {
        return (<div className='desktopView'>
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
            <div class='sBox' style={{ display: `${searchShow}` }}> <Search closeBtn={SearchHideBtn} /></div>
        </div>
        )
    }

    return (
        <div class="mainView">

            {screenWidth < 600 ? mobileView() : desktopView()}
        </div>
    )
}
export default NavBar;