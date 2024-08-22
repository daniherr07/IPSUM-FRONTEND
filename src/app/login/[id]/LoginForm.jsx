'use client'
import registerStyles from "./register.module.css"
import user from '../../public/user.svg'
import password from '../../public/password.svg'
import Image from 'next/image'
import { useState } from "react"
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function RegisterForm({naid_id}) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        userName: '',
        userPassword: '',
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

        try {
            const response = await fetch(`http://localhost:3001/api/login`, { // Adjust the endpoint as needed
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userName: formData.userName,
                userPassword: formData.userPassword,
                naid_ID: naid_id,
              }),
            });
      


      
            if (response.ok) {
              const data = {
                role: 'user',
                login: 'true',
                naid_id: naid_id,
              }

            Cookie.set('loginCookie', JSON.stringify(data), { expires: 30 });
            router.push(`/user_view/${naid_id}`);

            } else{
              // Handle errors
              alert(`Error: "Malas credenciales"`);
              window.location.reload(false)
            }
          } catch (error) {
            // Handle network errors
            console.error('An error occurred:', error);
            alert('An error occurred. Please try again later.');
            window.location.reload(false)
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


                <input type="submit" className={registerStyles.loginButton} value="INICIAR SESION" />
            </form>
        </>
    )


}