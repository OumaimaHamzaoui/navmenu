import React from 'react';
import './App.css';
import Navmenu from './component/Navmenu/Navmenu.js';

let list=[{name:"Home",link:"/",submenu:false},{name:"Services",link:"/",submenu:true},{name:"Contact",link:"/",submenu:false}]

function App() {
 return (<div className="nav-menu"> 
 
 { list.map((el,i) => <Navmenu 
                            name={el.name} 
                            link={el.link} 
                            submenu={el.submenu} 
                            key={i}
                             />)
  } </div>
 );
}

export default App;