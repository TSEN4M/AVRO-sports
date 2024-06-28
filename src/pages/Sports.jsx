import Card from "../components/Card.jsx"

import football from '../assets/football.jpg'
import basketball from '../assets/basketball.jpg'
import tennis from '../assets/tennis.jpg'
import fencing from '../assets/fencing.jpg'
import boxing from '../assets/boxing.jpg'
import swimming2 from '../assets/swimming2.jpg'


const Sports = () =>{
    return(
        <>
             <div className="filter-tab-container">
                <div class="filter-tab">
                    <button class="filter-button" data-filter="location">Location</button>
                    <button class="filter-button" data-filter="sports">Sports</button>
                    <button class="filter-button" data-filter="time">Time</button>
                </div>
            </div>


            
            <div className="sports-gallery">
               
                <Card image={football} title="Football" />
                <Card image={basketball} title="Basketball"/>
                <Card image={tennis} title="Tennis"/>
                <Card image={fencing} title="Fencing"/>
                <Card image={boxing} title="Boxing"/>
                <Card image={swimming2} title="Swimming"/>
            
            </div>
        </>
    )
}
export default Sports