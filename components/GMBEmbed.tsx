interface GMBEmbedProps {
  src?: string
  title?: string
  height?: number
  className?: string
}

const PLACEHOLDER_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428429.51826201874!2d-117.1029435!3d32.97461534999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab19259a3d9bbe95%3A0xee900594a1c1e65d!2sWNDW%20Appliance%20Repair!5e0!3m2!1sen!2sus!4v1774838391463!5m2!1sen!2sus"

export default function GMBEmbed({
  src = PLACEHOLDER_SRC,
  title = "WNDW Appliance Repair — San Diego",
  height = 300,
  className = "",
}: GMBEmbedProps) {
  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-gray-200 ${className}`}
      style={{ height }}
    >
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
