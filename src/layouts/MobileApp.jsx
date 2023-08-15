import mobileAppLinksData from "/src/api/mobileapp-links.json";
import phoneLandingImg from "@/assets/phoneLanding.png"
import { useEffect, useState } from "react";

const MobileApp = () => {
    const [mobileAppLinks, setMobileAppLinks] = useState([]);

    useEffect(() => {
        setMobileAppLinks(mobileAppLinksData);
    }, []);


    return (
        <div className="container mx-auto max-w-7xl bg-primary-brand-color bg-mobile-app mt-7 rounded-lg text-white flex justify-between items-center">
            <div className="flex p-10 gap-y-3 flex-col">
                <h3 className="text-2xl font-bold tracking-tight">Getir{`'`}i indirin!</h3>
                <p className="text-base font-semibold" >İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
                <nav className="flex mt-5 gap-x-2">
                    {
                        !mobileAppLinks.length && <p>Yükleniyor...</p>
                    }
                    {
                        mobileAppLinks.length && mobileAppLinks.map((link, index) => (
                            <a className="transition-all hover:scale-105" key={index} href="#">
                                <img src={`/${link.url}`} alt={link.title} />
                            </a>
                        ))
                    }
                </nav>
            </div>
            <picture className="pt-6">
                <img src={phoneLandingImg} alt="Phone Landing" />
            </picture>
        </div>
    )
}

export default MobileApp
