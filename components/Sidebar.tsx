import React from "react";

interface Props {}

const menuItems = [
  {
    title: "Pages",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "/about",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ],
  },
  {
    title: "Analytics",
    items: [
      {
        title: "Reports",
        url: "/",
      },
      {
        title: "Teams",
        url: "/about",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ],
  },
  {
    title: "User",
    items: [
      {
        title: "Settings",
        url: "/",
      },
      {
        title: "Admin",
        url: "/about",
      },
      {
        title: "Help",
        url: "/contact",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="w-full ml-5">
      <div className="w-full min-h-screen bg-bg pl-4 pt-4">
        {menuItems.map((item) => (
          <div key={item.title} className="text-textSoft text-md">
            <h2 className="mb-5">{item.title}</h2>
            <ul className="gap-5 flex flex-col pb-7">
              {item.items.map((subItem) => (
                <li key={subItem.title} className="ml-4 text-text text-xl pt-5">
                  <a href={subItem.url}>{subItem.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
