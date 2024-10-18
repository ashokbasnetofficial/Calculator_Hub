import React, { useState, useEffect } from "react";

interface RadioButtonProps {
  onSubmit: (type: string) => void;
  selectedType: string;
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const [selected, setSelected] = useState(props.selectedType);

  const selectedChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelected(newValue);
    props.onSubmit(newValue);
  };

  useEffect(() => {
    setSelected(props.selectedType);
  }, [props.selectedType]);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
      <div className="relative inline-block cursor-pointer">
        <input
          type="radio"
          className="absolute opacity-0 w-0 h-0"
          id="bs"
          name="radio-group"
          value="bs"
          checked={selected === "bs"}
          onChange={selectedChangeHandler}
        />
        <label
          htmlFor="bs"
          className={`inline-block pl-7 mb-2 relative text-sm sm:text-base font-semibold uppercase cursor-pointer transition-all duration-300 ease-in-out 
          ${selected === "bs" ? "text-[#4c8bf5]" : "text-primary"}`}
        >
          <span
            className={`absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all duration-300 ease-in-out 
            ${
              selected === "bs"
                ? "bg-[#4c8bf5] border-transparent transform scale-90 shadow-[0_0_20px_rgba(76,139,245,0.5)]"
                : "border-gray-700"
            }`}
          ></span>
          Convert English to Nepali (BS)
        </label>
      </div>

      <div className="relative inline-block cursor-pointer">
        <input
          type="radio"
          className="absolute opacity-0 w-0 h-0"
          id="ad"
          name="radio-group"
          value="ad"
          checked={selected === "ad"}
          onChange={selectedChangeHandler}
        />
        <label
          htmlFor="ad"
          className={`inline-block pl-7 mb-2 relative text-sm sm:text-base font-semibold uppercase cursor-pointer transition-all duration-300 ease-in-out 
          ${selected === "ad" ? "text-[#4c8bf5]" : "text-primary"}`}
        >
          <span
            className={`absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all duration-300 ease-in-out 
            ${
              selected === "ad"
                ? "bg-[#4c8bf5] border-transparent transform scale-90 shadow-[0_0_20px_rgba(76,139,245,0.5)]"
                : "border-gray-700"
            }`}
          ></span>
          Convert Nepali to English (AD)
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
