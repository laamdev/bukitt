export default function Item({ item }) {
  return (
    <li className="cols-span-1 text-black">
      <h3 className="">Day {item.day}</h3>
      <p>{item.activity}</p>
    </li>
  );
}
