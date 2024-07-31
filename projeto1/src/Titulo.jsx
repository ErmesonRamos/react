import { useState } from "react";
function Titulo({ cor }) {

  const [texto, setTexto] = useState("Um titulo do estado inicial")

  return(
      <div>
        <h1 style={{color:cor}}>{texto} Um título qualquer</h1>
        <button onClick={() => {setTexto("Mudei via botão")}}>Mudar</button>
        
      </div>
  )

}
export default Titulo;