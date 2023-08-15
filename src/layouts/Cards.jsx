import CardData from "@/api/card-details.json";
import { useEffect, useState } from "react";

const Cards = () => {

    const [cardDetails, setCardDetails] = useState([]);

    useEffect(() => {
        setCardDetails(CardData);
    }, [])


    return (
        <div className="container mx-auto max-w-7xl grid gap-4 md:grid-cols-3 gap-x-4 md:pt-14 pt-8 p-5 md:p-0">
            {!cardDetails.length && <div>Yükleniyor...</div>}
            {cardDetails.length && cardDetails.map((card) => (
                <div className="bg-white shadow-sm pt-14 px-4 pb-10 rounded-lg items-center flex flex-col text-center" key={card.id}>
                    <img src={`/${card.url}`} alt={`Card ${card.id}`} />
                    <span className="text-lg text-primary-brand-color font-semibold mt-6">{card.title}</span>
                    <span className="mt-2 text-gray-500">{card.description}</span>
                </div>
            ))}
        </div>
    )
}

export default Cards
