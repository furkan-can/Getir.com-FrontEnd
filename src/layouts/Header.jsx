import GetirLogos from '@/api/logo.json'
import { BiGlobe } from 'react-icons/bi'
import { RiUserFill } from 'react-icons/ri'
import { HiUserAdd } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import { IoIosArrowForward } from "react-icons/io"

import { useEffect, useState } from 'react'

const Header = () => {
    const pageData = [
        { path: '/', title: 'Anasayfa' },
        { path: '/yemek', title: 'Yemek' },
        { path: '/buyuk', title: 'Büyük' },
        { path: '/su', title: 'Su' },
        { path: '/carsi', title: 'Çarşı' }
    ];
    const [activePage, setActivePage] = useState('/');

    useEffect(() => {
        const path = window.location.pathname;
        const matchingPage = pageData.find(page => page.path === path);

        if (matchingPage) {
            setActivePage(matchingPage.path);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isActiveLink = (linkPath) => {
        return linkPath === activePage;
    }


    return (
        <div className="bg-brand-color md:px-10 lg:px-4">
            <div className="container pl-2 md:pl-0 mx-auto max-w-7xl h-11 flex items-center justify-between">
                <div className='flex gap-1'>
                    {
                        GetirLogos.map((logo, index) => (
                            <a className={`${isActiveLink(logo.path) ? `bg-primary-brand-color rounded-t-md` : ``} hover:bg-primary-brand-color hover:rounded-t-md h-10 px-3 md:px-5 py-5 mt-1 flex items-center`} href="#" key={index}>
                                <img className={`h-3 md:h-4  ${isActiveLink(logo.path) ? `` : `active`}`} src={`/${logo.url}`} alt={logo.titleF} />
                            </a>
                        ))
                    }

                </div>

                <nav className='hidden md:flex gap-x-8 text-sm font-semibold'>
                    <a className='text-white text-opacity-80 hover:text-opacity-100 transition-all flex items-center gap-x-2' href="#"><BiGlobe size={20} /> <span className='md:hidden lg:flex'>Türkçe (TR)</span> </a>
                    <a className='text-white text-opacity-80 hover:text-opacity-100 transition-all flex items-center gap-x-2' href="#"><RiUserFill size={20} /><span className='md:hidden lg:flex'>Giriş Yap</span></a>
                    <a className='text-white text-opacity-80 hover:text-opacity-100 transition-all flex items-center gap-x-2' href="#"><HiUserAdd size={20} /><span className='md:hidden lg:flex'>Kayıt Ol</span></a>
                </nav>
            </div>
            <div className='md:hidden flex gap-1 py-2 bg-primary-brand-color'>
                <div className={`h-10 w-full justify-center px-5 py-5 mt-1 flex items-center`} href="#">
                    <a href="#">
                        <img className={`h-6 `} src={`/${GetirLogos[0].url}`} alt={GetirLogos[0].title} />
                    </a>
                </div>
            </div>
            <div className='md:hidden flex gap-1 py-3 cursor-pointer bg-white justify-between'>

                <button className='flex self-center items-center text-left text-sm font-semibold text-gray-600'><MdLocationOn className='text-primary-brand-color' size={20} />Teslimat Adresi Belirle</button>
                <IoIosArrowForward className='text-primary-brand-color' size={20} />
            </div>
        </div>
    )
}

export default Header
