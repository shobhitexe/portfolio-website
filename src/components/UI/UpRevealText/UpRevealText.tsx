type UpRevealTextProps = { label: string; styles?: string; YShift?: number };

export default function UpRevealText({
  label,
  styles,
  YShift = 150,
}: UpRevealTextProps) {
  return <div className={`font-general ${styles}`}>{label}</div>;
}
