import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import styles from "./index.module.css";
import { Fragment } from "react";

function RadioGroup<TForm extends FieldValues>({
  name,
  options,
  error,
  required = false,
  fieldLabel,
  register,
}: {
  name: Path<TForm>;
  options: { value: string; label: string }[];
  error?: FieldError;
  register: UseFormRegister<TForm>;
  fieldLabel: string;
  required?: boolean;
}) {
  return (
    <div className={styles.inputContainer}>
      <label>{fieldLabel}</label>
      <div className={styles.radio}>
        {options.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              type="radio"
              id={value}
              value={value}
              {...register(name, { required })}
            />
            <label htmlFor={value}>{label}</label>
          </Fragment>
        ))}
      </div>
      <div className={styles.error}>{error?.message}</div>
    </div>
  );
}

export default RadioGroup;
