import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseInit';

export const Registrar = () => {
	// Función asincrónica para obtener registros de la colección "pinturas"
	const obtenerRegistros = async () => {
		const data = [];
		const querySnapshot = await getDocs(collection(db, 'pinturas'));
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
			data.push(doc.data());
		});
		console.log(querySnapshot);
		console.log(data);
		return data;
	};

	// Estado para almacenar los registros obtenidos
	const [registrosLogin, setRegistrosLogin] = useState(obtenerRegistros());

	// Estados para los valores del formulario
	const [titulo, setTitulo] = useState('');
	const [estilo, setEstilo] = useState('');
	const [tecnica, setTecnica] = useState('');
	const [precio, setPrecio] = useState('');

	// Función para manejar el evento del botón "Guardar"
	const botonGuardar = (e) => {
		e.preventDefault();
		console.log('asasdas');
		try {
			// Agregar un nuevo documento a la colección "pinturas"
			const docRef = addDoc(collection(db, 'pinturas'), {
				titulo,
				estilo,
				tecnica,
				precio,
			});
			console.log('Document written with ID: ', docRef.id);
			limpiarFormulario();
		} catch (error) {
			console.error('Error adding document: ', error);
		}
	};

	// Función para limpiar el formulario
	function limpiarFormulario() {
		setTitulo('');
		setEstilo('');
		setTecnica('');
		setPrecio('');
		document.getElementById('miFormulario').reset();
	}

	return (
		<div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
			<div className="h3">
				Formulario De Registro 
				<br />
				<form id="miFormulario">
					<div className="row" style={{ marginTop: 20 }}>
						<div className="col-6">
							<input
								className="form-control form-control-lg text-center"
								type="text"
								placeholder="Digite el Componente"
								onChange={(e) => setTitulo(e.target.value)}
								required
							/>
						</div>

						<div className="col-6">
							<select
								className="form-select form-select-lg text-center"
								onChange={(e) => setEstilo(e.target.value)}
								required
							>
								<option value="">Indique la Marca</option>
								<option value="Ryzen">Ryzen</option>
								<option value="Intel">Intel</option>
								<option value="Nvidia">Nvidia</option>
							</select>
						</div>
					</div>

					<div className="row" style={{ marginTop: 20 }}>
						<div className="col-6">
							<input
								className="form-control form-control-lg text-center"
								type="text"
								placeholder="Digite la Serie"
								onChange={(e) => setTecnica(e.target.value)}
								required
							/>
						</div>
						<div className="col-6">
							<input
								className="form-control form-control-lg text-center"
								type="number"
								min="1"
								max="100000000"
								placeholder="Digite El Precio"
								onChange={(e) => setPrecio(e.target.value)}
								required
							/>
						</div>
					</div>

					<div className="row" style={{ marginTop: 20 }}>
						<div className="col">
							<button className="btn btn-primary btn-lg" onClick={botonGuardar}>
								Guardar Datos
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
