import React from 'react'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <hr className='hr'/>
        <p className="col-sm">
          &copy;{new Date().getFullYear()} {"Desarrollada por Fabricio Marote para la materia Construcción de Interfaces de Usuarios, UNQ."}
        </p>
      </div>
    </div>
  )
}

export default Footer;
