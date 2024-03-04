//FUNCTIONAL COMPONENT : metode pembuatan component
import { Link } from 'react-router-dom'
import ButtonComponent from './button'

function NavbarComponent(props){

  return (
    <div 
      style={{
        display: "flex",
        alignItems: "center",
        gap:"10px"
      }}
    >
      <h1>{props.idName}</h1>
      <div>
        <Link to="/about">
          <ButtonComponent>About</ButtonComponent>
        </Link>
        <Link to="/contact">
          <ButtonComponent>Contact</ButtonComponent>
        </Link>
      </div>
    </div>
  )
}

//meng eksport fungsi component agar dapat di import dan dirender
// melalui component jsx lainny
export default NavbarComponent