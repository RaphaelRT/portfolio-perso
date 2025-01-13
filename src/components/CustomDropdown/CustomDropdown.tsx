import React, { useState } from "react";
import { ReactComponent as ChevronRight } from '../../assets/icons/chevronRight.svg';

interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  onSelectionChange: (selectedOptions: string[]) => void;
  label: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelectionChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
      <div className="dropdownContainer_header">
        <span className="dropdownContainer_header_label">Filter by</span>
       <ChevronRight />
      </div>







      <div className="none">
        <div className={"dropdownContainer_header"} style={isOpen || selectedOptions.length > 0 ? {border: "1px solid #F5F5F5"} : {border: "none"}} onClick={toggleDropdown}>
          {selectedOptions.length > 0 ? (<span className={"selectedCount"}>{selectedOptions.length}</span>) : null}
          <span className={label} style={isOpen || selectedOptions.length > 0 ? {fontWeight: 300} : {fontWeight: 100} }>{label}</span>
          <span className={`${"chevron"} ${isOpen ? "open" : ""}`}>▼</span>
        </div>
        {isOpen && (
          <ul className={"dropdownList"}>
            {options.map((option) => (
              <li
                key={option.value}
                className={`${"dropdownItem"} ${
                  selectedOptions.includes(option.value) ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}

        </div>
      
    </div>
  );
};

export default CustomDropdown;