import { ReactNode } from "react";

type InputFieldProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  textarea?: boolean;
  rows?: number;
  type?: "text" | "email" | "number";
  icon?: ReactNode;
  readonly?: boolean;
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  textarea = false,
  type = "text",
  icon,
  readonly = true,
}: InputFieldProps) => {
  return (
    <div
      className="mb-4 border  rounded-lg py-2 px-4"
      style={{ borderColor: "var(--color-InputBorder)" }}
    >
      {label && (
        <label htmlFor={name} className="block mb-1 text-label text-lg">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
          // className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {icon}
          </div>
        )}

        {textarea ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readonly}
            className={`w-full ${
              icon ? "pl-10" : ""
            } resize-none focus:outline-none`}
            rows={4}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readonly}
            className={`w-full ${icon ? "pl-10" : ""} focus:outline-none`}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
