import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faStream, faArrowLeft, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

interface DropdownMenuProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ parentRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, positionAbove: false });

  const toggleMenu = () => {
    if (!isOpen && buttonRef.current && parentRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();
      const menuHeight = 200;

      const positionAbove = window.innerHeight - buttonRect.bottom < menuHeight;
      const top =  buttonRect.bottom - parentRect.top;

      setMenuPosition({
        top: top,
        left: buttonRect.left - parentRect.left,
        positionAbove: positionAbove,
      });
    }
    setIsOpen(!isOpen);
    setIsSubMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setIsSubMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const mainMenuItems = [
    { icon: faEyeSlash, label: 'Hide', action: () => setIsSubMenuOpen(true) },
    { icon: faStream, label: 'Improve my feed', action: () => setIsOpen(false) }
  ];

  const subMenuItems = [
    "I'm not interested in this author",
    "I'm not interested in this topic",
    "I've seen too many posts on this topic",
    "The information is incorrect",
    "I've seen this post before",
    "Other reasons"
  ];

  return (
    <div className="dropdown-menu">
      <button className="more-actions" onClick={toggleMenu} ref={buttonRef}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
      {isOpen && (
        <div className="menu" ref={menuRef} style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px`, position: 'absolute', width: isSubMenuOpen ? '290px' : '190px' }}>
          {!isSubMenuOpen ? (
            mainMenuItems.map((item, index) => (
              <div className="menu-item" onClick={item.action} key={index}>
                <FontAwesomeIcon icon={item.icon} className="menu-item-icon" />
                <span className="menu-item-label">{item.label}</span>
              </div>
            ))
          ) : (
            <div>
              <div className="menu-header" onClick={() => setIsSubMenuOpen(false)}>
                <FontAwesomeIcon icon={faArrowLeft} className="menu-item-icon" />
                <span className="menu-item-label">Tell us why:</span>
              </div>
              {subMenuItems.map((item, index) => (
                <div className="menu-item" key={index}>
                  <input type="radio" id={`option-${index}`} name="feedback" />
                  <label htmlFor={`option-${index}`} className="menu-item-label">{item}</label>
                </div>
              ))}
              <button className="menu-submit">Hide content</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
