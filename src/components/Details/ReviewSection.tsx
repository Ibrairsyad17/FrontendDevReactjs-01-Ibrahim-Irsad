import { Restaurant } from "@/types/interfaces";
import { StarIcon } from "lucide-react";

interface ReviewSectionProps {
  restaurant: Restaurant;
}

const ReviewSection = ({ restaurant }: ReviewSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-900">Ulasan Pengunjung</h2>
      <div className="flex flex-col gap-4">
        {restaurant?.reviews.map((review) => (
          <div key={review.id} className="flex flex-col gap-2">
            <div className="flex gap-2">
              {review.images.map((img, i) => (
                <img
                  key={i}
                  className="h-24 w-24 rounded-md"
                  src={img}
                  alt={review.name}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 items-start">
              <span>Username: {review.name}</span>
              <div className="flex gap-2">
                {" "}
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(review?.rating || 0)
                        ? "text-blue-900 fill-blue-900"
                        : "text-blue-900"
                    }`}
                  />
                ))}
              </div>

              <span>Comment: {review.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
