import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { MyLogo } from "./MyLogo"

export const Footer = () => {
  return (
    <div className='footer-container'>
        <MyLogo/>
        <div className='footer-info-container'>

            <div className='projectDisclaimer'>
                <p>This is a experimental project and should be treated as such.</p>
            </div>

            <div className='otherLinks'>
                <div className='linksSection'>
                    <p> View other Projects </p>
                    <ul>
                        <li> <a href="https://oscargomez15.github.io/crypto-tracker-app/" target='__blank'>Cryptocurrency Tracker</a> </li>
                        <li> <a href="https://habanerosbonitasprings.com/" target='__blank'> Local Restaurant Website </a> </li>
                        <li> <a href="https://oscargomez15.github.io/personal-portfolio/" target='__blank'> Personal Portfolio </a> </li>
                    </ul>
                </div>

                <div className='linksSection'>
                <p> Socials </p>
                    <ul>
                        <li> 
                            <a href='https://www.linkedin.com/in/oscargomez1998/' target='__blank'>
                                <FontAwesomeIcon icon={faLinkedin} size='xl'/> /oscargomez1998
                                </a>
                                </li>
                        <li> 
                            <a href='https://github.com/oscargomez15' target='__blank'>
                                <FontAwesomeIcon icon={faSquareGithub} size='xl'/> /oscargomez15
                                </a>
                                </li>
                        <li> 
                            <a href='https://www.facebook.com/oscargomez1998' target='__blank'>
                                <FontAwesomeIcon icon={faSquareFacebook} size='xl'/> /oscargomez1998 
                                </a> 
                                </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer;
