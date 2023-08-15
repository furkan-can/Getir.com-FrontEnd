import mobileAppLinksData from "/src/api/mobileapp-links.json";
import phoneLandingImg from "@/assets/phoneLanding.png"
import { useEffect, useState } from "react";

const MobileApp = () => {
    const [mobileAppLinks, setMobileAppLinks] = useState([]);

    useEffect(() => {
        setMobileAppLinks(mobileAppLinksData);
    }, []);


    return (
        <div className=" flex-col md:flex-row container mx-auto max-w-7xl bg-primary-brand-color bg-mobile-app mt-7 md:rounded-lg text-white flex justify-between md:items-center">
            <div className="flex p-10 gap-y-3 flex-col">
                <h3 className="text-2xl font-bold tracking-tight">Getir{`'`}i indirin!</h3>
                <p className="text-base font-semibold" >İstediğiniz ürünleri dakikalar içinde kapınıza <br className="hidden lg:absolute" /> getirelim.</p>
                <nav className="flex mt-5 gap-y-2 md:gap-y-0 md:gap-x-2 md:flex-row flex-col">
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
            <picture className="pt-6 hidden md:block">
                <img src={phoneLandingImg} alt="Phone Landing" />
            </picture>
        </div>
    )
}

export default MobileApp
