"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewList() {
  const [showReview, setShowReview] = useState(true);
  const reviews = [
    {
      name: "Sarah Johnson",
      timeAgo: "2 days ago",
      reviewText:
        "I've been using this product for a few weeks now and it's been a game-changer. The quality is excellent and it's so easy to use. Highly recommend!",
      avatarSrc: "/placeholder-user.jpg",
      avatarAlt: "@shadcn",
      avatarFallback: "CN",
    },
    {
      name: "John Doe",
      timeAgo: "1 week ago",
      reviewText:
        "I was a bit skeptical at first, but this product has exceeded my expectations. The customer service is also top-notch. Highly recommended!",
      avatarSrc: "/placeholder-user.jpg",
      avatarAlt: "@shadcn",
      avatarFallback: "JD",
    },
    {
      name: "Emily Parker",
      timeAgo: "3 days ago",
      reviewText:
        "I'm really impressed with this product. The design is sleek and modern, and it's been working flawlessly. Definitely worth the investment.",
      avatarSrc: "/placeholder-user.jpg",
      avatarAlt: "@shadcn",
      avatarFallback: "EM",
    },
  ];
  return (
    <>
      <div className="w-full max-w-2xl mx-auto space-y-6 mt-3">
        <Button
          variant="outline"
          onClick={() => setShowReview((prev) => !prev)}
        >
          {showReview ? "Hide review" : "Show review"}
        </Button>
      </div>
      {showReview && (
        <div className="w-full max-w-2xl mx-auto space-y-6">
          <div className="flex flex-col gap-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                avatarFallback={review.avatarFallback}
                name={review.name}
                date={review.date}
                reviewText={review.reviewText}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
