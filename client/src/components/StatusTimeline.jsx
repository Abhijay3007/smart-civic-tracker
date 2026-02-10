const steps = ["Pending", "In Progress", "Resolved"];

const StatusTimeline = ({ currentStatus }) => {
  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="flex items-center justify-between mt-4">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <div key={step} className="flex-1 flex items-center">
            {/* Circle */}
            <div
              className={`w-4 h-4 rounded-full z-10
                ${
                  isCompleted
                    ? "bg-green-500"
                    : isActive
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
            />

            {/* Label */}
            <span
              className={`ml-2 text-xs font-medium
                ${
                  isCompleted
                    ? "text-green-600"
                    : isActive
                    ? "text-blue-600"
                    : "text-gray-400"
                }`}
            >
              {step}
            </span>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2
                  ${
                    isCompleted
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatusTimeline;
