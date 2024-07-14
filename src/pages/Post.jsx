import React from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import confetti from "canvas-confetti";
import axios from "axios";

function Post() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .post("https://ipsum-backend.onrender.com/", formData, { headers })
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        confetti();
      })
      .catch((error) => {
        console.error("There was an error submitting the form:", error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <>
      <NavBar />
      <main>
        <form
          action="http://localhost:4000"
          method="post"
          onSubmit={handleSubmit}
        >
          <label htmlFor="inputTitle">Título</label>
          <br />
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            value={formData.title}
          />
          <br />

          <label htmlFor="inputDesc">Descripcion</label>
          <br />
          <input
            type="text"
            name="description"
            required
            onChange={handleChange}
            value={formData.description}
          />
          <br />

          <label htmlFor="inputStat">Status</label>
          <br />
          <select
            name="status"
            required
            onChange={handleChange}
            value={formData.status}
          >
            <option value="">Selecciona una opcion</option>
            <option value="sinAgendar">Sin Agendar</option>
            <option value="porVisitar">Por Visitar</option>
            <option value="enConstruccion">En Construccion</option>
          </select>
          <br />
          <br />

          <button type="submit">Subir Formulario</button>
        </form>
      </main>
    </>
  );
}

export default Post;
