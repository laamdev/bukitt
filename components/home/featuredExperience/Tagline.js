export default function Tagline({ children }) {
  return (
    <h4 className="text-sm sm:text-base font-secondary font-medium tracking-wider uppercase">
      {children}
    </h4>
  );
}
