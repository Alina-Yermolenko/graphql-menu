import './App.css'
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MenuList } from './components/MenuList/MenuList';


function App() {
  const [menuList, setMenuList] = useState([]);

  const query = `
  query items {
    menuItems(pagination:{
      start:0
    }) {
      data{
        id,
        attributes{
          title,
          url
        }
      }
    }
  }
  `;

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('https://test-task.entireframework.com/cms/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: query,
          }),
        });
        const { data } = await response.json();
        setMenuList(data.menuItems.data);
      } catch (error) {
        console.error(error)
      }
    };
    fetchMenuItems();
  }, []);

  return (
    <>
      <Routes>
        {menuList?.map((item) => {
          const { id } = item;
          const { url } = item.attributes;
          return (
            <Route
              key={id}
              path={
                url
              }
              element={
                <MenuList menuList={menuList}/>
              }
            />
          )
        })}
        <Route path='/' element={<MenuList menuList={menuList}/>} />
        <Route path='*' element={<>Page not found</>} />
      </Routes>
    </>
  );
}

export default App;
