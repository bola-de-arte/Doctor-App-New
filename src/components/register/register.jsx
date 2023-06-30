import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.scss";
import "../login/login.scss";

export default function register() {
  return (
    <section className="login">
      <div class="form form--page">
        <div class="form__group form__group--page">
          <label class="form__label">Nombres</label>
          <input class="form__field" type="text" placeholder="Nombres" />
        </div>

        <div class="form__group form__group--page">
          <label class="form__label">Apellidos</label>
          <input class="form__field" type="text" placeholder="Apellidos" />
        </div>

        <div class="form__group form__group--page">
          <label class="form__label">Correo</label>
          <input class="form__field" type="text" placeholder="Correo" />
        </div>

        <div class="form__group form__group--page">
          <label class="form__label">Contraseña</label>
          <input class="form__field" type="text" placeholder="Contraseña" />
        </div>

        <div class="form__group form__group--page">
          <label class="form__label">Confirme su contraseña</label>
          <input class="form__field" type="text" placeholder="Contraseña" />
        </div>

        <div class="form__group form__group--page">
          <input class="form__btn" type="submit" value="Regístrate" />
        </div>

        <footer>
          ¿Ya tienes cuenta? <Link to="/Register">Inicie sesión</Link>
        </footer>
      </div>
    </section>
  );
}
