function ButtonComponent2(props){
  return (
  <button 
    type="button"
    style={{
      color:"brown",
      display:"block",
      margin:"auto",
      alignItems:"center"
    }}
    >{props.children}</button>)
}

export default ButtonComponent2