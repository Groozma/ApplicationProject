import facebook from '../../images/Facebook_Logo_Primary.png'
import './Facebook.scss';

function Facebook() {
    return (
        <div className='facebook'>
            <a href='https://www.facebook.com/onwardsocialskills'>
                <img src={facebook} alt='Facebook logo' width={45} height={45}/>      
            </a>      
            <div>Follow us on Facebook:</div>
        </div>
    )
}

export default Facebook;