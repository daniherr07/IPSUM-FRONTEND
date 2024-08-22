'use client'
import { useState } from 'react'
import Image from 'next/image'
import bars from '../../public/bars.svg'
import style from './userview.module.css'
import quit from '../../public/quit.svg'
import Link from 'next/link'
import Cookie from 'js-cookie';

export default function DropdownNav({link}) {
    const [position, setPosition] = useState(false)

    const handlePosition = () => {
        setPosition(!position)
    }

    const handleCookie = () => {
        Cookie.remove('loginCookie');
    }
    


    return(
        <>
        <nav className={style.dropdownNav} style={position ? {top: '0'} : {top: '-25vh'}}>

            <Image src={quit} className={style.quitButton} onClick={handlePosition} alt='quitButton'></Image>
            <br />
            <Link href={`/invite_view/${link}`} style={{all: 'unset'}} onClick={handleCookie}><h2>Cerrar Sesión</h2></Link>
            
        </nav>
        <Image src={bars} width={200} height={200} alt='NAID logo' className={style.bars} onClick={handlePosition}></Image>
        </>
    )
}