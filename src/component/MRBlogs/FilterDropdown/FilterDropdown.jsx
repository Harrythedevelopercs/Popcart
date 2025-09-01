// components/FilterDropdown.js

import { useState } from 'react';

const FilterDropdown = ({ options, onFilterSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    onFilterSubmit(selectedOption);
  };

  return (
    <div className="bg-opacity-90 border-2 border-[#BFBFBF] flex justify-between mr-2xl:w-[42%] mr-md:w-[50%] mx-auto p-[4px] rounded-[10px] bg-[#F3F3F3] mb-10">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="bg-transparent focus-visible:outline-none p-2 rounded-[10px] mr-2 block"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        onClick={handleSubmit}
        className="bg-black font-semibold text-white py-3 px-14 rounded-[10px] transition-all duration-100 ease-in-out active:bg-slate-500"
      >
        Search
      </button>
    </div>
  );
};

export default FilterDropdown;