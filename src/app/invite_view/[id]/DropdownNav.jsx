'use client'
import { useState } from 'react'
import Image from 'next/image'
import bars from '../../public/bars.svg'
import style from './invite.module.css'
import quit from '../../public/quit.svg'
import Link from 'next/link'

export default function DropdownNav({id}) {
    const [position, setPosition] = useState(false)

    const handlePosition = () => {
        setPosition(!position)
    }


    return(
        <>
        <nav className={style.dropdownNav} style={position ? {top: '0'} : {top: '-18vh'}}>

            <Image src={quit} className={style.quitButton} onClick={handlePosition} alt='quitButton'></Image>
            <Link href={`/login/${id}`} className={style.navTitle}><h2 >Iniciar Sesión</h2></Link>
            
            
        </nav>
        <Image src={bars} width={200} height={200} alt='NAID logo' className={style.bars} onClick={handlePosition}></Image>
        </>
    )
}