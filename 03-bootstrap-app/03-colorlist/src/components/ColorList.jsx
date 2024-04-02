const ColorList = ({ colorsList = [] }) => {
  return (
    <>
      <h6 className="text-center">Listado de colores guardados</h6>
      <div className="list-group text-center">
        {colorsList.length > 0 ? colorsList.map((color, index) => (
          <button
            className="list-group-item list-group-item-action text-white"
            key={index}
            aria-current="true"
            title="Copiar"
            style={{
              background: color,
              fontWeight: "bolder",
            }}
          >
            {color}
          </button>
        )) : <h5 className="alert alert-danger text-center">No hay colores para mostrar</h5>}
      </div>
    </>
  );
};

export default ColorList;
