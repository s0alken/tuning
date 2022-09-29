
function Clientes({clientes}) {
    
    return (
        <div className="table-responsive">
            <table className="table table-hover table-borderless">
                <thead>
                    <tr>
                        <th scope="col">
                            rut
                        </th>
                        <th scope="col">
                            nombre
                        </th>
                        <th scope="col">
                            apellidos
                        </th>
                        <th scope="col">
                            direccion
                        </th>
                        <th scope="col">
                            telefono
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.rut}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellidos}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Clientes