export default function HeroHeading({ children }) {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-primary text-white">
      {children}
    </h1>
  );
}
