import './Footer.css'
import { getCurrentYear, getFooterCopy } from '../utils/utils';

const Footer = () =>{
    return(
        <div className='App-footer'>
            <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
          </div>
    )
}

export default Footer;