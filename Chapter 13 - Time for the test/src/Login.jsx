// src/LoginPage.js
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { contentManger } from "../utils/ContentManger";

const LoginPage = () => {
  const { setUserName, loginId, loginStatus, setLoginStatus } =
    useContext(contentManger);
  const { location } = useParams();

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Username:</span>
          {loginStatus ? (
            <>
              {loginId}
              <br />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                onClick={() => {
                  setLoginStatus((prev) => {
                    return !prev;
                  });
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                name="username"
                value={loginId}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                maxLength={10}
              />
              <Link to={location ? `/${location}` : "/mumbai"}>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                  onClick={() => {
                    setLoginStatus((prev) => {
                      return !prev;
                    });
                  }}
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </label>
      </form>
    </div>
  );
};

export default LoginPage;
