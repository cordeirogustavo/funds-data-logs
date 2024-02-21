interface LogoMZProps extends React.SVGProps<SVGSVGElement>{
  className?: string;
  style?: React.CSSProperties;
  width?: '25' | '64' | '100' | '200' | '1000' | 'auto' | string;
  height?: '25' | '64' | '100' | '200' | '1000' | 'auto' | string;
  stroke?: string;
  fill?: 'none'| string;
  viewBox?: string;
}

function LogoMZ({ width, height, stroke, fill, viewBox, ...props }: LogoMZProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "64"}
      height={height || "64"}
      stroke={stroke || "#fff"}
      fill={fill || "none"}
      viewBox={viewBox || "0 0 64 64"}
      {...props}
    >
      <g>
        <path
          className={props.className}
          fill="none"
          fillRule="evenodd"
          d="M32.866 42.208V21h-2.701l-8.232 13.192L13.702 21H11v21.208h3.802l-.063-13.037 6.063 9.637h2.294l5.969-9.512v12.912h3.801zm20.134 0v-3.4H41.335l11.54-16.03V21h-17.01v3.4h11.507L35.424 40.43v1.778H53z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

export default LogoMZ;