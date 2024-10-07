import "./styles.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { object, string } from "yup";

import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

const validationSchema = object().shape({
  name: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
  message: string().required("Required"),
});

function Contact() {
  const form = useRef(null);
  const [sendResult, setSendResult] = useState(false);

  const handleSubmit = (
    _values: { name: string; email: string; message: string },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    emailjs
      .sendForm(
        import.meta.env.REACT_APP_SERVICE_ID,
        import.meta.env.REACT_APP_TEMPLATE_ID,
        // form.current,
        import.meta.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setSendResult(true);
      setSubmitting(false);
    }, 2000);
    setTimeout(() => {
      setSendResult(false);
    }, 5000);
  };
  return (
    <div className="container relative mb-16 pt-24" id="contact">
      <div className="md:px-24 p-6 py-6 shadow-2xl">
        <h3 className="text-4xl text-shadows-100 text-center pb-12 relative">
          Contact Me
        </h3>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form ref={form}>
              <div className="relative mb-16">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="name"
                  component="label"
                  className="absolute -bottom-6 left-0 font-bold text-forth-200"
                />
                <label htmlFor="name" className="label labelname"></label>
              </div>

              <div className="relative mb-16">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="email"
                  component="label"
                  className="absolute -bottom-6 left-0 font-bold text-forth-200"
                />
                <label htmlFor="email" className="label labelmail"></label>
              </div>

              <div className="relative">
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="input h-56"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="message"
                  component="label"
                  className="absolute -bottom-6 left-0 font-bold text-forth-200"
                />
                <label htmlFor="message" className="label labelsubject"></label>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 mt-12 ${
                    isSubmitting
                      ? "bg-forth-400 hover:bg-forth-400 text-white hover:scale-100"
                      : "bg-onecolor-200"
                  } rounded-xl font-bold tracking-wider hover:bg-main hover:text-white hover:scale-110 hover:tracking-widest transition-all duration-300`}
                >
                  {isSubmitting ? "Message Sending..." : "Send Message"}
                </button>
              </div>
              {sendResult ? (
                <span
                  className={`px-10 py-6 bg-forth-400 absolute z-10 -bottom-36 left-1/2 text-white -translate-x-1/2 whitespace-nowrap  md:text-4xl text-2xl rounded-2xl transition-all duration-300 `}
                >
                  <Fade>Your Message Succesfully Sent</Fade>
                </span>
              ) : (
                ""
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
