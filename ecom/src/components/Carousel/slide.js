
import React from 'react'
import '../HomePage/homepage.css'

const Slide = (props) => {
    let div;
    
    if(props.check === "headerSlide") {
      console.log(props.check);
      console.log(props.content.image)
        const styles = {
            backgroundImage: `url(${props.content.image})`,
          }
        return (<div className={props.check} style={styles}></div>);
    } else {
        return (
          <div className={props.check}>
            <p>{props.content.text}</p>
            <p>{props.content.author}</p>
          </div>
        )
    }
}
  
   

export default Slide;