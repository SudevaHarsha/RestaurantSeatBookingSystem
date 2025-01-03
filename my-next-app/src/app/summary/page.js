"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

// Summary page component
function SummaryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const date = searchParams.get('date');
    const startTime = searchParams.get('startTime');
    const endTime = searchParams.get('endTime');
    const guests = searchParams.get('guests');
    const name = searchParams.get('name');
    const contact = searchParams.get('contact');
    const table = searchParams.get('table');

    if (date && startTime && endTime && guests && name && contact && table) {
      setBookingDetails({ date, startTime, endTime, guests, name, contact, table });
    }
  }, [searchParams]);

  if (!bookingDetails) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading booking details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Confirmed</h2>
        <p className="text-gray-600 mb-4">Thank you for your reservation, {bookingDetails.name}!</p>
        <p className="text-gray-600 mb-2">Date: {bookingDetails.date}</p>
        <p className="text-gray-600 mb-2">Start Time: {bookingDetails.startTime}</p>
        <p className="text-gray-600 mb-2">End Time: {bookingDetails.endTime}</p>
        <p className="text-gray-600 mb-2">Guests: {bookingDetails.guests}</p>
        <p className="text-gray-600 mb-2">Table: {bookingDetails.table}</p>
        <p className="text-gray-600 mb-6">Contact: {bookingDetails.contact}</p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

// Wrapping the Summary page with Suspense
export default function Summary() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SummaryContent />
    </Suspense>
  );
}
