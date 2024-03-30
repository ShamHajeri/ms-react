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
                        The My-space project represents a comprehensive demonstration of my proficiency in web development technologies, encompassing HTML, CSS, JavaScript, and React.js. This project is meticulously designed to incorporate advanced concepts such as Redux for state management and the implementation of a router for seamless navigation. Through the meticulous integration of these technologies, the My-space project not only showcases my adept understanding of front-end development but also highlights my ability to create dynamic and interactive user interfaces. The incorporation of Redux underscores my commitment to efficient state management, while the inclusion of a router demonstrates my mastery of creating a smooth and intuitive user experience. This project serves as a testament to my skills in leveraging cutting-edge web development tools and frameworks to craft sophisticated and responsive applications
                    </p>
                </div>
                <div class="personDeatails">
                    <div class='personInfo'>
                        <img class='projectPerson' alt="" />
                        <p>
                            I am an engineer and enthusiastic learner fascinated by the latest technology trends that change the world.
                            I have over 2 years of experience in the IT Sector and more than 2 years of experience in a Full-stack developer
                        </p>
                    </div>
                    <div class='contactForm'>
                        <form >
                            <p>Contact Form</p>
                            <input type="text" placeholder='Name' />
                            <input type="number" placeholder='Phone Number' />
                            <input type="email" placeholder='Email' />
                            <input type='Description' placeholder='Description' />
                            <input class='submitBtn' type='submit' />
                        </form>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>)
}
export default ContactUs;