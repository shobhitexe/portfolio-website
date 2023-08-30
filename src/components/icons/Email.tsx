import { SVGProps } from "react";

export default function Email(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
      color="white"
      {...props}
    >
      <path fill="currentColor" d="m224 56l-96 88l-96-88Z" opacity=".2"></path>
      <path
        fill="currentColor"
        d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-20.6 16L128 133.1L52.6 64ZM216 192H40V74.2l82.6 75.7a8 8 0 0 0 10.8 0L216 74.2V192Z"
      ></path>
    </svg>
  );
}
