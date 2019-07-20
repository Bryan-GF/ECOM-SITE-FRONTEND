
import React from 'react'
import '../HomePage/homepage.scss'

const Slide = (props) => {
    let div;
    
    if(props.check === "pressSlide") {
      return (
          
        <div className={props.check}>
          <p>{props.content.text}</p>
          <p>{props.content.author}</p>
        </div>
      )
    } else {
      const styles = {
        backgroundImage: `url(${props.content})`,
      }
      return (<div className={props.check} style={styles}></div>);
        
    }
}
  
   

export default Slide;