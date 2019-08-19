import React from 'react'
import '../Navmenu/style.css'
import Submenu from '../Submenu/Submenu';
const sublist=[{name:"for entrepreneur"},{name:"for students"},{name:"for hobyists"}]
const Navmenu=(props)=>{
   return (
     <div className="nav-item">
       <ul >
       <a href={props.link}> 
         <li>{props.name}</li>
        <ul className="sublist"> {props.submenu && sublist.map((el,i) =><Submenu  name={el.name} key={i} /> )}</ul>
        </a>
     </ul>
     </div>
     
   );
}
export default Navmenu ;
