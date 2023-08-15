import PropTypes from 'prop-types'

const Menu = ({ menu }) => {
  return (
    <section>
      <nav className="grid gap-y-4">
        <h6 className="text-lg text-primary-brand-color">{menu.title}</h6>
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
      </nav>
    </section>
  )
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired
}

export default Menu
