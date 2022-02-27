import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="navbar__list">
        <a href="#" className="navbar__title">
          <li >Seminario de sistemas operativos</li>
        </a>
        <a href="https://fernandomedina-s.github.io/multiprogramacion/" className="navbar__activity">
          <li >Procesamiento Multiprogramación</li>
        </a>
        <a href="#" className="navbar__activity">
          <li>Administrador de procesos</li>
        </a>
      </ul>
    </>
  );
};

export default Navbar;
