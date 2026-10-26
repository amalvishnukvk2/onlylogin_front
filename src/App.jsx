
import { useState } from "react";
import "./App.css";
import { Login } from "./service/api";

function App() {
  const [resdata, setresData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Login(resdata);
      console.log("Login successful:", response);

      // Reset the form
      setresData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error occurred while logging in:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl"
      >
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Login to your account
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Enter your email and password to continue.
          </p>
        </div>

        {/* Email field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-700"
          >
            Email
          </label>

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            value={resdata.email}
            onChange={(e) =>
              setresData({ ...resdata, email: e.target.value })
            }
          />
        </div>

        {/* Password field */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            value={resdata.password}
            onChange={(e) =>
              setresData({ ...resdata, password: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          Login
        </button>

        <p className="text-center text-xs text-slate-500">
          Please check your details before submitting.
        </p>
      </form>
    </div>
  );
}

export default App;