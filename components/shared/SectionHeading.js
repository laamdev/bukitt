export default function SectionHeading({ passedClassName, children }) {
  return (
    <h3
      className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-12 ${passedClassName}`}
    >
      {children}
    </h3>
  );
}
