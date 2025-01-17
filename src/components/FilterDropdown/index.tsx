import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ChevronRight } from '../../assets/icons/chevronRight.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

interface DropdownOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  options: DropdownOption[];
  onSelectionChange: (selectedOptions: string[]) => void;
  label: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, onSelectionChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setDropdownWidth(rect.width+2);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerRef.current]);
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  const handleOptionClick = (value: string) => {
    const updatedSelection = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  return (
    <div className="dropdownContainer">
      <div className={`dropdownContainer_header ${isOpen ? "isOpen" : ""}`}>
        <div ref={headerRef} className="dropdownContainer_header_btn hoverable" onClick={toggleDropdown}>
          <span className="dropdownContainer_header_label">Filtre par technologie</span>
          <ChevronRight />
        </div>
        <div className="dropdownContainer_header_activeFilters">
          {
            selectedOptions.map((selectedOption) => (
              <div className="dropdownContainer_header_activeFilters_badge" onClick={() => handleOptionClick(selectedOption)}>
                {selectedOption}
                <Close />
              </div>
            ))
          }
        </div>
      </div>
      {isOpen && (
          <ul className={"dropdownContainer_dropdownList"} style={{ width: dropdownWidth }}>
            {options.map((option) => (
              <li
                key={option.value}
                className={`dropdownContainer_dropdownList_dropdownItem hoverable ${
                  selectedOptions.includes(option.value) ? "dropdownContainer_dropdownList_dropdownItem_selected" : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      
    </div>
  );
};

export default FilterDropdown;