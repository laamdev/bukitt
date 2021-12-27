export default function Tagline({ children }) {
  return (
    <h4 className="text-sm sm:text-base font-medium tracking-wider uppercase">
      {children}
    </h4>
  );
}
