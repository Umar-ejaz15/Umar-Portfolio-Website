import React from "react";

const ClientReviews = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      rating: 5,
      review:
        "This service has been amazing. I couldn't be more satisfied with the results!",
      location: "New York, USA",
    },
    {
      name: "John Doe",
      rating: 4,
      review:
        "A great experience overall! The team was very helpful, and the product is top-notch.",
      location: "London, UK",
    },
    {
      name: "Sarah Lee",
      rating: 5,
      review:
        "Exceptional quality and customer service. I highly recommend this company!",
      location: "Sydney, Australia",
    },
    {
      name: "Michael Smith",
      rating: 3,
      review:
        "Good service, but there is room for improvement in the user interface.",
      location: "Toronto, Canada",
    },
  ];

  return (
    <div className="w-full mx-auto p-8 bg-zinc-900 text-white rounded-lg hover:border-white border-[2px] border-transparent shadow-lg transition-all duration-700">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Client Reviews
      </h2>
      <div className=" grid grid-rows-1 md:grid-cols-2 gap-4 ">
        {reviews.map((review, index) => (
          <div key={index} className=" bg-zinc-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center ">
              <div className="text-lg font-medium">{review.name}</div>
              <div className="ml-2 text-yellow-400">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
            <p className="text-gray-400">{review.review}</p>
            <div className="mt-4 text-sm text-gray-500">{review.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
