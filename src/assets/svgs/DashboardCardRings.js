const DashboardCardRings = ({ className, ...props }) => {
  return (
    <svg
      width="82"
      height="54"
      viewBox="0 0 82 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        opacity="0.4"
        d="M43.6 1L58.4 0.999999C70.88 0.999999 81 12.64 81 27C81 41.36 70.88 53 58.4 53L43.6 53C56.08 53 65 41.36 65 27C65 12.64 56.08 0.999999 43.6 1Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.6 0.999999L43.6 0.999998C56.08 0.999998 65 12.64 65 27C65 41.36 56.08 53 43.6 53L23.6 53C11.12 53 0.999999 41.36 0.999999 27C0.999999 19.8 3.52 13.32 7.6 8.6C11.72 3.92 17.36 0.999999 23.6 0.999999Z"
        stroke="#FFAA00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.6 0.999999C27.24 0.999999 30.6 2 33.48 3.76C40.52 8.04 45 16.84 45 27C45 37.16 40.52 45.96 33.48 50.24C30.6 52 27.24 53 23.6 53C17.36 53 11.72 50.08 7.64 45.4C3.52 40.68 0.999999 34.2 0.999999 27C0.999999 19.8 3.52 13.32 7.6 8.6C11.72 3.92 17.36 0.999999 23.6 0.999999Z"
        stroke="#00FFD0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardCardRings;
