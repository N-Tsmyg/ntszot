interface GMBEmbedProps {
  src?: string
  title?: string
  height?: number
  className?: string
}

const PLACEHOLDER_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429156.3510674016!2d-117.10775999999998!3d32.824487899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7d50a8274cedcd%3A0xbed6a98f9233c278!2sNTSZOT!5e0!3m2!1sen!2sus!4v1783482358314!5m2!1sen!2sus"

export default function GMBEmbed({
  src = PLACEHOLDER_SRC,
  title = "NTSZOT Appliance Repair — San Diego",
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
