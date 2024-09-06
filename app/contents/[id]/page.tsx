import Link from "next/link";

interface City {
  id: string;
  name: string;
}
const getCity = async (id: string) => {
  const response = await fetch(`http://localhost:3001/cities/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch city data");
  }

  const city: City = await response.json();
  return city;
};

export default async function Content({ params }: { params: { id: string } }) {
  const city = await getCity(params.id);
  return (
    <div>
      <h1>Content Detail</h1>
      <p>{city.name}</p>
      <Link href={"/"}>top</Link>
    </div>
  );
}
