import { useState } from "react";
export const ContadorApp = ({ value }) => { 
    const [ contador, setContador] = useState (0)

    const handleClick = () => {
        setContador (contador + 1)
    }


return (
    <>
     <h1 className="contador">Contador de clicks</h1>
     <p className="P">{contador}</p>
     <button className="boton" onClick={ handleClick }>Click para sumar</button>
    </> )
}

