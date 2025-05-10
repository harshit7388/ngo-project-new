import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  type FormDataType = {
    name: string;
    phone: string;
    email: string;
    message: string;
  };

  type ErrorsType = Partial<Record<keyof FormDataType, string>>;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ErrorsType>({});

  // Handle input changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors: ErrorsType = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "email is required";
    if (!formData.message.trim())
      newErrors.message = "Your message is required";
    return newErrors;
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission if errors exist
    }

    const googleForms =
      "https://docs.google.com/forms/d/e/1FAIpQLSey7B7QiEklVYzkaq0xVmxFJHI-ZA8acgOML0384hMTgUbVKw/formResponse";
    const formDataToSend = new FormData();
    formDataToSend.append("entry.1434236807", formData.name);
    formDataToSend.append("entry.874610018", formData.phone);
    formDataToSend.append("entry.1230226701", formData.email);
    formDataToSend.append("entry.882576067", formData.message);

    await fetch(googleForms, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    setErrors({}); // Clear errors
    setIsSubmitted(true); // Show thank you message
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12">
            We'd love to hear from you. Please reach out using any of the
            following methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Contact */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:contact@example.org"
                className="text-blue-600 hover:text-blue-800"
              >
                Kalyankekadamfoundation@gmail.com
              </a>
            </p>
          </div>

          {/* Phone Contact */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Phone className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:text-blue-800"
              >
                +91 8178129395
              </a>
            </p>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Address
            </h3>
            <p className="text-gray-600">
              Haryana
              <br />
              India
              <br />
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Thank you!
              </h2>
              <p className="text-gray-700">
                Your message has been sent successfully.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                We’d love to hear from you! Reach out for any inquiries.
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Id
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Please enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message}
                    </span>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
                <div className="text-center mt-4">
                  <small className="text-gray-400">
                    Kalyankekadamfoundation
                  </small>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
