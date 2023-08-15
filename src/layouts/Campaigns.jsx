import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import campaingsData from "@/api/campaigns.json"
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import PropTypes from "prop-types";
import Title from "../components/Title";

const Campaigns = () => {
    const [campaings, setCampaings] = useState([...campaingsData]);

    useEffect(() => {
        setCampaings(campaingsData);
    }, []);

    let sliderRef = useRef(null);

    useEffect(() => {
        sliderRef.slickPlay();
    }, [sliderRef]);

    function NextArrow({ onClick }) {
        return (
            <button className={`text-brand-color`} onClick={onClick}>
                <IoIosArrowForward size={22} />
            </button>
        );
    }

    NextArrow.propTypes = {
        onClick: PropTypes.func,
    };

    function PrevArrow({ onClick }) {
        return (
            <button className={`text-brand-color`} onClick={onClick}>
                <IoIosArrowBack size={22} />
            </button>
        );
    }

    PrevArrow.propTypes = {
        onClick: PropTypes.func,
    };



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="container mx-auto max-w-7xl py-8">
            <Title title="Kampanyalar" />
            <Slider className="-mx-2 flex" ref={slider => (sliderRef = slider)} {...settings} >
                {!campaings.length && <div>Yükleniyor...</div>}
                {
                    campaings.length && campaings.map((item, index) => {
                        return (
                            <img key={index} className="object-cover px-2 rounded-2xl" src={`/${item.image}`} alt={`Kampanya ${index}`} />
                        )
                    })
                }
            </Slider>
        </div>
    )
}



export default Campaigns
