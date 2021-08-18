import React from "react";
import Item from "../Item";

function List(props) {
  return <section>{props.children}</section>;
}

// function List(props) {
//   const { title, animal } = props;
//   return (
//     <section>
//       <h4>Nombre: {title}</h4>
//       <ul>
//         <Item prefix="Edad" type={animal.age} />
//         <Item prefix="Sexo" type={animal.gender} />
//         <Item prefix="Raza" type={animal.raza} />
//         <Item prefix="Tamaño" type={animal.size} />
//       </ul>
//     </section>
//   );
// }

export default List;
