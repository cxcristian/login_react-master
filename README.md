#Documentacion de la app

Es una aplicacion diseñada para administradores , pensando en poder registrar productos de computadores , poder visualizar en una interfaz sencilla 
lista los productos que tiene , se peude eliminar el producto , tiene una pestaña la cual nos da una Estadisitica del total de productos ingresados , suma el valor de los productos y se le saca un promedio de precios .

todo esto esta ligado a una base de datos , en Firebase , la cual usamos una base de datos no relacional , suministrada por google , que me permite tener autenticacion , crer usuarios , desde el mismo login , con un boton de registar , es una app en proceso de crecimiento y para esta entrega se tuvo encuenta el funcionamiento y no tanto lo visual.

#Estrucutura de archivos 
 
Login.jsx : Pagina principal para ingresar con un usuario ya creado manualmente o registrado con anterioridad

Menu.jsx : Entra al Menu princial el cual es una tabla con todas las pestañas sin visualizar , con un despliegue horizontal

Registrar.jsx : Tiene 4 casillas para llenar informacion , 3 son <input> , y uno es un <option> con varias opciones 
y un boton en color azul grande que dice Registrar

Listar.jsx : En esta aparece todo dato ingresado en el archivo registrar , teniendo en cuenta que este esta vinculado a una base de datos en firebase con el nombre de 'pinturas-6c0b0'

Estadistica.jsx : En este archivo tenemos 3 cuadros en el cual aparece cantidad de productos , valor total de productos y un promedio .

Auth.jsx : En este archivo se encuentra la logica para poder registrar un usuario nuevo desde la pagina de login . esto queda registrado en Firebase  https://console.firebase.google.com/u/0/project/pinturas-6c0b0/overview?hl=es-419





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


