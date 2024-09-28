
export const FormComponent = () => {
    return (
        <div>
            <div>
                <h2>Formulario</h2>
            </div>
            <div style={{display: "flax", flexDirection: "column"}}>
                <input type="email" placeholder="example@example.com"/>
                <input type="text" placeholder="Nombre"/>
                <input type="number" placeholder="Edad"/>
            </div>
        </div>
    )
}
