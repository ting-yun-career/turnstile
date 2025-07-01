import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Simple Form
        </h1>
        <form>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="name"
              className="w-32 text-gray-300 text-sm font-bold mr-4"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="email"
              className="w-32 text-gray-300 text-sm font-bold mr-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6 flex items-start">
            <label
              htmlFor="message"
              className="w-32 text-gray-300 text-sm font-bold mr-4"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
