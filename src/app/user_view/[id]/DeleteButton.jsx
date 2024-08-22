'use client'

import Image from 'next/image'
import style from './userview.module.css'
import trash from '../../public/trash.svg'


export default function DeleteButton({id}){

    const handleDelete = (id) => {
        const res = fetch(`http://localhost:3001/api/delete/${id}`, {
            method: 'DELETE',
            cache: 'no-cache', // Use this to bypass caching
        });

        window.location.reload()
    } 

    return(
        <Image src={trash} width={200} height={100} alt='NAID logo' className={style.deleteIcon} onClick={() => {handleDelete(id)}}></Image>
    )
}