export default function HeroHeading({ children }) {
  return (
    <h1 className="text-4xl sm:text-7xl font-primary uppercase font-bold text-left sm:text-center break-words">
      {children}
    </h1>
  );
}
