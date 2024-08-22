import Image from 'next/image'
import style from './userview.module.css'
import logo from '../../public/logo.svg'
import DropdownNav from './DropdownNav'
import user from '../../public/user.svg'
import wave from '../../public/wave.svg'

import AddArticle from './AddArticle'
import ShowCards from './ShowCards'
import CheckCookie from './checkCookie'





export default async function User_View({ params }) {

    const res = await fetch(`http://localhost:3001/api/getInfo/${params.id}`, {
        method: 'GET',
        cache: 'no-cache', // Use this to bypass caching
    });

    const info = await res.json();

    const resName = await fetch(`http://localhost:3001/api/getName/${params.id}`, {
        method: 'GET',
        cache: 'no-cache', // Use this to bypass caching
    });

    const infoName = await resName.json()

    return(
        <>
            <CheckCookie link={params.id}></CheckCookie>
            <header className={style.header}>
                <div className={style.menu}>
                    <Image src={logo} width={200} height={100} alt='NAID logo' className={style.logo}></Image>
                    <DropdownNav link={params.id} />
                </div>

                <div className={style.userContainer}>
                    <Image src={user} width={50} height={50} className={style.userIcon} alt='UserIcon'/>
                    <p className={style.userName}>{infoName}</p>
                </div>

                <Image src={wave} className={style.wave} alt='WaveEffect'/>
            </header>

            <ShowCards info={info} naid_id = {params.id}></ShowCards>



            <AddArticle id = {params.id}/>
        </>
    )
    
}