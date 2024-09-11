import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import styles from "./index.module.css";

function TextArea<TForm extends FieldValues>({
  name,
  label,
  error,
  register,
  required = false,
  watch,
}: {
  name: Path<TForm>;
  label: string;
  error?: FieldError;
  register: UseFormRegister<TForm>;
  required?: boolean;
  watch: UseFormWatch<TForm>;
}) {
  const charCount = watch(name)?.length;

  return (
    <div className={styles.inputContainer}>
      <label>
        <div className={styles.labelCounter}>
          <div>{label}</div>
          <div>{charCount ?? 0}/256</div>
        </div>
        <textarea
          className={styles.input}
          {...register(name, { required })}
          maxLength={256}
        />
        <div className={styles.error}>{error?.message}</div>
      </label>
    </div>
  );
}

export default TextArea;
