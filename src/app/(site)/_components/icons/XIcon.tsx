interface XIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const XIcon: React.FC<XIconProps> = ({
  className = '',
  width = 39,
  height = 40,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 39 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.51023 0C2.92914 0 0.0261078 2.83552 0.0261078 6.33333V31.6667C0.0261078 35.1645 2.92914 38 6.51023 38H32.4467C36.0278 38 38.9309 35.1645 38.9309 31.6667V6.33333C38.9309 2.83552 36.0278 0 32.4467 0H6.51023ZM8.44245 8.14286H15.795L21.0163 15.3898L27.3521 8.14286H29.6678L22.062 16.8406L31.4408 29.8571H24.0901L18.0311 21.4492L10.6786 29.8571H8.36284L16.9854 19.9984L8.44245 8.14286ZM11.9885 9.95238L25.0562 28.0476H27.8948L14.8271 9.95238H11.9885Z"
      fill="currentColor"
    />
  </svg>
);

export default XIcon;
