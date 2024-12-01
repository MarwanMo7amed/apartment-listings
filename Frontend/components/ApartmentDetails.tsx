'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

interface ApartmentDetails {
  id: string
  title: string
  bedrooms: number
  bathrooms: number
  price: string
  currency: string
  compound: string
  size: string
  description: string
  propertyType: string
  images: { url: string; altText: string; isCover: boolean }[]
  location: string
  project: string
  sellerContact: string
  address: string
  developerId: { name: string }
}

export default function ApartmentDetails({ id }: { id: string }) {
  const [apartmentDetails, setApartmentDetails] = useState<ApartmentDetails | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string>('') // State for selected image

  useEffect(() => {
    const fetchApartmentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/apartments-service/v1/apartment/${id}`)
        setApartmentDetails(response.data) 
        if (response.data.images.length > 0) {
          setSelectedImage(response.data.images[0].url) 
        }
      } catch (err) {
        setError('Failed to fetch apartment details') 
        console.error(err)
      }
    }

    fetchApartmentDetails()
  }, [id])


  const handleImageClick = (url: string) => {
    setSelectedImage(url)
  }

  if (error) return <div>Error fetching apartment details: {error}</div>
  if (!apartmentDetails) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{apartmentDetails.title}</h1>
      <p className="text-gray-600 mb-4">
        <strong>By:</strong> {apartmentDetails.developerId?.name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-96 mb-4">
            <Image
              src={selectedImage || apartmentDetails.images[0].url}
              alt="Apartment cover image"
              className="rounded-lg object-cover"
              fill
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {apartmentDetails.images.map((image, index) => (
              <div key={index} className="relative h-24">
                <Image
                  src={image.url}
                  alt={image.altText}
                  fill
                  className="rounded-lg cursor-pointer object-cover"
                  priority
                  onClick={() => handleImageClick(image.url)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-600 mb-4">{apartmentDetails.compound}</p>
          <p className="text-2xl font-bold mb-4">
            {apartmentDetails.price} {apartmentDetails.currency}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-semibold">Bedrooms</p>
              <p>{apartmentDetails.bedrooms}</p>
            </div>
            <div>
              <p className="font-semibold">Bathrooms</p>
              <p>{apartmentDetails.bathrooms}</p>
            </div>
            <div>
              <p className="font-semibold">Size</p>
              <p>{apartmentDetails.size}</p>
            </div>
            <div>
              <p className="font-semibold">Type</p>
              <p>{apartmentDetails.propertyType}</p>
            </div>
            <div>
              <p className="font-semibold">Project</p>
              <p>{apartmentDetails.project || 'N/A'}</p>
            </div>
            <div>
              <p className="font-semibold">Seller Contact</p>
              <p>{apartmentDetails.sellerContact}</p>
            </div>
          </div>
          <p className="font-semibold mb-2">Description</p>
          <p className="text-gray-700 mb-6">{apartmentDetails.description}</p>
          <p className="font-semibold mb-2">Address</p>
          <p className="text-gray-700 mb-6">{apartmentDetails.address}</p>
          <p className="font-semibold mb-2">Location</p>
          <a
            href={apartmentDetails.location}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on Maps
          </a>
        </div>
      </div>
    </div>
  )
}
