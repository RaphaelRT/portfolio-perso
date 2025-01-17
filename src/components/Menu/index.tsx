import React, { useEffect, useState } from 'react';

const Menu: React.FC = () => {
  const menuItems = [
    { id: 'about', label: '[ à propos ]' },
    { id: 'experiences', label: '[ expériences ]' },
    { id: 'education', label: '[ formation ]' },
    //{ id: 'projects', label: '[ projets ]' },
  ];

  const [activeHash, setActiveHash] = useState<string>(
    window.location.hash || `#${menuItems[0].id}`
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || `#${menuItems[0].id}`);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [menuItems]);

  return (
    <section className="menu">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`${activeHash === `#${item.id}` ? `menu_selected hoverable` : 'hoverable'}`}
          >
            <div>
              <a href={`#${item.id}`}>
                {item.label}
              </a>
            </div>
            
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
