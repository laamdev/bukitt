const InputBox = ({
  children,
  id,
  name,
  type,
  placeholder,
  autoComplete,
  register,
  registerValue,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...register(`${registerValue}`)}
      className="peer h-10 w-full border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-brand-600 focus:outline-none focus:ring-0"
    >
      {children}
    </input>
  );
};

export default InputBox;
