import facebook from '../../images/Facebook_Logo_Primary.png'

function Facebook() {
    return (
        <>
            <div>Follow us on Facebook:</div>
            <a href='https://www.facebook.com/onwardsocialskills'>
                <img src={facebook} alt='Facebook logo' width={45} height={45}/>      
            </a>      
        </>
    )
}

export default Facebook;