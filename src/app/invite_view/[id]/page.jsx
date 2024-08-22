import Image from 'next/image'
import style from './invite.module.css'
import logo from '../../public/logo.svg'
import user from '../../public/user.svg'
import wave from '../../public/wave.svg'
import DropdownNav from './DropdownNav'
import Link from 'next/link'

export default async function Invite_View({params}) {

    const res = await fetch(`http://localhost:3001/api/getInfo/${params.id}`, {
        method: 'GET',
        cache: 'no-cache', // Use this to bypass caching
    });
    let infoName;

    infoName = "Nuevo Usuario";

    const info = await res.json();
    console.log(info[0])
    
    if (info[0].password) {
        console.log("SI llego aca")
    } else {
        if (info[0]?.password != null || !info[0].password) {
            console.log("LLego al fetch del nombre")
            const resName = await fetch(`http://localhost:3001/api/getName/${params.id}`, {
                method: 'GET',
                cache: 'no-cache', // Use this to bypass caching
            });
    
            infoName = await resName.json()
        }
    }

    console.log(infoName)

    


    if (!res.ok) {
        return (
            <div>
                <h1>Error fetching data</h1>
                <p>{info.error || 'Something went wrong'}</p>
            </div>
        );
    }

    return(
        <>
            <header className={style.header}>
                <div className={style.menu}>
                    <Image src={logo} width={200} height={200} alt='NAID logo' className={style.logo}></Image>
                    <DropdownNav id={params.id}></DropdownNav>
                </div>

                <div className={style.userContainer}>
                    <Image src={user} width={50} height={50} className={style.userIcon} />
                    <p className={style.userName}>{infoName}</p>
                </div>

                <Image src={wave} className={style.wave} />
            </header>

            <main className={style.main}>
                {
                    infoName == "Nuevo Usuario" 
                    ?
                    <article className={style.card}>
                        <h1>Porfavor registrate</h1>
                        <Link href={`register/${params.id}`}>Dale click aqui para registrarte</Link>
                    </article>
                    :
                    info.map((card) => (
                    <article className={style.card} key={card.id}>
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                    </article>
                    ))
                }

            </main>
        </>
    )
    
}