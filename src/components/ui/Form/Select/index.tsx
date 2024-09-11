import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import styles from "./index.module.css";

function Select<TForm extends FieldValues>({
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
      <label htmlFor={name}>{fieldLabel}</label>
      <select {...register(name, { required })} className={styles.select}>
        <option value="" disabled={required}>
          {required ? "Select an option" : "None"}
        </option>
        {options.map(({ value, label }) => (
          <option defaultValue="" value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      <div className={styles.error}>{error?.message}</div>
    </div>
  );
}

export default Select;
