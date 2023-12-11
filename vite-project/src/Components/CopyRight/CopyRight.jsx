//Import copyright.css
import './CopyRight.css'

//import footer Socials Data.......
import { FootersLinksData } from '../../Data/Data'

import cirlce2 from '../../assets/circle2.png'

export default function CopyRight() {
    return (
      <div className='footer-copyright'>
        <div className="container copyright-container">
          <p>
            &copy;{new Date().getFullYear()}. {' '}
            <img src={cirlce2} alt="Circle Icon" className="iconfooter" />
            <i> CyberSage 2023</i> All Rights Reserved.
          </p>
          <div className='footer-socials'>
            {
                FootersLinksData.socials.map((item,index)=>{
                 return(
                    <a href={item.link} key={index}>
                    <item.icon />
                </a>
                 )
                })
            }
          </div>
        </div>
      </div>
    );
  }
  