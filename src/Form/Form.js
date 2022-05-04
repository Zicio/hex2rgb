import PropTypes from "prop-types";

function Form(props) {
  const { onChange, hex, rgb } = props;
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    onChange(name, value);
  };

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        name="hex"
        onChange={handleChange}
        value={hex}
      />
      <span className="form__solution">{rgb}</span>
    </form>
  );
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
};

export default Form;
