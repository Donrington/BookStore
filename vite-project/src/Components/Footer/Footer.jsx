// import Footer.css......
import './Footer.css'

//Import footerdata
import { FootersLinksData } from '../../Data/Data'

//import Link form React Router dom
import { Link } from 'react-router-dom'

//import Copyright and Footer Socials.....
import CopyRight from '../CopyRight/CopyRight'

export default function Footer(){
    return (
        <footer>
            <div className="container footer-container">
                            {/* About Params*/}
        
          <div>
          <h4>About Us</h4>
            <ul className="about-params param-links">
                {
                    FootersLinksData.Aboutus.map(({link, linkname}, index)=>{
                        return(
                            <li key={index}><Link to={link}>{linkname}</Link></li>
                        )
                    })
                }
                 </ul>
          </div>
    
                  {/* Discover Params*/}
        
                  <div>
          <h4>Discover Us</h4>
            <ul className="discoverParams param-links">
                {
                    FootersLinksData.Aboutus.map(({link, linkname}, index)=>{
                        return(
                            <li key={index}><Link to={link}>{linkname}</Link></li>
                        )
                    })
                }
                 </ul>
          </div>
                  {/* My Account Params*/}
        
                  <div>
          <h4>My Account</h4>
            <ul className="myAccount-params param-links">
                {
                    FootersLinksData.Myaccount.map(({link, linkname}, index)=>{
                        return(
                            <li key={index}><Link to={link}>{linkname}</Link></li>
                        )
                    })
                }
                 </ul>
          </div>
                      {/* About Params*/}
        
                      <div>
          <h4>Support</h4>
            <ul className="Help-params param-links">
                {
                    FootersLinksData.Help.map(({link, linkname}, index)=>{
                        return(
                            <li key={index}><Link to={link}>{linkname}</Link></li>
                        )
                    })
                }
                 </ul>
          </div>
            </div>
            <CopyRight/>
        </footer>
    )
}