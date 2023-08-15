import Header from '@/layouts/Header'
import HeroSection from '@/layouts/HeroSection'
import Categories from '@/layouts/Categories'
import Campaigns from '@/layouts/Campaigns'
import Favorites from '@/layouts/Favorites'
import MobileApp from '@/layouts/MobileApp'
import Cards from '@/layouts/Cards'
import Footer from '@/layouts/Footer'
import { useWindowWidth } from '@react-hook/window-size'


function App() {

  const windowWidth = useWindowWidth();

  return (
    <>
      <Header />
      {windowWidth <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaigns />}
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  )
}

export default App
