import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { services } from "../pages/services/services";

function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [servicesArr, setServicesArr] = useState([]);
  const router = useRouter();

  const resetState = () => {
    setFullname("");
    setEmail("");
    setMessage("");
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          message: message,
        }),
      });
      toast.success("We'll be in touch shortly! 🫡", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Error: Please email fersaldiver@hotmail.com", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    resetState();
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // let isValidForm = handleValidation();

  //   const res = await fetch("http://localhost:3001/api/sendgrid", {
  //     body: JSON.stringify({
  //       email: email,
  //       fullname: fullname,
  //       message: message,
  //       subject: "hello",
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   });

  //   const { error } = await res.json();
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  //   console.log(fullname, email, message);
  // };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Let&apos;s get you back on the water as soon as possible
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="fullname"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              {/* <div className="flex justify-between">
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mt-4 mb-2">
                    Which services are you interested in?
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {services.map((service) => (
                      <div
                        className="form-check text-sm text-gray-600"
                        key={service.name}
                      >
                        <input
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value={service.name}
                          id="flexCheckDefault"
                          onChange={(e) => { servicesArr.map((checkedService) => )
                            setServicesArr((prevServicesArr) => [
                              prevServicesArr,
                              e.target.value,
                            ]);
                            console.log(servicesArr);
                          }}
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="flexCheckDefault"
                        >
                          {service.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                // type="submit"
                className="flex mx-auto text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg"
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
