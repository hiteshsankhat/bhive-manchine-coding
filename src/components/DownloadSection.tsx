import React from "react";

const DownloadSection: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 max-w-7xl mx-auto">
        Download our app now
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50   max-w-7xl mx-auto">
        {/* Mobile Image Section */}
        <div className="flex justify-start items-center mb-6 lg:mb-0 lg:w-1/3">
          <img
            src="images/mobile-app.png"
            alt="Mobile Preview"
            className="w-full max-w-md"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="flex flex-col items-center lg:items-start lg:pl-8">
          <p className="text-gray-600 text-center hidden lg:text-left mb-6 sm:block">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              <img
                src="images/play-store.png"
                alt="Google Play"
                className="h-6"
              />
            </a>
            <a
              href="#"
              className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              <img
                src="images/apple-store.png"
                alt="App Store"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
