import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";

export default function login() {
  return (
    <div class="form form--page">
      <div class="form__group form__group--page">
        <label class="form__label">Correo</label>
        <input class="form__field" type="text" placeholder="Correo" />
      </div>

      <div class="form__group form__group--page">
        <label class="form__label">Contraseña</label>
        <input class="form__field" type="text" placeholder="Contraseña" />
      </div>

      <div class="form__group form__group--page">
        <input class="form__btn" type="submit" value="Iniciar Sesión" />
      </div>

      <footer>
        ¿Aún no tienes cuenta? <Link to="/register">Regístrate</Link>
      </footer>
    </div>
  );
}
