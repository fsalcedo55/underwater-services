import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/router"

function Contact() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [service, setService] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  console.log(
    { fullname },
    { email },
    { message },
    { phoneNumber },
    { service }
  )

  const resetState = () => {
    setFullname("")
    setEmail("")
    setMessage("")
    setPhoneNumber("")
    setService("")
    router.push("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
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
          phoneNumber: phoneNumber,
          service: service,
        }),
      })
    } catch (error) {
      toast.error("Error: Please email seamastermarinerepair@gmail.com", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsLoading(false)
    toast.success("We'll be in touch shortly! 🫡", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    resetState()
  }

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
    <section className="relative text-gray-600 bg-white body-font">
      <div className="md:h-24"></div>
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-6xl font-bold text-gray-800 title-font">
            Contact Us
          </h1>
          <p className="mx-auto text-lg leading-relaxed lg:w-2/3">
            Let&apos;s get you back on the water as soon as possible
          </p>
        </div>
        <div className="mx-auto lg:w-1/2 md:w-2/3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-wrap -m-2 sm:flex-row"
          >
            <div className="p-2 sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="fullname"
                  className="text-sm leading-7 text-gray-600"
                >
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full h-12 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-200 bg-opacity-50 border-2 border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="p-2 sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-600"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-200 bg-opacity-50 border-2 border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="p-2 sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm leading-7 text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full h-12 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-200 bg-opacity-50 border-2 border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="p-2 sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="service"
                  className="text-sm leading-7 text-gray-600"
                >
                  Which service are you interested in?
                </label>

                <select
                  required
                  type="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full h-12 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-200 bg-opacity-50 border-2 border-gray-300 rounded-lg outline-none focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                >
                  <option></option>
                  <option value="Propellers">Propellers</option>
                  <option value="Hull Cleaning">Hull Cleaning</option>
                  <option value="Underwater Inspections">
                    Underwater Inspections
                  </option>
                  <option value="Cathodic Protection">
                    Cathodic Protection
                  </option>
                  <option value="SeaWall Maintenance">
                    Seawall Maintenance
                  </option>
                  <option value="Docks and Pilings">Docks and Pilings</option>
                </select>
              </div>
            </div>
            <div className="w-full p-2">
              {/* <div className="flex justify-between">
                <div className="mb-4">
                  <div className="mt-4 mb-2 text-sm text-gray-600">
                    Which services are you interested in?
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {services.map((service) => (
                      <div
                        className="text-sm text-gray-600 form-check"
                        key={service.name}
                      >
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
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
                          className="inline-block text-gray-800 form-check-label"
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
                  className="text-sm leading-7 text-gray-600"
                >
                  Tell us more about your project
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-200 bg-opacity-50 border-2 border-gray-300 rounded-lg outline-none resize-none focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              {isLoading ? (
                <button className="flex mx-auto my-2 text-white normal-case btn btn-primary btn-disabled btn-lg loading">
                  Sending Your Inquiry...
                </button>
              ) : (
                <button className="flex mx-auto my-2 text-white normal-case btn btn-primary btn-lg">
                  Submit Your Inquiry
                </button>
              )}
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
      <div className="md:h-24"></div>
    </section>
  )
}

export default Contact
