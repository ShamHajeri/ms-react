import './navBar.css'
import HomePage from '../../assert/data/Data.ts';


const NavBar = () => {

    const navElementMap = HomePage.NavBar.nav
    const navList = navElementMap.map((item) =>
        <a class="navElement" href={item.url}>{item.Name}</a>
    )
    return (
        <div class="navBar">
            <div>
                <div class="navLogo"  onClick={()=>{
                        window.location.href='/home'
                    }}/>
  
            </div>
            <div class='navElements'>
                {navList}
            </div>
        </div>
    )
}
export default NavBar;