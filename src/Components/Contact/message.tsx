import { Fade } from "react-awesome-reveal";

function message() {
  return (
    <span
      className={`px-10 py-6 bg-forth-400 absolute z-10 -bottom-36 left-1/2 text-white -translate-x-1/2  text-4xl rounded-2xl transition-all duration-300 `}
    >
      <Fade>Your Message Succesfully Sent</Fade>
    </span>
  );
}

export default message;
