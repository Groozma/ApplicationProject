import photo1 from "../../images/gallery1.jpg"
import photo2 from "../../images/gallery2.jpg"
import photo3 from "../../images/gallery3.jpg"
import photo4 from "../../images/gallery4.jpg"
import photo5 from "../../images/gallery5.jpg"
import photo6 from "../../images/gallery6.jpg"
import photo7 from "../../images/gallery7.jpg"
import photo8 from "../../images/gallery8.jpg"
import photo9 from "../../images/gallery9.jpg"
import photo10 from "../../images/gallery10.jpg"
import photo11 from "../../images/gallery11.jpg"
import photo12 from "../../images/gallery12.jpg"
import photo13 from "../../images/gallery13.jpg"
import photo14 from "../../images/gallery14.jpg"

function Photos() {
    return(
        <>
            <div>
                <img src={photo1} alt="A kid painting"/>
                <img src={photo2} alt="A girl holding up a cake"/>
                <img src={photo3} alt="A group of kids sitting around in a circle"/>
            </div>
            <div>
                <img src={photo4} alt="A pair of teenagers in a bathing suit wrapped around by a towel"/>
                <img src={photo5} alt="A teenage girl in a costume"/>
                <img src={photo6} alt="A group of kids watching a play"/>
            </div>
            <div>
                <img src={photo7} alt="A staff member and a child"/>
                <img src={photo8} alt="A smiling kid"/>
                <img src={photo9} alt="A pair of staff covered in silly string"/>
            </div>
            <div>
                <img src={photo10} alt="A pair of staff in costumes"/>
                <img src={photo11} alt="A teenager holding a bunch of recycleables"/>
                <img src={photo12} alt="A pair of staff in the pool smiling"/>
            </div>
            <div>
                <img src={photo13} alt="Three staff wearing costumes"/>
                <img src={photo14} alt="A pair of kids jumping off a diving board"/>
            </div>
        </>
    )
}

export default Photos;