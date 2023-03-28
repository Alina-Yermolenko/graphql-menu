import './MenuItem.css'
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const MenuItem = ({ title, url = '/' }) => {
  const ref = useRef();
  const [height, setHeight] = useState(0);
  const { pathname } = useLocation()

  useEffect(() => {
    setHeight(ref.current?.clientHeight || 0);
  },
    [])

  return (
    <NavLink
      to={'../' + url}
      ref={ref}
      className={({ isActive }) =>
        isActive ? "hidden" : "menu-link visible"
      }
      style={{
        marginTop: url === pathname || `/${url}` === pathname ? `-${height - 13}px` : '0',
      }}
    >
      <li className={`menu-item`}>
        {title}
      </li>
    </NavLink >
  );
}