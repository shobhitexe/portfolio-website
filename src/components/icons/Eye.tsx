"use client";

import { SVGProps } from "react";

export default function Eye(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M247.3 124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6 61.3 162.9 48 128 48S61.4 61.3 36.3 86.3C17.5 105.2 9 124 8.7 124.8a7.9 7.9 0 0 0 0 6.4c.3.8 8.8 19.6 27.6 38.5c25.1 25 56.8 38.3 91.7 38.3s66.6-13.3 91.7-38.3c18.8-18.9 27.3-37.7 27.6-38.5a7.9 7.9 0 0 0 0-6.4ZM128 192c-30.8 0-57.7-11.2-79.9-33.3A130.3 130.3 0 0 1 25 128a130.3 130.3 0 0 1 23.1-30.8C70.3 75.2 97.2 64 128 64s57.7 11.2 79.9 33.2A130.3 130.3 0 0 1 231 128c-7.2 13.5-38.6 64-103 64Zm0-112a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Z"
      ></path>
    </svg>
  );
}
