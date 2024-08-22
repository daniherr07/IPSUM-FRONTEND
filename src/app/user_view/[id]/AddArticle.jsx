'use client'
import style from './userview.module.css'
import plus from '../../public/plus.svg'
import Image from 'next/image'
import {useState } from 'react'


export default function AddArticle({id}){

    const [openMenu, setOpenMenu] = useState(false)
    const [textAreas, setTextAreas] = useState({
        textarea1: '',
        textarea2: '',
        textarea3: '',
      });
    const [descTextArea, setDescTextArea] = useState('')
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    const [focused, setFocused] = useState(1)

    const handleInputChange1 = (event) => {
        const {value} = event.target;
        setInputValue1(value);
    };

    const handleInputChange2 = (event) => {
        const {value} = event.target;
        setInputValue2(value);
    };

    const handleInput = (event) => {
        const { name, value } = event.target;
        // Dynamically adjust height
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;

        // Update the text for the specific textarea
        setTextAreas((prevTextAreas) => ({
            ...prevTextAreas,
            [name]: value,
        }));
    };

    const handleDescTextArea = (event) => {
        setDescTextArea(event.target.value)
    }


    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleFocused = (buttonNumber) => {
        setFocused(buttonNumber)
    }

    const cleanForm = () => {
        setTextAreas({
            textarea1: '',
            textarea2: '',
            textarea3: '',
          })
        setDescTextArea('')
    }

    const handleSubmitTemplate = async (event) =>{
        event.preventDefault()


        try {
            const response = await fetch(`http://localhost:3001/api/addArtTemp`, { // Adjust the endpoint as needed
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: inputValue1,
                emergency: textAreas.textarea1,
                allergies: textAreas.textarea2,
                additional_info: textAreas.textarea1,
                naid_id: id,
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
    }

    const handleSubmitPerso = async (event) =>{
        event.preventDefault()


        try {
            const response = await fetch(`http://localhost:3001/api/addArt`, { // Adjust the endpoint as needed
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: inputValue2,
                desc: descTextArea,
                naid_ID: id,
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
    }

    const styledActive = {
        backgroundColor: '#0B2759',
        color: '#fff'
    }

    const styledUnactive= {
        backgroundColor: '#fff',
        color: '#000'
    }

    return(
        <>
            <section className={style.addSection} style={{marginBottom: `${openMenu ? '0' : '-30em'}`}}>
                <section className={style.iconSection} style={{justifyContent: `${openMenu ? 'end' : 'center'}`}}>
                    <Image src={plus} width={50} height={50} className={style.plusIcon} style={
                        {
                            transform: `translate(-50%, -50%) rotate(${openMenu ? '135deg' : '0deg'}) `,
                            left: `${openMenu ? '90%' : '50%'}`
                        
                        }} onClick={handleOpenMenu} alt='plusIcon'></Image>
                </section>
                <section className={style.addForm} style={{opacity: `${openMenu ? '1' : '0'}`}}>
                    {
                        focused == 1 
                        
                        ? 
                        <>
                            <h1>Plantilla</h1>
                            <form className={style.inputContainer} onSubmit={handleSubmitTemplate}>
                                <label htmlFor="name">Nombre</label>
                                <input type="text"  name='name' id='name' onChange={handleInputChange1} value={inputValue1}/>

                                <label htmlFor="contacts">Contactos de emergencia</label>
                                <textarea name="textarea1" id="contacts" value={textAreas.textarea1} onChange={handleInput} rows={1}></textarea>

                                <label htmlFor="allergies">Alergias que presenta</label>
                                <textarea name="textarea2" id="allergies" value={textAreas.textarea2} onChange={handleInput} rows={1}></textarea>

                                <label htmlFor="misc">Informacion Adicional</label>
                                <textarea name="textarea3" id="misc" value={textAreas.textarea3} onChange={handleInput} rows={1}></textarea>
                                <button className={style.submitButton}>Confirmar</button>
                                <br />
                                <button type='reset' className={style.submitButton} onClick={cleanForm}>Limpiar</button>
                            </form>
                            <section className={style.addButtons}>
                                <button onClick={() => {handleFocused(1)}} style={focused == 1 ? styledActive : styledUnactive}>Plantilla</button>
                                <button onClick={() => {handleFocused(2)}} style={focused == 1 ? styledUnactive : styledActive}>Personalizado</button>
                            </section>
                        </>

                        :
                        <>
                            <h1>Personalizado</h1>
                            <form className={style.inputContainer} onSubmit={handleSubmitPerso}>
                                <label htmlFor="title">Titulo</label>
                                <input type="text"  name='title' id='title' onChange={handleInputChange2} value={inputValue2}/>

                                <label htmlFor="description">Descripción</label>
                                <textarea className={style.descTextArea} name="textarea1" id="description" value={descTextArea} onChange={handleDescTextArea} rows={10}></textarea>
                                <button className={style.submitButton}>Confirmar</button>
                                <br />
                                <button type='reset' className={style.submitButton} onClick={cleanForm}>Limpiar</button>
                            </form>
                            <section className={style.addButtons}>
                                <button onClick={() => {handleFocused(1)}} style={focused == 1 ? styledActive : styledUnactive}>Plantilla</button>
                                <button onClick={() => {handleFocused(2)}} style={focused == 1 ? styledUnactive : styledActive}>Personalizado</button>
                            </section>
                        </>
                    }
                        
                </section>
            </section>


        </>
    )
}