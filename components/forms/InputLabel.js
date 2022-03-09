const InputLabel = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
    >
      {children}
    </label>
  );
};

export default InputLabel;
