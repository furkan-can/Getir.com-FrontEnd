import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImages from "@/api/sliderImages.json"
import GetirBiMutlulukImage from "@/assets/getirbimutluluk-img.svg"
import ReactFlagsSelect from "react-flags-select";
import { PiWarningCircle } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
    const [selected, setSelected] = useState("TR");
    const [phone, setPhone] = useState("");
    const [validationError, setValidationError] = useState(false);
    const [errorTitle, setErrorTitle] = useState("Lütfen telefon numaranızı giriniz.");

    const phones = {
        TR: "+90",
        US: "+1",
        GB: "+44",
        FR: "+33",
        DE: "+49",
        IT: "+39",
    }

    const validatePhone = (phone) => {
        setPhone(phone);
        const regex = /^[0-9]{10}$/;
        setErrorTitle("Lütfen geçerli bir telefon numarası giriniz.");
        setValidationError(!regex.test(phone));
        return regex.test(phone);
    }

    const handleOnBlur = () => {
        if (phone.length === 0) {
            setValidationError(true);
            setErrorTitle("Lütfen telefon numaranızı giriniz.");
        } else {
            setValidationError(!validatePhone(phone));
        }
    }


    let sliderRef = useRef(null);

    useEffect(() => {
        sliderRef.slickPlay();
    }, [sliderRef]);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        arrows: false,
    };

    return (
        <div className="h-[500px] relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:z-10">
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                {
                    SliderImages.map((item, index) => {
                        return (
                            <img key={index} className="w-full h-[500px] object-cover" src={`/${item.url}`} alt={item.title} />
                        )
                    })
                }

            </Slider>
            <div className="max-w-7xl flex justify-between items-center container absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div>
                    <img src={GetirBiMutlulukImage} alt="Getir Bi Mutluluk" />
                    <h3 className="mt-8 text-4xl font-semibold text-white">
                        Dakikalar içinde <br /> kapınızda
                    </h3>
                </div>
                <div className="gap-y-3 flex flex-col p-6 w-[400px] rounded-lg bg-gray-50 ">
                    <h4 className="text-primary-brand-color text-center font-semibold " >Giriş yap veya kayıt ol</h4>
                    <div className="flex gap-x-2">
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            className="flag-select"
                        />
                        <label className="flex flex-1 flex-col group gap-y-2">
                            <div className="relative">
                                <input required className={` ${validationError ? `error` : ``} phone-text h-14 text-sm pt-2 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer`} value={phone} onChange={(e) => validatePhone(e.target.value)} onBlur={() => handleOnBlur()} type="number" name="phone"
                                />
                                <PiWarningCircle hidden={!validationError} size={30} className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600" />
                                <span className=" cursor-text text-gray-500 text-sm absolute left-4 top-1/2 -translate-y-1/2 transition-all peer-focus:text-primary-brand-color peer-focus:top-3 peer-focus:text-xs peer-valid:text-primary-brand-color peer-valid:top-3 peer-valid:text-xs ">Telefon Numarası</span>
                            </div>
                            <span hidden={!validationError} className="text-red-600 text-xs">{errorTitle}</span>
                        </label>
                    </div>
                    <button className="h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color bg-brand-yellow hover:text-brand-yellow hover:bg-primary-brand-color">
                        Telefon numarası ile devam et
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
