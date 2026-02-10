const MapPreview = ({ lat, lng }) => {
  if (typeof lat !== "number" || typeof lng !== "number") return null;

  const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  const fullMapUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div className="mt-4">
      <div className="w-full h-48 rounded-lg overflow-hidden border">
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <a
        href={fullMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 hover:underline mt-2 inline-block"
      >
        📍 View on Google Maps
      </a>
    </div>
  );
};

export default MapPreview;
