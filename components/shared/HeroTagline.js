export default function HeroTagline({ children }) {
  return (
    <h2 className="text-sm sm:text-base font-medium tracking-wider uppercase">
      {children}
    </h2>
  );
}
