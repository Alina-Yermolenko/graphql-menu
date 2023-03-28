import './MenuList.css';
import { MenuItem } from "../MenuItem/MenuItem"

export const MenuList = ({ menuList }) => {
  return (
    <div className='container'>
      <ul className="menu-list">
        {menuList.map((item) => {
          const { url, title } = item.attributes;
          return (
            <MenuItem
              key={url}
              title={title}
              url={url}
            />
          )
        })}
      </ul>
    </div>
  )
}