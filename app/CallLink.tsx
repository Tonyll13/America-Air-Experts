"use client";

type Props = {
  phone: string;
  className?: string;
};

export default function CallLink({ phone, className }: Props) {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact");
    }
  };

  return (
    <a
      href={`tel:${phone}`}
      onClick={handleClick}
      className={className}
    >
      Call Now
    </a>
  );
}
