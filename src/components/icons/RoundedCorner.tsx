import { SVGProps } from "react";

export default function RoundedCorner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path d="m100,0H0v100C0,24,24,0,100,0Z" fill="#2a2c2d"></path>
    </svg>
  );
}
