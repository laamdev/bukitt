export default function SectionHeading({ passedClassName, children }) {
  return (
    <h3
      className={`mb-6 text-4xl md:text-5xl lg:text-6xl font-bold ${passedClassName}`}
    >
      {children}
    </h3>
  );
}
