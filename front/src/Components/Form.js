import React, { useState } from 'react';
import api from '../Api/api';
import getClientes from '../Utils/getClientes';
import formatRut from '../Utils/formatRut';
import titleCase from '../Utils/titleCase';

function Form({ setClientes }) {

    const [rut, setRut] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        if (!rut || !nombre || !apellidos || !direccion || !telefono) return;

        const response = await api.get('/clientes/crear', {
            params: { rut, nombre: titleCase(nombre), apellidos: titleCase(apellidos), direccion: titleCase(direccion), telefono }
        });

        const { creado } = response.data;

        if (creado) {
            setRut("");
            setNombre("");
            setApellidos("");
            setDireccion("");
            setTelefono("");

            const nuevosClientes = await getClientes();
            setClientes(nuevosClientes);
        }

    }

    const updateClientes = async e => {
        e.preventDefault();

        const nuevosClientes = await getClientes();
        setClientes(nuevosClientes);
    }

    return (
        <form name="form_clientes" onSubmit={handleSubmit} >
            <div className="form-group">
                <label htmlFor="formRut">rut</label>
                <input
                    type="text"
                    className="form-control"
                    id="formRut"
                    placeholder="Ingrese rut"
                    value={rut}
                    onChange={e => setRut(formatRut(e.target.value))}
                />
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="formNombre">nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formNombre"
                            placeholder="Ingrese nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="formApellidos">apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formApellidos"
                            placeholder="Ingrese apellidos"
                            value={apellidos}
                            onChange={e => setApellidos(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="formDireccion">direccion</label>
                <input
                    type="text"
                    className="form-control"
                    id="formDireccion"
                    placeholder="Ingrese direccion"
                    value={direccion}
                    onChange={e => setDireccion(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="formTelefono">telefono</label>
                <input
                    type="text"
                    className="form-control"
                    id="formTelefono"
                    placeholder="Ingrese telefono"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
            </div>

            <div className="box-btns">
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        <button className="btn-form btn-guardar">
                            <i className="fa-regular fa-floppy-disk"></i>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className="btn-form btn-actualizar" onClick={updateClientes}>
                            <i className="fa-solid fa-arrows-rotate"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form