import React from "react"; 

function Try(props){
  return(
      <div >{props.location.state.name} {props.location.state.age}
        </div>
  )
}
export default Try