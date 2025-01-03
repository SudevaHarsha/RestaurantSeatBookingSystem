'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Seats() {
  const router = useRouter();
  
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get("https://restaurantslotbookingsystembackend.onrender.com/api/booking/seats");
        const availableTables = response.data.map((seat) => ({
          id: seat._id,
          name: seat.name,
          booked: seat.booked,
        }));
        console.log(response?.data);
        setSeats(response?.data);
      } catch (error) {
        console.error("Error fetching tables:", error);
        alert("Error fetching tables");
      }
    };

    fetchTables();
  }, []);

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedStartTime, setSelectedStartTime] = useState(new Date().toTimeString().split(' ')[0].substring(0, 5));
  const [selectedEndTime, setSelectedEndTime] = useState('');

  const isTimeOverlapping = (startTime, endTime, selectedStartTime, selectedEndTime) => {
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    const selectedStart = new Date(`1970-01-01T${selectedStartTime}:00`);
    const selectedEnd = selectedEndTime ? new Date(`1970-01-01T${selectedEndTime}:00`) : null;

    if (!selectedEndTime) return false;

    return (selectedStart < end && selectedEnd > start);
  };

  const filteredSeats = seats?.map((seat) => {
    const isBooked = seat.bookings?.some((booking) => {
      console.log(booking);
      return booking.date === selectedDate && isTimeOverlapping(booking.startTime, booking.endTime, selectedStartTime, selectedEndTime);
    });

    return { ...seat, booked: isBooked };
  });

  const handleBooking = (seatId, tableName) => {
    if (selectedDate && selectedStartTime && selectedEndTime) {
      router.push(`/booking?table=${seatId}&date=${selectedDate}&startTime=${selectedStartTime}&endTime=${selectedEndTime}`);
    } else {
      alert('Please select a date and time range first!');
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Select Your Seat</h2>
      <div className="flex gap-4 mb-6">
        {}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {}
        <input
          type="time"
          value={selectedStartTime}
          onChange={(e) => setSelectedStartTime(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {}
        <input
          type="time"
          value={selectedEndTime}
          onChange={(e) => setSelectedEndTime(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full h-[100vh] justify-items-center">
        {filteredSeats.map((seat) => (
          <div
            key={seat?._id}
            className="relative flex justify-center items-center w-full h-full"
          >
            <div
              className={`relative flex justify-center items-center w-40 h-40 sm:w-48 sm:h-48 rounded-full cursor-pointer shadow-xl transition-all duration-300 ${
                seat.booked ? 'bg-gray-400' : 'bg-yellow-200'
              }`}
              onClick={() => !seat.booked && handleBooking(seat.id, seat.name)}
            >
              {}
              <div
                className={`flex justify-center items-center w-full h-full rounded-full ${
                  seat.booked ? 'bg-gray-500' : 'bg-green-500'
                } shadow-lg`}
              >
                <span className="text-white font-semibold text-xl">{seat.name}</span>
              </div>
            </div>

            {}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mb-8">
              <div
                className={`w-10 h-10 rounded-full ${
                  seat.booked ? 'bg-gray-500' : 'bg-green-500'
                }`}
              ></div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-8">
              <div
                className={`w-10 h-10 rounded-full ${
                  seat.booked ? 'bg-gray-500' : 'bg-green-500'
                }`}
              ></div>
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-16">
              <div
                className={`w-10 h-10 rounded-full ${
                  seat.booked ? 'bg-gray-500' : 'bg-green-500'
                }`}
              ></div>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-16">
              <div
                className={`w-10 h-10 rounded-full ${
                  seat.booked ? 'bg-gray-500' : 'bg-green-500'
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full h-[100vh] justify-items-center">
        {filteredSeats.map((seat) => (
          <div
            key={seat?._id}
            className="relative flex justify-center items-center w-full h-full"
          >
            <div
              className={`relative flex justify-center items-center w-full h-24 sm:w-48 sm:h-32 lg:w-40 lg:h-40 xl:w-40 xl:h-40 rounded-lg cursor-pointer shadow-xl transition-all duration-300 ${
                seat.booked ? 'bg-gray-400' : 'bg-yellow-200'
              }`}
              onClick={() => !seat.booked && handleBooking(seat.id, seat.name)}
            >
              {}
              <div
                className={`flex justify-center items-center w-full h-full rounded-lg ${
                  seat.booked ? 'bg-gray-500' : 'bg-green-500'
                } shadow-lg`}
              >
                <span className="text-white font-semibold text-xl">{seat.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
