import "./input.css";

const CustomInput = (props) => {
  const {
    label,
    register,
    name,
    bgColor = "bg_grey",
    style,
    id,
    type,
    errors,
    validation,
    image,
    className = "",
    min,
    max,
    step,
    rows,
    cols,
    placeholder,
    disabled = false,
    onChange,
    onKeyPress,
    onKeyDown,
    isRequired,
    options = [], // for select dropdown
    ...rest
  } = props;

  const textareaProps = {
    as: type,
    rows: rows,
    cols: cols,
  };

  const textareaFieldProps = type === "textarea" ? { ...textareaProps } : null;

  const numberProps = {
    min: min,
    max: max,
    step: step,
  };

  const numberFieldProps = type === "number" ? { ...numberProps } : null;

  return (
    <div className="form_group w-100">
      {type !== "checkbox" && label?.length > 0 ? (
        <label htmlFor={id} className="input_lable">
          {label}
          {isRequired ? <span className="text-danger">*</span> : null}
        </label>
      ) : null}

      <div className="input_field_group">
        {image && <img className="icon" src={image} alt="icon" />}

        {type === "select" ? (
          <select
            {...register(name, validation)}
            name={name}
            id={id}
            className={`${bgColor} w-100 d-block custom_input ${className}`}
            style={style}
            disabled={disabled}
            onChange={onChange}
            {...rest}
          >
            {options.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...register(name, validation)}
            name={name}
            id={id}
            {...textareaFieldProps}
            {...numberFieldProps}
            type={type}
            className={`${bgColor} ${
              type !== "checkbox"
                ? "w-100 d-block custom_input "
                : "custom_checkbox "
            } ${image ? "p_left" : ""} ${className}`}
            style={style}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="off"
            onChange={onChange}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            {...rest}
          />
        )}
      </div>

      {type === "checkbox" ? (
        <label className="checkbox_lable" htmlFor={id}>
          {label}
        </label>
      ) : null}

      <span style={{ color: "red", fontSize: "16px" }}>{errors?.message}</span>
    </div>
  );
};

export default CustomInput;
