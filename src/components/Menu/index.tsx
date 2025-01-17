import React, { useEffect, useMemo, useState } from 'react';

interface MenuProps {
  currentSection: string | null;
}

const Menu: React.FC<MenuProps> = ({ currentSection }) => {
  const menuItems = useMemo(
    () => [
      { id: 'about', label: '[ à propos ]' },
      { id: 'experiences', label: '[ expériences ]' },
      { id: 'education', label: '[ formation ]' },
      // { id: 'projects', label: '[ projets ]' },
    ],
    []
  );

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
        {menuItems.map((item) => {
          const isSelected = currentSection
            ? item.id === currentSection
            : activeHash === `#${item.id}`;

          return (
            <li
              key={item.id}
              className={`${isSelected ? `menu_selected hoverable` : 'hoverable'}`}
            >
              <div>
                <a href={`#${item.id}`}>{item.label}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
