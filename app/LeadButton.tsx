"use client";

export default function LeadButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
  };

  return (
    <button
      type="submit"
      className="aae__btn aae__btn--primary"
      style={{ width: "100%" }}
      onClick={handleClick}
    >
      Get My Quote
    </button>
  );
}
