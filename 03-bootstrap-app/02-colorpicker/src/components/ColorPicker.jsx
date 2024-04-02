const ColorPicker = () => {
  return (
    <form>
      <input
        type="color"
        className="form-control"
        style={{ width: "100%", height: "300px" }}
        title="Seleccionar un color"
      />

      <div className="text-center">
        <h2 className="mt-3 fw-bolder">
          <div
            style={{
              width: "20px",
              height: "20px",
              background: "#312891",
              display: "inline-block",
              margin: "0 1rem",
              borderRadius: "50%",
            }}
          ></div>
        </h2>
      </div>
    </form>
  );
};

export default ColorPicker;
