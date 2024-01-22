import React from "react";

function Logout() {
  const handleLogout = () => {
    const confirmLogout = confirm(
      "Are you sure you want to do this ? All Progress will be lost"
    );
    if (confirmLogout) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="text-lg font-semibold text-center text-white bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700 transition-all duration-200 absolute top-5 right-5"
      >
        Reset
      </button>
    </>
  );
}

export default Logout;
