import Link from "next/link";
import Image from "next/image";

interface ApartmentCardProps {
  apartment: {
    id: string;
    title: string;
    bedrooms: number;
    bathrooms: number;
    price: string;
    currency: string;
    compound: string;
    size: string;
    address: string;
    project: string;
    images: { url: string; altText: string; isCover: boolean }[];
  };
}

export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  const coverImage =
    apartment.images.length > 0
      ? apartment.images.find((img) => img.isCover) || apartment.images[0]
      : {
          url: "/assets/no-image.jpg",
          isCover: true,
          altText: "No image available",
        };

  return (
    <Link href={`/apartment/${apartment.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Cover Image */}
        <div className="relative h-48">
          <Image
            src={coverImage.url}
            alt={coverImage.altText}
            fill
            className="object-cover"
          />
        </div>
        {/* Apartment Details */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{apartment.title}</h2>
          <p className="text-gray-600 mb-2">{apartment.compound}</p>
          <p className="text-gray-800 font-bold mb-2">
            {apartment.price} {apartment.currency}
          </p>
          <div className="flex justify-between text-sm text-gray-600 items-center">
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10H3M21 16H3m18-6v6M3 10v6"
                />
              </svg>
              {apartment.bedrooms} beds
            </span>
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 17v4m8-4v4M12 9V5a4 4 0 00-8 0v4m16 0a4 4 0 10-8 0m2 0H6"
                />
              </svg>
              {apartment.bathrooms} baths
            </span>
            <span className="flex items-center gap-1">{apartment.size} m²</span>
          </div>
        </div>
        <div className="p-4 text-gray-600 text-sm">
          <p>Address: {apartment.address}</p>
        </div>
      </div>
    </Link>
  );
}
