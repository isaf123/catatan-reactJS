import "./style/button.css"

function ButtonComponent(props){
  if(props.ButtonTheme === "warning"){
    return <button 
      type={props.typeButton}
      className="btn-warning"
    >
      {props.children}
    </button>

  } else if(props.ButtonTheme === "success"){
    return <button 
      type={props.typeButton}
      className="btn-success"
    >
      {props.children}
    </button>
  }else{
    return <button 
      type={props.typeButton}
      style={{
        width:"200px"
      }}
    >
      {props.children}
    </button>
  }
}

export default ButtonComponent;





