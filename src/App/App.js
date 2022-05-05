import Form from "../Form/Form";
import { useState } from "react";
import hexColorRegex from "hex-color-regex";
import hexToRgba from "hex-to-rgba";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    hex: "",
    rgb: "",
  });

  const checkValue = (value) => {
    if (hexColorRegex().test(value) && value.length === 7) {
      return hexToRgba(value);
    } else if (value.length >= 7) {
      return "Ошибка";
    }
    return form.rgb;
  };

  const handleChange = (name, value) => {
    const rgb = checkValue(value);
    setForm((prevForm) => ({ ...prevForm, [name]: value, rgb: rgb }));
  };

  return (
    <div className="container" style={{ backgroundColor: form.rgb }}>
      <Form onChange={handleChange} hex={form.hex} rgb={form.rgb} />
    </div>
  );
}

export default App;
