import PropTypes from "prop-types";

// function getName(name) {
//   return name;
// }

export const DataApp = ({ title, name, text, number, msg }) => {
  return (
    <>
      <p>
        {title} {name} {text} {number + 1}
      </p>

      <p>Soy un parrafo</p>
      <p>{msg}</p>
    </>
  );
};

DataApp.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

DataApp.defaultProps = {
  title: "No hay titulo",
  msg: "Soy un mensaje",
};
