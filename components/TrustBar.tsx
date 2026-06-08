export default function TrustBar() {
  return (
    <div
      className="w-full border-b"
      style={{
        backgroundColor: "#E8F4FD",
        borderColor: "#D1E3F5",
        marginTop: "64px", // header height
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <p
          className="text-center leading-snug"
          style={{ color: "#003D7A", fontSize: "13px", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
        >
          We visit Disney World multiple times a year with our toddler.{" "}
          <strong>Every stay on this site was paid out of our own pocket. No comped rooms. No sponsored content. Ever.</strong>
        </p>
      </div>
    </div>
  );
}
