import './contactUs.css';
import NavBar from '../../navBar/navBar';
import Footer from '../../footer/footer';
import logo from '../../../assert/logo.png'

const ContactUs = () => {
    return (
        <>
            <NavBar></NavBar>
            <div class='containContainer'>
                <div class="projectDetails">
                    <img class='projectLogo' src={logo} alt="" />
                    <p>
                        this Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias explicabo saepe temporibus veniam illum provident magnam deleniti fuga dolorum! Fugit eius enim culpa necessitatibus.
                    </p>
                </div>
                <div class="personDeatails">
                    <div class='contactForm'>
    
                        <form >
                        <p>Contact Form</p>
                            <input type="text"  placeholder='Name'/>
                            <input type="number"  placeholder='Phone Number'/>
                            <input type="email"  placeholder='Email'/>
                            <input type='Description'placeholder='Description'/>
                            <input class='submitBtn' type='submit'/>

                        </form>
                    </div>
                    <div class='personInfo'>
                    <img class='projectLogo' src={logo} alt="" />
                    <p>
                        this Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias explicabo saepe temporibus veniam illum provident magnam deleniti fuga dolorum! Fugit eius enim culpa necessitatibus.
                    </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>)
}
export default ContactUs;