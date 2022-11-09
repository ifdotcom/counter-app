import PropTypes from "prop-types";

//# Estos componentes no son más que una fución
//# shortcut-> rafc
// export function App() {
//   return (
//     <>
//       <h1>Holiwi!!!</h1>
//       <div>
//         <h2>Manchis</h2>
//       </div>
//     </>
//   );
// }

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.protoTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
