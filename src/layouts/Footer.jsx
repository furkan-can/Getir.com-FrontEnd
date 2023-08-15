import mobileAppLinksData from "@/api/mobileapp-links.json";
import { useEffect, useState } from "react";
import Menu from "../components/Menu.jsx";
import { BiGlobe } from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    const [mobileAppLinks, setMobileAppLinks] = useState([]);

    useEffect(() => {
        setMobileAppLinks(mobileAppLinksData);
    }, []);

    const menus = [
        {
            title: `Getir'i keşfedin`,
            links: [
                {
                    title: 'Hakkımızda',
                    url: '#'
                },
                {
                    title: 'Kariyer',
                    url: '#'
                },
                {
                    title: 'Teknoloji Kariyerleri',
                    url: '#'
                },
                {
                    title: 'İletişim',
                    url: '#'
                },
                {
                    title: 'Sosyal Sorumluluk Projeleri',
                    url: '#'
                }
            ]
        },
        {
            title: 'Yardıma mı ihtiyacınız var?',
            links: [
                {
                    title: 'Sıkça Sorulan Sorular',
                    url: '#'
                },
                {
                    title: 'Kişisel Verilerin Korunması',
                    url: '#'
                },
                {
                    title: 'Gizlilik Politikası',
                    url: '#'
                },
                {
                    title: 'Kullanım Koşulları',
                    url: '#'
                },
                {
                    title: 'Çerez Politikası',
                    url: '#'
                }
            ]
        },
        {
            title: 'İş Ortağımız Olun',
            links: [
                {
                    title: 'Bayimiz Olun',
                    url: '#'
                },
                {
                    title: 'Deponuzu Kiralayın',
                    url: '#'
                },
                {
                    title: 'GetirYemek Restoranı Olun',
                    url: '#'
                },
                {
                    title: 'GetirÇarşı İşletmesi Olun',
                    url: '#'
                },
                {
                    title: 'Zincir Restoranlar',
                    url: '#'
                }
            ]
        },
    ];

    return (
        <div className="bg-white mt-14">
            <div className="container mx-auto max-w-7xl ">
                <div className="grid grid-cols-4 pt-10 pb-5">
                    <section>

                        <nav className="grid grid-rows-3 gap-y-4">
                            <h6 className="text-lg text-primary-brand-color">Getir{`'`}i indirin!</h6>
                            {
                                !mobileAppLinks.length && <p>Yükleniyor...</p>
                            }
                            {

                                mobileAppLinks.length && mobileAppLinks.map((link, index) => (
                                    <a key={index} href="#">
                                        <img src={`/${link.url}`} alt={link.title} />
                                    </a>
                                ))
                            }
                        </nav>
                    </section>
                    {
                        menus.map((menu, index) => (
                            <Menu key={index} menu={menu} />
                        ))

                    }
                </div>
                <div className="border-t border-gray-100 py-6 flex justify-between items-center">
                    <div className="text-xs text-gray-700 flex gap-x-8">
                        &copy; 2023 Getir
                        <ul className="list-disc">
                            <li>
                                <a className="text-primary-brand-color hover:underline" href="#">
                                    Bilgi Toplumu Hizmetleri
                                </a>
                            </li>
                        </ul>
                    </div>
                    <nav className="flex gap-x-2 text-sm items-center">
                        <a className="hover:bg-primary-brand-color hover:bg-opacity-10 group p-2 rounded-lg hover:text-primary-brand-color transition-all" href="#">
                            <BsFacebook size={20} className="text-gray-500 group-hover:text-primary-brand-color" />
                        </a>

                        <a className="hover:bg-primary-brand-color hover:bg-opacity-10 group p-2 rounded-lg hover:text-primary-brand-color transition-all" href="#">
                            <BsTwitter size={20} className="text-gray-500 group-hover:text-primary-brand-color" />
                        </a>

                        <a className="hover:bg-primary-brand-color hover:bg-opacity-10 group p-2 rounded-lg hover:text-primary-brand-color transition-all" href="#">
                            <BsInstagram size={20} className="text-gray-500 group-hover:text-primary-brand-color" />
                        </a>

                        <a className=" hover:bg-primary-brand-color hover:bg-opacity-10 group hover:text-primary-brand-color transition-all flex items-center text-gray-500 text-xs gap-x-2 border border-gray-100 rounded-lg p-2" href="#">
                            <BiGlobe size={20} className="text-gray-500 group-hover:text-primary-brand-color" /> Türkçe (TR)
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer
