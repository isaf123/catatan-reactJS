//FUNCTIONAL COMPONENT : metode pembuatan component
function NavbarComponent(props){

  return (<div>
    <h1>{props.idName} {props.idNumber} Navbar Component</h1>
  </div>
  )
}

//meng eksport fungsi component agar dapat di import dan dirender
// melalui component jsx lainny
export default NavbarComponent