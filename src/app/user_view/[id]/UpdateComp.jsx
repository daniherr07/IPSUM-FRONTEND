'use client'
import style from './userview.module.css'
import plus from '../../public/plus.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function UpdateComp({ info, id, naid_id, cardIndex, isOpen, handleOpen }) {

    const [title, setTitle] = useState(info[cardIndex].title);
    const [texta, setTextA] = useState(info[cardIndex].description);


    const handleChangeInput = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeTextA = (event) => {
        setTextA(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()


        try {
            const response = await fetch(`http://localhost:3001/api/update/${naid_id}`, { // Adjust the endpoint as needed
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: title,
                description: texta,
                id: id,
              }),
            });
      
            const result = await response.json();
      
            if (response.ok) {
              // Handle successful registration
              alert('Registration successful!');
              // Redirect or clear form, etc.
            } else {
              // Handle errors
              alert(`Error: ${result.message}`);
            }
          } catch (error) {
            // Handle network errors
            console.error('An error occurred:', error);
            alert('An error occurred. Please try again later.');
          }

          window.location.reload(false)
    };

    function setInputs() {
        setTitle(info[cardIndex].title)
        setTextA(info[cardIndex].description)
    }

    useEffect(() => {
        setInputs()
    }, [cardIndex])

    return (
        <section className={style.updateComp} style={{ bottom: isOpen ? '0' : '-34em' }}>
            <Image 
                src={plus} 
                className={style.closeButton} 
                onClick={handleOpen} 
                alt="Close Button"
            />
            <h1 className={style.updateTitle}>Editar información</h1>
            <form className={style.updateForm} onSubmit={handleSubmit}>
                <label htmlFor="title">Titulo</label>
                <input 
                    type="text"  
                    name='title' 
                    id='title' 
                    value={title} 
                    onChange={handleChangeInput}
                />

                <label htmlFor="description">Descripción</label>
                <textarea 
                    name="textarea1" 
                    id="description" 
                    rows={10} 
                    className={style.descTextArea} 
                    value={texta} 
                    onChange={handleChangeTextA}
                ></textarea>
                
                <button className={style.submitButton} onSubmit={handleSubmit}>Confirmar</button>
                <br />
                <button className={style.submitButton} type='reset'>Limpiar</button>
            </form>
        </section>
    );
}