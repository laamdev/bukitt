export default function Title({ children }) {
  return (
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary text-white">
      {children}
    </h3>
  );
}