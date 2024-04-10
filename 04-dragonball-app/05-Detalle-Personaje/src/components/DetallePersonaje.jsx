import React, { useEffect, useState } from 'react'

import { useParams } from "react-router-dom";

import './DetallePersonaje.css';

const DetallePersonaje = () => {

  const [personaje, setPersonaje] = useState({});

  const [transformation, setTransformation] = useState({});

  const { id } = useParams();

  const getData = async () => {
    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    const data = await response.json();
    setPersonaje(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
<div className="card-wrapper">
  <div className="card">
    {/* card left */}
    <div className="product-imgs">
      <div className="img-display">
        <div className="img-showcase">
          <img src={personaje.image} alt={personaje.name} />
        </div>
      </div>
      <div className="img-select">
        <div className="img-item">
          <a href="#" data-id={1}>
            <img src={personaje.transformations} alt={personaje.name} />
          </a>
        </div>
        <div className="img-item">
          <a href="#" data-id={2}>
            <img src={personaje.image} alt={personaje.name} />
          </a>
        </div>
        <div className="img-item">
          <a href="#" data-id={3}>
            <img src={personaje.image} alt={personaje.name} />
          </a>
        </div>
        <div className="img-item">
          <a href="#" data-id={4}>
            <img src={personaje.image} alt={personaje.name} />
          </a>
        </div>
      </div>
    </div>
    {/* card right */}
    <div className="product-content">
      <h2 className="product-title">{personaje.name}</h2>
      <a href="#" className="product-link">{personaje.race}</a>
      <div className="product-rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
        <span>4.7(21)</span>
      </div>
      <div className="product-price">
        <p className="last-price">Afiliación: <span>{personaje.affiliation}</span></p>
        <p className="new-price">ki: <span>{personaje.ki}</span></p>
      </div>
      <div className="product-detail">
        <h2><b>Descripción:</b></h2>
        <p>{personaje.description}</p>
        <h2><b>Transformaciones:</b></h2>
        <ul>          
          <li>0: <span> 00</span></li>
          <li>1: <span> 11</span></li>
          <li>2: <span> 22</span></li>
          <li>3: <span> 33</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default DetallePersonaje