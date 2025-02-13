const DiscoveryIcon = () => {
    return (
        <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#a)">
          <mask
            id="b"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="32"
            height="32"
          >
            <path
              d="M14.308 1.178c.581-1.57 2.803-1.57 3.384 0l3.259 8.806a1.8 1.8 0 0 0 1.066 1.065l8.805 3.26c1.57.58 1.57 2.802 0 3.383l-8.805 3.259a1.8 1.8 0 0 0-1.066 1.066l-3.26 8.805c-.58 1.57-2.802 1.57-3.383 0l-3.259-8.805a1.8 1.8 0 0 0-1.065-1.066l-8.806-3.26c-1.57-.58-1.57-2.802 0-3.383l8.806-3.259a1.8 1.8 0 0 0 1.065-1.065z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#b)">
            <path fill="url(#c)" d="M0-5.953h38.08v38.08H0z" />
          </g>
        </g>
        <defs>
          <linearGradient
            id="c"
            x1="-6.667"
            y1="-26.667"
            x2="10"
            y2="13.333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" />
          </linearGradient>
          <filter
            id="a"
            x="-6"
            y="-6"
            width="42"
            height="42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-6" dy="-6" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend in2="shape" result="effect1_innerShadow_194_45" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="6" dy="6" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend in2="effect1_innerShadow_194_45" result="effect2_innerShadow_194_45" />
          </filter>
        </defs>
      </svg>
      
    )
}
export default DiscoveryIcon;