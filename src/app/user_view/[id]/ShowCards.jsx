'use client'

import style from './userview.module.css'
import UpdateComp from './UpdateComp'
import pen from '../../public/pen.svg'
import DeleteButton from './DeleteButton'
import Image from 'next/image'
import { useState } from 'react'



export default function ShowCards({ info, naid_id }) {
    const [idCard, setIdCard] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [cardIndex, setCardInex] = useState(0)

    const handleIdCard = (cardId, cardIndex) => {
        setIdCard(cardId);
        setCardInex(cardIndex)
        setOpen(!isOpen);
    };


    const handleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <main className={style.main}>
                {info.map((card, index) => (
                    <article className={style.card} key={card.id}>
                        <h1 className={style.cardTitle}>{card.title}</h1>
                        <p className={style.cardDescription}>{card.description}</p>

                        {/* Llamada correcta a handleOpen */}
                        <Image 
                            src={pen} 
                            width={200} 
                            height={100} 
                            alt='NAID logo' 
                            className={style.editIcon}
                            onClick={() => handleIdCard(card.id, index)} 
                        />

                        <DeleteButton id={card.id}></DeleteButton>
                    </article>
                ))}
            </main>

            <UpdateComp 
                info={info}
                naid_id = {naid_id}
                cardIndex = {cardIndex} 
                id={idCard} 
                isOpen={isOpen} 
                handleOpen={handleOpen}
            />
        </>
    );
}