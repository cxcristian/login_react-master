import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseInit";
// creamos una funcion llamada Estadistica la cual utiliamos para obtener en una contante un array de datos , que utilizaremos 
// con el modulo useState([]) y le pasamos como parametro u array vacio
export const Estadistica = () => {
  const [arrayDatos, setArrayDatos] = useState([]);
// utilizamos una funcion asincrona porque como tenemos que esperar que la base de datos mande la informacion 
	async function obtenerRegistros() {
		const data = [];
		const querySnapshot = await getDocs(collection(db, 'pinturas'));
		querySnapshot.forEach((doc) => {
			data.push({ docId: doc.id, ...doc.data() });
		});

		setArrayDatos([...arrayDatos, ...data]);  
	}

  useEffect(() => {
		obtenerRegistros();
	}, []);
  // const obtenerRegistros = () => {
  //   var datos = localStorage.getItem("registroslogin");
  //   console.log("Datos cargados desde LocalStorage: ", datos);
  //   if (datos) {
  //     return JSON.parse();
  //   } else {
  //     return [];
  //   }
  // };

  // const [registrosLogin, setRegistrosLogin] = useState(obtenerRegistros());
// Utilizamos una funcion llamada miEstadisitica , en la cual reamos un ciclo for dentro de un condicional , in iterable  
  function miEstadistica(opcion) {
    var i = 0;
    var resultado = 0;
    var miObjeto;

    if (opcion === 1) {
      resultado = arrayDatos.length;
    } else if (opcion === 2) {
      for (i = 0; i < arrayDatos.length; i++) {
        miObjeto = arrayDatos[i];
        resultado += parseInt(miObjeto.precio);}

    } else if (opcion === 3) {
      for (i = 0; i < arrayDatos.length; i++) {
        miObjeto = arrayDatos[i];
        resultado += parseInt(miObjeto.precio);
      }
      resultado = (resultado / arrayDatos.length).toFixed(2);
    }
    return resultado;
  }
// en esta parte despues de tener toda la logica , la ligamos al html que va despues del return 

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">Resumen Estadístico</div>
      <div className="table-responsive">
        <div
          className="row row-cols-1 row-cols-md-3 g-2"
          style={{ padding: 5, width: "90%", margin: "0 auto" }}
        >
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cantidad de Componentes</h5>
                <p className="card-text"> {miEstadistica(1)} </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Suma de Precios</h5>
                <p className="card-text"> {miEstadistica(2)} </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Promedio de Precios</h5>
                <p className="card-text"> {miEstadistica(3)} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
