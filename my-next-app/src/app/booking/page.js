"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Booking() {
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    guests: 1,
    name: "",
    contact: "",
    table: "",
  });

  const [tables, setTables] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get(
          "https://restaurantslotbookingsystembackend.onrender.com/api/booking/seats"
        );
        const availableTables = response.data.map((seat) => ({
          id: seat._id,
          name: seat.name,
          booked: seat.booked,
        }));
        setTables(availableTables);
      } catch (error) {
        console.error("Error fetching tables:", error);
        alert("Error fetching tables");
      }
    };

    fetchTables();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://restaurantslotbookingsystembackend.onrender.com/api/booking/create", formData);
      router.push(
        `/summary?date=${formData.date}&startTime=${formData.startTime}&endTime=${formData.endTime}&guests=${formData.guests}&name=${formData.name}&contact=${formData.contact}&table=${formData.table}`
      );
    } catch (error) {
      console.log(error);
      alert("Error creating booking");
    }
  };

  return (
    <div className="h-[100vh] md:min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-[100vh] md:h-full flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book a Table</h2>

        <label className="block mb-2 text-sm text-gray-600">Date</label>
        <input
          type="date"
          name="date"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
          required
        />

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-2 text-sm text-gray-600">
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2 text-sm text-gray-600">End Time</label>
            <input
              type="time"
              name="endTime"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label className="block mb-2 text-sm text-gray-600">
          Number of Guests
        </label>
        <input
          type="number"
          name="guests"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          min="1"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-sm text-gray-600">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-sm text-gray-600">Contact</label>
        <input
          type="text"
          name="contact"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-sm text-gray-600">Table</label>
        <select
          name="table"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          onChange={handleChange}
          required
        >
          <option value="">Select a Table</option>
          {tables.map((table) => (
            <option key={table.id} value={table.id}>
              {table.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
