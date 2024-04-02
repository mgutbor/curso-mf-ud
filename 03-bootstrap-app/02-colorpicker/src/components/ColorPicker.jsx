import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");
  const [colorsList, setColorslist] = useState([]);

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();

    const copyColorsList = [color, ...colorsList];
    setColorslist(copyColorsList);
  };

  return (
    <>
      <form onSubmit={handleSubmitSaveColor}>
        <input
          type="color"
          className="form-control"
          style={{ width: "100%", height: "300px" }}
          title="Seleccionar un color"
          value={color}
          onChange={handleChangeColor}
        />

        <div className="text-center">
          <h2 className="mt-3 fw-bolder">
            <div
              style={{
                width: "30px",
                height: "30px",
                background: color,
                display: "inline-block",
                margin: "0 1rem",
                borderRadius: "50%",
                verticalAlign: "middle",
              }}
            ></div>
            <span className="text-uppercase" style={{ color: color }}>
              {color}
            </span>
          </h2>

          <button type="submit" className="btn btn-success mt-3">
            Guardar color
          </button>
        </div>
      </form>
      <pre>{colorsList}</pre>
    </>
  );
};

export default ColorPicker;
