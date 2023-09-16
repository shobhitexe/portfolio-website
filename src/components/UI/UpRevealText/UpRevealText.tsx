type UpRevealTextProps = { label: string; styles?: string };

export default function UpRevealText({ label, styles }: UpRevealTextProps) {
  return <div className={`font-general ${styles}`}>{label}</div>;
}
