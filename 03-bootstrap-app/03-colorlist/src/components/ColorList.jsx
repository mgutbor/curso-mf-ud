

const ColorList = () => {

  const colorsList = ["#ff0000", "#00ff00", "#0000ff"];

  return (
    <div className="list-group text-center">
      { colorsList.map((color, index) => (
        <button
          className="list-group-item list-group-item-action text-white"
          key={index}
          aria-current="true"
          title="Copiar"
          style={{
            background: color,
            fontWeight: "bolder"
          }}>
            {color}
          </button>
      ))}
    </div>
  )
}

export default ColorList