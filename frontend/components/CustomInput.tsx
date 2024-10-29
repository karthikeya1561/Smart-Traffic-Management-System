import { twMerge } from "tailwind-merge";
import "../app/globals.css";

const CustomInput = ({
  placeholder,
  className,
  labelClassName,
  type,
  divClassName,
}: any) => {
  return (
    <div className={twMerge("w-full relative", divClassName)}>
      <input
        className={twMerge(
          " pt-5 pb-2 px-3 border-2 w-full focus:bg-transparent transition-all duration-100 outline-none focus:border-black bg-gray-100 rounded-lg text-lg peer",
          className
        )}
        type={type}
        placeholder=" "
      ></input>
      <label
        className={twMerge(
          ` left-3 top-1.5 text-xs absolute  text-gray-500 font-medium transition-all duration-100 peer-focus:text-black`,
          labelClassName
        )}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default CustomInput;
