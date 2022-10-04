export default function Socials(props) {
  return (
    <div className="flex flex-row items-center justify-start space-x-4">
      <Mail />
      <Twitter />
      <GitHub />
    </div>
  );
}

function Twitter() {
  return (
    <a
      target="_blank"
      href="https://www.linkedin.com/in/aditya-singh9/"
      className="text-white text-opacity-70 hover:text-opacity-90 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-linkedin"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
      </svg>
    </a>
  );
}

function GitHub() {
  return (
    <a
      target="_blank"
      href="https://github.com/aditya-singh9"
      className="text-white text-opacity-70 hover:text-opacity-90 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-github"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
  );
}

function Mail() {
  return (
    <a
      target="_blank"
      href="mailto:aditya0930singh@gmail.com"
      className="text-white text-opacity-70 hover:text-opacity-90 transition duration-300"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="feather feather-mail w-6 h-6 fill-current"
      >
        <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM24.5 10.3125L15.6625 15.8375C15.2625 16.0875 14.7375 16.0875 14.3375 15.8375L5.5 10.3125C5.37466 10.2421 5.2649 10.1471 5.17736 10.0331C5.08982 9.91906 5.02633 9.78847 4.99072 9.64921C4.95511 9.50995 4.94813 9.36492 4.9702 9.22288C4.99226 9.08085 5.04292 8.94477 5.1191 8.82288C5.19528 8.70099 5.29541 8.59582 5.41341 8.51374C5.53141 8.43167 5.66484 8.37439 5.80562 8.34537C5.9464 8.31636 6.0916 8.31621 6.23244 8.34494C6.37328 8.37366 6.50683 8.43067 6.625 8.5125L15 13.75L23.375 8.5125C23.4932 8.43067 23.6267 8.37366 23.7676 8.34494C23.9084 8.31621 24.0536 8.31636 24.1944 8.34537C24.3352 8.37439 24.4686 8.43167 24.5866 8.51374C24.7046 8.59582 24.8047 8.70099 24.8809 8.82288C24.9571 8.94477 25.0077 9.08085 25.0298 9.22288C25.0519 9.36492 25.0449 9.50995 25.0093 9.64921C24.9737 9.78847 24.9102 9.91906 24.8226 10.0331C24.7351 10.1471 24.6253 10.2421 24.5 10.3125Z" />
      </svg>

    </a>
  );
}
