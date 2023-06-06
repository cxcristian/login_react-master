import React, { useState } from 'react';
import { Menu } from './Menu.jsx';
import { inisiar_Sesion, createAccount } from './auth.jsx';
// creamos la funcion constante llamada Login , 3 contantes mas con funciones reservadas como set , y le damos usu = usuario  y pas = password
// En este caos pones la funcion useState en false para que no se quede en inisio de secion 
export const Login = () => {
	const [miLogin, setMiLogin] = useState(false);
	const [usu, setUsu] = useState('');
	const [pas, setPas] = useState('');
// Hacemos una funcion llamda iniciar sesion y la pasamos el parametro llamado e = evento 

	function inisiarSesion(e) {
		e.preventDefault();
		var txtusu = usu;
		var txtpas = pas;
// Con esta logica hacemos que se complete la informacion en la pagina login , si no hay info , saca un mensaje de alerta
		if (txtusu.length === 0 || txtpas.length === 0) {
			alert('Complete los Datos faltantes !!');
		} else {
			inisiar_Sesion(usu, pas);
			setMiLogin(true);
			document.getElementById('form_login').style.display = 'none';
		}
	}
 
	const registrar = (e) => {
		e.preventDefault();
		const txtusu = usu;
		const txtpas = pas;
		if (txtusu.length === 0 || txtpas.length === 0) {
			alert('Complete los Datos faltantes !!');
		} else {
			createAccount(txtusu, txtpas, 'Santy');
			setPas('');
			setUsu('');
			setTimeout(() => {
				alert('Te registraste exitosamente');
			}, 1000);
		}
	};
// aca  ponemos el html y le asignamos las funciones que declaramos en la parte de arriba , donde queremos que el codigo react funcione
	return (
		<div
			className="container"
			style={{ background: 'lightgray', marginTop: 20, padding: 20 }}
		>
			<form id="form_login">
				<div>
					<h1 style={{ color: 'blue', textalign: 'center' }}>LOGIN</h1>
					<label htmlFor="txtusu">
						<strong>Username</strong>
					</label>
					<input
						type="text"
						id="txtusu"
						style={{ textAlign: 'center' }}
						className="form-control"
						onChange={(e) => setUsu(e.target.value)}
						required
						value={usu}
					/>
				</div>
				<div>
					<label htmlFor="txtpas">
						<strong>Password</strong>
					</label>
					<input
						type="password"
						id="txtpas"
						style={{ textAlign: 'center' }}
						className="form-control"
						onChange={(e) => setPas(e.target.value)}
						required
						value={pas}
					/>
				</div>
				<br />
				<input
					type="submit"
					className="btn btn-primary"
					value="Entrar"
					onClick={inisiarSesion}
				/>
				<br />
				<br />
				<p>¿ Todavia no te registras ?</p>
				<input
					type="submit"
					className="btn btn-primary"
					value="Registrar"
					onClick={registrar}
				/>
				<p></p>
			</form>

			{miLogin && <Menu usu={usu} />}
		</div>
	);
};
