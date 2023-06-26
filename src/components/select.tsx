import { useState } from "react";
import IconChevronDown from "../assets/chevron-down";
import { OptionType } from "../features/select-page/select-page";

type SelectProps = {
  options: OptionType[];
  onChange: (option: OptionType) => void;
  placeholder?: string;
};

const Select = ({
  options,
  onChange,
  placeholder = "Select a option",
}: SelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<OptionType | null>(null);

  return (
    <div className="select">
      <div
        className={`select__action ${isActive ? "isActive" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        {activeOption ? activeOption.label : placeholder}
        <IconChevronDown />
      </div>
      {isActive && (
        <div className="select__list">
          {options.map((option) => {
            return (
              <div
                key={option.value}
                className="select__list__item"
                onClick={() => {
                  onChange(option);
                  setIsActive(false);
                }}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Select;
