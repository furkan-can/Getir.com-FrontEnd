import GetirLogos from '@/api/logo.json'
import { BiGlobe } from 'react-icons/bi'
import { RiUserFill } from 'react-icons/ri'
import { HiUserAdd } from 'react-icons/hi'
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
        <div className="bg-brand-color">
            <div className="container mx-auto max-w-7xl h-11 flex items-center justify-between">
                <div className='flex gap-1'>
                    {
                        GetirLogos.map((logo, index) => (
                            <a className={`${isActiveLink(logo.path) ? `bg-primary-brand-color rounded-t-md` : ``} hover:bg-primary-brand-color hover:rounded-t-md h-10 px-5 py-5 mt-1 flex items-center`} href="#" key={index}>
                                <img className={`h-4 ${isActiveLink(logo.path) ? `` : `active`}`} src={`/${logo.url}`} alt={logo.titleF} />
                            </a>
                        ))
                    }

                </div>

                <nav className='flex gap-x-8 text-sm font-semibold'>
                    <a className='text-white text-opacity-80 hover:text-opacity-100 transition-all flex items-center gap-x-2' href="#"><BiGlobe size={20} /> Türkçe (TR)</a>
                    <a className='text-white text-opacity-80 hover:text-opacity-100 transition-all flex items-center gap-x-2' href="#"><RiUserFill size={20} />Giriş Yap</a>
                    <a className='text-white text-opacity-80 hover:text-opacity-100 transition-all flex items-center gap-x-2' href="#"><HiUserAdd size={20} />Kayıt Ol</a>
                </nav>
            </div>
        </div>
    )
}

export default Header
