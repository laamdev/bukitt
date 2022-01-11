export default function SectionHeading({ children, modClass }) {
  return (
    <h3
      className={`mb-3 sm:mb-6 text-3xl sm:text-5xl lg:text-6xl font-medium font-mono uppercase tracking-wider ${
        modClass ? modClass : ''
      }`}
    >
      {children}
    </h3>
  );
}
