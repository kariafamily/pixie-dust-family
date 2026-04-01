interface RatingStarsProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

export default function RatingStars({ rating, max = 5, size = "md" }: RatingStarsProps) {
  const sizeClasses = { sm: "w-3 h-3", md: "w-5 h-5", lg: "w-6 h-6" };
  const cls = sizeClasses[size];

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={cls}
          >
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="#0072CE" />
                    <stop offset="50%" stopColor="#D1E3F5" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#half-${i})`}
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </>
            ) : (
              <path
                fill={filled ? "#0072CE" : "#D1E3F5"}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}
