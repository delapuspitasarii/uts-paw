export default function BadgeStatus({ statusVal }) {
  if (!statusVal) return null
  return (
    <span className={`badge-status badge-${String(statusVal).replace(/\s+/g, '-')}`}>
      {statusVal}
    </span>
  )
}