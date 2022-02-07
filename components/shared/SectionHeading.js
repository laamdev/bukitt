export default function SectionHeading({ className, children }) {
  return (
    <h3
      className={`mb-6 text-4xl font-bold md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h3>
  );
}
