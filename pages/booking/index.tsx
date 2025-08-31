import React from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format",
    rating: 4.76,
    reviewsCount: 345,
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-6xl p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <BookingForm />
          <OrderSummary bookingDetails={bookingDetails} currency="ZAR" />
        </div>

        <CancellationPolicy startDate={bookingDetails.startDate} />
      </div>
    </main>
  );
}
