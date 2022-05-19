import { Controller } from "react-hook-form";
import { TextField, FormHelperText } from "@mui/material";

const FormTextField = (props) => {
  const {
    name,
    control,
    rules,
    defaultValue,
    label,
    onChange,
    variant,
    size,
    register,
    error,
  } = props;
  return (
    <>
      <Controller
        render={(newProps) => {
          return (
            <TextField
              {...newProps}
              {...props}
              label={label}
              variant={variant || "outlined"}
              size={size || "medium"}
              error={error[name] ? true : false}
              onChange={onChange}
            />
          );
        }}
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        register={register}
      />
      <FormHelperText error={true}>{error[name]?.message}</FormHelperText>
    </>
  );
};

export default FormTextField;
