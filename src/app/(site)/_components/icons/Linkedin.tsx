interface LinkedInIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = '', width = 39, height = 40 }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 39 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M35.1826 0.649414H3.51826C1.57442 0.649414 0 2.22384 0 4.16768V35.8321C0 37.7759 1.57442 39.3503 3.51826 39.3503H35.1826C37.1265 39.3503 38.7009 37.7759 38.7009 35.8321V4.16768C38.7009 2.22384 37.1265 0.649414 35.1826 0.649414ZM12.233 32.3138H7.04357V15.6161H12.233V32.3138ZM9.58551 13.229C7.91258 13.229 6.5598 11.8727 6.5598 10.2033C6.5598 8.53384 7.91434 7.17931 9.58551 7.17931C11.2532 7.17931 12.6095 8.5356 12.6095 10.2033C12.6095 11.8727 11.2532 13.229 9.58551 13.229ZM31.6714 32.3138H26.4855V24.1936C26.4855 22.2568 26.4503 19.7659 23.7887 19.7659C21.0885 19.7659 20.6733 21.8751 20.6733 24.0529V32.3138H15.4874V15.6161H20.4657V17.8977H20.5361C21.2292 16.5854 22.9215 15.201 25.4458 15.201C30.7004 15.201 31.6714 18.6594 31.6714 23.1558V32.3138Z"
      fill="currentColor"
    />
  </svg>
);

export default LinkedInIcon;
