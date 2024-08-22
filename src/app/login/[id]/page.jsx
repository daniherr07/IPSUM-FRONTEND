'use client'
import registerStyles from "./register.module.css"
import Image from 'next/image'
import logo from '../../public/logo.svg'
import RegisterForm from "./LoginForm";
import Link from "next/link";
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Register({params}){
    const router = useRouter();
    var jsonString = Cookie.get('loginCookie')

    if (jsonString != null || jsonString != undefined) {
        jsonString = JSON.parse(jsonString)
        if (params.id == jsonString.naid_id) {
            router.push(`/user_view/${params.id}`);
        }
    }
    

    
    
    return(
        <div className={registerStyles.container}>
            <Image src={logo} width={300} height={300} alt="Logo de NAID" className={registerStyles.image}></Image>
            <RegisterForm naid_id={params.id}></RegisterForm>
            <div className={registerStyles.register}>
                <p>Aun no tienes una cuenta?</p>
                <Link href={`/register/${params.id}`} type="button" className={registerStyles.registerButton}>REGISTRARSE</Link>
            </div>
        </div>
        
    );
}

  