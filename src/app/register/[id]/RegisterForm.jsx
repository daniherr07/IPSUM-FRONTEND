'use client'
import registerStyles from "./register.module.css"
import user from '../../public/user.svg'
import password from '../../public/password.svg'
import cedula from '../../public/cedula.svg'
import Image from 'next/image'
import { useState } from "react"

export default function RegisterForm({naid_id}) {
    const [formData, setFormData] = useState({
        userName: '',
        userCedula: '',
        userPassword: '',
        userVerifyPassword: '',
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) =>{
        event.preventDefault()

        if (formData.userPassword !== formData.userVerifyPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/api/register`, { // Adjust the endpoint as needed
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userName: formData.userName,
                userCedula: formData.userCedula,
                userPassword: formData.userPassword,
                naid_ID: naid_id,
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
    }

    return(
        <>
            <form className={registerStyles.form} onSubmit={handleSubmit}>

                <div className={registerStyles.usernameContainer}>
                    <Image src={user} width={20} height={20} alt="User Icon" className={registerStyles.icon}></Image>
                    <input 
                    type="text" 
                    name="userName" 
                    className={registerStyles.userName} 
                    id="userName" 
                    placeholder="Nombre de usuario" 
                    value={formData.userName} 
                    onChange={handleChange}
                    />
                </div>

                <div className={registerStyles.usernameContainer}>
                    <Image src={cedula} width={20} height={20} alt="Cedula Icon" className={registerStyles.icon}></Image>
                    <input 
                        type="text" 
                        name="userCedula" 
                        className={registerStyles.userName} 
                        id="userCedula" 
                        placeholder="Cédula" 
                        value={formData.userCedula} 
                        onChange={handleChange}
                    />
                </div>

                <div className={registerStyles.passwordContainer}>
                    <Image src={password} width={20} height={20} alt="User Icon" className={registerStyles.icon}></Image>
                    <input 
                    type="password" 
                    name="userPassword" 
                    className={registerStyles.userPassword} 
                    id="userPassword" 
                    placeholder="Contraseña" 
                    value={formData.userPassword} 
                    onChange={handleChange}
                    />
                </div>

                <div className={registerStyles.passwordContainer}>
                    <Image src={password} width={20} height={20} alt="User Icon" className={registerStyles.icon}></Image>
                <input 
                    type="password" 
                    name="userVerifyPassword" 
                    className={registerStyles.userPassword} 
                    id="userVerifyPassword" 
                    value={formData.userVerifyPassword} 
                    onChange={handleChange}
                    placeholder="Verificar la Contraseña" />
                </div>

                <input type="submit" className={registerStyles.loginButton} value="REGISTRARSE" />
            </form>
        </>
    )


}