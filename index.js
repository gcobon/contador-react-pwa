/** Modo legacy*/

// class Saludo extends React.Component {
//   render() {
//     return (
//       <h1>Hola mundo legacy</h1>
//     )
//   }
// };

// ReactDOM.render(
//   <Saludo></Saludo>, document.getElementById('root'))


/** Modo actual*/
// const Saludo = () => {
//   return (
//     <ol>
//       <li>que</li>
//       <li>hay</li>
//       <li>de</li>
//       <li>nuevo</li>
//       <li>viejo</li>
//     </ol>
//   )
// }

// ReactDOM.render(
//   <Saludo />, document.getElementById('root'))

/** Interpolar*/
// const Interpolar = () => {

//   const [numero, setNumero] = React.useState(0);

//   setInterval(() => {
//     setNumero(numero + 1);
//   }, 1500);


//   return (
//     <div>
//       <h1>Hola {numero}</h1>
//       <hr />
//     </div>
//   )
// }


// ReactDOM.render(
//   <Interpolar />, document.getElementById('root'))


ReactDOM.render(<Contador />, document.getElementById('root'));

