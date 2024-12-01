import ApartmentDetails from "../../../components/ApartmentDetails";

export default function Page({ params }: { params: { id: string } }) {
  return <ApartmentDetails id={params.id} />
}
