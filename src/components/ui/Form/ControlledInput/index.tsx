import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import styles from "./index.module.css";
import { HTMLInputTypeAttribute } from "react";

function ControlledInput<TForm extends FieldValues>({
  name,
  label,
  error,
  type = "text",
  required = false,
  register,
}: {
  name: Path<TForm>;
  label: string;
  error?: FieldError;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<TForm>;
  required?: boolean;
}) {
  return (
    <div className={styles.inputContainer}>
      <label>
        {label}
        <input
          type={type}
          className={styles.input}
          {...register(name, { required })}
        />
        <div className={styles.error}>{error?.message}</div>
      </label>
    </div>
  );
}

export default ControlledInput;
