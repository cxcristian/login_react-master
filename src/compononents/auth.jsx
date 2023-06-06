
// Este codigo viene de la documentacion del firebase.
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseInit';

// Creamos una funcion 	para poder crear un asuario que se llama createAccount y pasamos 3 parametros 
// email,password,name , creamos una promesa con el modulo .then() para cuando cree el registro se cumpla la promesa esperada 
function createAccount(email, password, name) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((crendencialUsuario) => {
			updateProfile(crendencialUsuario.user, { displayName: name });
		})
		.catch((err) => alert(err));
}
// en esta funcion recibimos 2 parametros email y password que son los que necesito para entrar a la app
function inisiar_Sesion(email, password) {
	signInWithEmailAndPassword(auth, email, password).catch((err) => alert(err));
}
// Ya con la funcion registrar , que recibe 3 parametros email, password, name , tenemos el metodo .then() para cumplir la promesa 
// y por ultimo tenemos un .cath((err)) => alert((err)); que nos lanza un error en pantalla por si algo sale mal

function registrar(email, password, name) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((crendencialUsuario) => {
			updateProfile(crendencialUsuario.user, { displayName: name });
			signOut();
		})
		.catch((err) => alert(err));
}

//  por ultimo exportamos las funciones creadas al inicio
 
export { createAccount, inisiar_Sesion, registrar };
