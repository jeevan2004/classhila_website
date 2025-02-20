import React from "react";
import { Controller } from "react-hook-form";
import "./radio.css";

const RadioButton = ({ control, name, dataItem, className = "" }) => {
  return (
    <div className={`${className} custom_check d-flex new`}>
      <Controller
        name={name}
        control={control}
        defaultValue="" // Default to an empty string for single selection
        render={({ field: { value, onChange } }) => (
          <>
            {dataItem.map((item) => {
              const isChecked = value === item.name;

              const handleRadioChange = (e) => {
                const { value } = e.target;
                onChange(value); // Set the selected value
              };

              return (
                <div key={item.name} className="form-group">
                  <input
                    type="radio"
                    id={item.name}
                    name={name} // Same name for radio group
                    value={item.name}
                    checked={isChecked}
                    onChange={handleRadioChange}
                    className="form-radio"
                  />
                  <label htmlFor={item.name}>{item.label}</label>
                </div>
              );
            })}
          </>
        )}
      />
    </div>
  );
};

export default RadioButton;
