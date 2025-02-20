// import React from "react";
// import { Controller } from "react-hook-form";
// import "./checkbox.css";
// const CheckBox = ({ register, name, control, dataItem, className = "" }) => {
//   return (
//     <>
//       <div className={`${className} custom_check d-flex new`}>
//         {dataItem.map((item) => {
//           return (
//             <>
//               <div className="form-group">
//                 <Controller
//                   name={item.name}
//                   {...register(item)}
//                   control={control}
//                   defaultValue={false}
//                   render={({ field }) => (
//                     <>
//                       <input
//                         type="checkbox"
//                         id={item.name}
//                         {...field}
//                         className="form-checkbox"
//                       />
//                       <label htmlFor={item.name}>{item.label}</label>
//                     </>
//                   )}
//                 />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default CheckBox;

import React from "react";
import { Controller } from "react-hook-form";
import "./checkbox.css";

const CheckBox = ({ control, name, dataItem, className = "" }) => {
  return (
    <div className={`${className} custom_check d-flex new`}>
      <Controller
        name={name}
        control={control}
        defaultValue={[]} // Default to an empty array
        render={({ field: { value, onChange } }) => (
          <>
            {dataItem.map((item) => {
              const isChecked = value.includes(item.name);

              const handleCheckboxChange = (e) => {
                const { checked } = e.target;

                if (checked) {
                  // Add the item to the selected values
                  onChange([...value, item.name]);
                } else {
                  // Remove the item from the selected values
                  onChange(value.filter((val) => val !== item.name));
                }
              };

              return (
                <div key={item.name} className="form-group">
                  <input
                    type="checkbox"
                    id={item.name}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="form-checkbox"
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

export default CheckBox;
