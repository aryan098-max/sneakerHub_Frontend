

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-6 text-center">
      <h1 className="text-2xl font-bold mb-8">Contact Us</h1>

      <div className="bg-gray-50 mb-8 shadow-md rounded-2xl p-8 space-y-4 text-gray-700 text-left">
        <div>
          <h2 className="font-semibold text-lg text-gray-900">Legal Name</h2>
          <p>Monish</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-900">Trade Name</h2>
          <p>Sneaker Hub</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-900">Email</h2>
          <p>
            <a
              target="_blank"
              href="https://mail.google.com/mail"
              className="text-blue-600 hover:underline"
            >
              ali.monish260@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-900">Physical Address</h2>
          <p>Dudhwa Road, Lakhimpur Kheri, Palia Kalan, Uttar Pradesh 262902</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-900">Registered Address</h2>
          <p>Dudhwa Road, Lakhimpur Kheri, Palia Kalan, Uttar Pradesh 262902</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          We’d love to hear from you
        </h3>
        <p className="text-gray-600">
          For any business or support inquiries, feel free to reach out via
          email or phone. We’ll respond within 24–48 hours.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
