import {Routes, Route, Link} from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Contact from '../../Pages/Contact/Contact';

function Nav() {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link> | {" "}
                <Link to='/Contact'>Contact</Link>
            </nav>
        </>
    )
}

export default Nav