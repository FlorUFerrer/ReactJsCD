export const Mensaje = (props) =>{

    return(

        <h1 onClick={props.onMensaje} >{props.text}
       </h1>
    )
   }