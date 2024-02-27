import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight, faAngleDown, faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  label: string;
  icon: IconDefinition;
  to: string;
  subItems?: MenuItem[];
}

interface SidebarProps {
  menuItems: MenuItem[];
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, collapsed, toggleCollapsed }) => {
  const [expandedSubmenuIndex, setExpandedSubmenuIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    if (expandedSubmenuIndex === index) {
      setExpandedSubmenuIndex(null); // Collapse submenu if already expanded
    } else {
      setExpandedSubmenuIndex(index); // Expand submenu
    }
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleCollapsed}>
        <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronLeft} />
      </button>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link to={menuItem.to}>
              <FontAwesomeIcon icon={menuItem.icon} />
              <span>{menuItem.label}</span>
            </Link>
            {menuItem.subItems && (
              <React.Fragment>
                <button className="submenu-toggle" onClick={() => toggleSubmenu(index)}>
                  <FontAwesomeIcon icon={expandedSubmenuIndex === index ? faAngleUp : faAngleDown} />
                </button>
                <ul className={`submenu ${expandedSubmenuIndex === index ? 'expanded' : 'collapsed'}`}>
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.to}>
                        <FontAwesomeIcon icon={subItem.icon} />
                        <span>{subItem.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
