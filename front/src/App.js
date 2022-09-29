import { useEffect, useState } from 'react';
import Form from "./Components/Form";
import Clientes from "./Components/Clientes";
import getClientes from './Utils/getClientes';

function App() {

  const [clientes, setClientes] = useState([]);

  useEffect( () => {

    async function fetchData() {
      const data = await getClientes();
      setClientes(data);
    }

    fetchData();
  }, [])

  return (
    <div className="box">
      <div className="inner-box">
        <div className="row">
          <div className="col-sm-5">
            <div className="box-form">
              <Form setClientes={setClientes} />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="box-table">
              <div className="title-box">
                <p>
                  listado clientes
                </p>
              </div>
              <Clientes clientes={clientes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
