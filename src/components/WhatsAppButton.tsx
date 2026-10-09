type WhatsAppButtonProps = {
  productName: string;
  iconOnly?: boolean;
};

export default function WhatsAppButton({
  productName,
  iconOnly = false,
}: WhatsAppButtonProps) {
  const message = `Hello NILE VALLEY, I'm interested in ${productName}. Please send me your price, available quantities, and export specifications.`;

  const whatsappUrl = `https://wa.me/201028403853?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button${iconOnly ? " whatsapp-icon-only" : ""}`}
      aria-label={`Chat on WhatsApp about ${productName}`}
      title={`Chat about ${productName} on WhatsApp`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98.99-3.65-.24-.37a9.85 9.85 0 1 1 8.39 4.63Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      {!iconOnly && <span>To chat on WhatsApp</span>}
    </a>
  );
}