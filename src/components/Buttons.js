const Button=(props)=>{
    return(
        
        <button style={{backgroundColor:props.bgColor,color:props.color ,padding:props.padding}} class="Button">{props.title}</button>
       
    )
}

export default Button;