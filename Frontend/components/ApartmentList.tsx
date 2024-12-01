'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import ApartmentCard from './ApartmentCard'

interface Apartment {
  id: string
  title: string
  bedrooms: number
  bathrooms: number
  price: string
  currency: string
  compound: string
  size: string
  address: string
  project: string
  images: { url: string; altText: string; isCover: boolean }[]
}

export default function ApartmentList() {
  const [apartments, setApartments] = useState<Apartment[]>([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(6)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const fetchApartments = async () => {
    if (loading) return 

    setLoading(true)

    try {
      const response = await axios.get('http://localhost:5000/apartments-service/v1/apartment', {
        params: { offset, limit }
      })

      const data = response.data

      if (data && data.apartments && data.apartments.length === 0) {
        setHasMore(false)
      } else {
        setApartments((prev) => [...prev, ...data.apartments])

        if (data.apartments.length < limit) {
          setHasMore(false)
        }
      }
    } catch (error) {
      console.error('Error fetching apartments:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchApartments()
  }, [offset, limit])

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + limit)
    setLimit((prevLimit) => prevLimit + 6)
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
      {hasMore && !loading && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
      {loading && <p className="text-center">Loading...</p>}
    </div>
  )
}
