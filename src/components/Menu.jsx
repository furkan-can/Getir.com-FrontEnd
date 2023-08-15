import { useWindowWidth } from '@react-hook/window-size'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Collapse } from 'react-collapse'
import { IoIosArrowDown } from 'react-icons/io'

const Menu = ({ menu }) => {
  const windowWidth = useWindowWidth()

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (windowWidth > 768) {
      setIsOpen(true)
    }

  }, [windowWidth, isOpen])

  const toggleCollapse = () => {
    if (windowWidth < 768) {
      setIsOpen(!isOpen)
    }
  }
  return (
    <section>
      <nav className="grid gap-y-4 mt-4 md:mt-0">
        <h6 onClick={() => toggleCollapse()} className="flex justify-between text-lg text-primary-brand-color cursor-pointer group ">
          {menu.title}
          <button className={`md:hidden my-1 text-primary-brand-color bg-primary-brand-color bg-opacity-10 rounded-md items-center flex justify-center p-1 `}>
            <IoIosArrowDown className={`${isOpen ? "rotate-180 transition-transform duration-300" : "transition-transform duration-500"}`} size={16} />
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className='grid gap-y-4'>
              {
                menu.links.map((item, index) => (
                  <li key={index}>
                    <a className='text-sm hover:text-brand-color' href={`/${item.url}`}>{item.title}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  )
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired
}

export default Menu
