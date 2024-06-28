import React from 'react'
import ReviewCard from './ReviewCard'
import Ellipse1 from '../assets/ellipse1.png';
import Ellipse2 from '../assets/ellipse2.png';
import Ellipse3 from '../assets/ellipse3.png';
import Ellipse4 from '../assets/ellipse4.png';

function ReviewCardContainer() {
  return (
    <div className="flex items-center justify-evenly flex-wrap">
        <ReviewCard image={Ellipse1} 
        text="&quot;The Playground seems to transform people&apos;s approach to sports. Kudos to the team behind this amazing idea.&quot;" />
         <ReviewCard image={Ellipse2} 
        text="&quot;“I'm impressed with The Playground&apos;s commitment to promoting diversity in sports. They truly walk the talk.&quot;" />
         <ReviewCard image={Ellipse3} 
        text="&quot;The youth development programs and the inclusivity at The Playground are exceptional. Can&apos;t wait to learn new sports with them.&quot;" />
         <ReviewCard image={Ellipse4} 
        text="&quot;The umbrella of services offered by The Playground are really astounding.&quot;" />
    </div>
  )
}

export default ReviewCardContainer