import { useState } from "react";
import { IFormField } from "@/interfaces/IFrom";

interface FormProps {
  fields: IFormField[];
  onSubmit: (data: { [key: string]: number | string }) => void;
  onReset: () => void;
}

const Form: React.FC<FormProps> = (props) => {
  const { fields, onSubmit, onReset } = props;

  const initialState = fields.reduce((acc, field) => {
    acc[field.name] =
      field.type === "number"
        ? 0
        : field.type === "select"
        ? field.options?.[0]?.value || ""
        : "";
    return acc;
  }, {} as { [key: string]: number | string });

  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.type === "number" ? Number(value) : value,
    }));
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="text-black max-w-md" onSubmit={formSubmitHandler}>
      {fields.map((field) => (
        <div className="form-group mb-2" key={field.name}>
          <label htmlFor={field.name} className="block mb-2 text-primary">
            {field.label}
          </label>
          {field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              className="w-full p-2 rounded bg-white text-navy-blue"
              onChange={field.onChange || handleChange}
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full p-2 rounded bg-white text-navy-blue"
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      <div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Calculate
        </button>
        <input
          type="reset"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={onReset}
        />
      </div>
    </form>
  );
};

export default Form;
