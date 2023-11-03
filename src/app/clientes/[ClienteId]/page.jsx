export default function Prestamos(props){

    console.log(props.params.ClienteId);

    

    return(
        <h2>cliente ID {props.params.ClienteId}</h2>
    )
}