import './NeatStuff.scss';
import logo from "../../images/logo.png";
import award from "./Distinguished-Alumni-Award-2010-PDF.pdf";
import goop from "./Goop-Instructions-PDF.pdf";
import playdough from "./Homemade-Playdough-PDF.pdf";
import poem from "./You-Are-Unique-Poem-PDF.pdf";

function NeatStuff() {
    return (
        <div className="neatStuff">
            <img src={logo} alt='Onward Social Skills Logo' className='image-card'/>
            <ul className='list-card'>
                <li><a href={award}>Distinguished Alumni Award Recipient 2010</a></li>
                <li><a href={goop}>Goop Instruction</a></li>
                <li><a href={playdough}>Homemade Playdough Recipe</a></li>
                <li><a href={poem}>You Are Unique Poem & Song</a></li>
                <li><a href="https://herviewfromhome.com/50-questions-to-ask-your-kids-instead-of-asking-how-was-your-day/">50 Questions To Ask Your Child Instead Of Asking “How Was Your Day”</a></li>
            </ul>
        </div>
    )
}

export default NeatStuff;