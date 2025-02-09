const EventCreationIcon = () => {
    return (
      <svg
        width="37"
        height="45.18"
        viewBox="0 0 53 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_250_1170)">
          <mask
            id="mask0_250_1170"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="53"
            height="64"
          >
            <path
              d="M26.2042 0L26.2076 5.79164C26.216 20.2597 37.9404 31.9875 52.4085 32C37.9404 32.0125 26.216 43.7403 26.2076 58.2084L26.2042 64L26.2009 58.2084C26.1925 43.7403 14.4681 32.0125 0 32C14.4681 31.9875 26.1925 20.2597 26.2009 5.79164L26.2042 0Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_250_1170)">
            <rect
              width="80"
              height="65.5106"
              transform="matrix(0 1 1 0 -6.55103 -16)"
              fill="url(#paint0_linear_250_1170)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_ii_250_1170"
            x="-6"
            y="-6"
            width="62.4084"
            height="74"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-6" dy="-6" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_250_1170"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="6" dy="6" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite
              in2="hardAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_250_1170"
              result="effect2_innerShadow_250_1170"
            />
          </filter>
          <linearGradient
            id="paint0_linear_250_1170"
            x1="80"
            y1="32.7553"
            x2="0"
            y2="32.7553"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.0001" stopColor="#17171D" />
          </linearGradient>
        </defs>
      </svg>
    );
  };
  
  export default EventCreationIcon;
  