import photo from '../../images/Danielle-and-Amie_1.jpg';
import './News.scss';
import news from './Inthenews.pdf'

function News() {
    return(
        <div className="news">
            <h3>In The News</h3>
            <div className='flex-row'>
                <img src={photo} alt='Two women standing side by side' className='news-photo'/>
                <p>Onward has been featured in the Fanshawe College Alumni Newsletter.</p>
            </div>
            <a href={news}>Click here to download and read the article in PDF format</a>
        </div>
    )
}

export default News;