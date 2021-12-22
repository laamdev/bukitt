export default function HeroTagline({ children }) {
  return (
    <h2 className="font-secondary text-base sm:text-xl uppercase font-medium tracking-widest">
      {children}
    </h2>
  );
}
