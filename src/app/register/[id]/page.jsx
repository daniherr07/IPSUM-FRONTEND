import registerStyles from "./register.module.css"
import Image from 'next/image'
import logo from '../../public/logo.svg'
import RegisterForm from "./RegisterForm";
import Link from "next/link";


export default function Register({params}){
    
    return(
        <div className={registerStyles.container}>
            <Image src={logo} width={300} height={300} alt="Logo de NAID" className={registerStyles.image}></Image>
            <RegisterForm naid_id={params.id}></RegisterForm>
            <div className={registerStyles.register}>
                <p>Ya tienes una cuenta registrada?</p>
                <Link href={`/login/${params.id}`} type="button" className={registerStyles.registerButton}>INICIAR SESION</Link>
            </div>
        </div>
        
    );
}