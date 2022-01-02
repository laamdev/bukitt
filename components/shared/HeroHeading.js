export default function HeroHeading({ children }) {
  return (
    <h1 className="flex flex-col text-5xl sm:text-6xl lg:text-9xl font-mono font-bold tracking-tighter text-white uppercase leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-primary tw-background-animate">
      {children}
    </h1>
  );
}
