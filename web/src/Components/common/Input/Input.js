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

  // console.log(errors, "error");
  return (
    <div className="form_group w-100">
      {type !== "checkbox" && label?.length > 0 ? (
        <label htmlFor={id} className="input_lable">
          {label}
          {isRequired ? <span className="text-danger">*</span> : null}
        </label>
      ) : null}
      <div className="input_field_group">
        <img className="icon" src={image} />
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
          {...rest}
        />
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
