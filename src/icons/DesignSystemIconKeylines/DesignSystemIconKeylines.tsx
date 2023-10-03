/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const DesignSystemIconKeylines = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`design-system-icon-keylines ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1 1H25M1 1V25M1 1L25 25M25 1V25M25 1L1 25M25 25H1"
        stroke="#C4C4C4"
        strokeWidth="0.13"
      />
      <circle className="circle" cx="13" cy="13" r="10" stroke="#C4C4C4" strokeWidth="0.13" />
      <rect className="rect" height="16" rx="1" stroke="#C4C4C4" strokeWidth="0.13" width="20" x="3" y="5" />
      <rect className="rect" height="20" rx="1" stroke="#C4C4C4" strokeWidth="0.13" width="16" x="5" y="3" />
      <rect className="rect" height="18" rx="1" stroke="#C4C4C4" strokeWidth="0.13" width="18" x="4" y="4" />
      <circle className="circle" cx="13" cy="13" r="4" stroke="#C4C4C4" strokeWidth="0.13" />
    </svg>
  );
};
