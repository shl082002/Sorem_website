import React from "react";

export default function Contact() {
  return (
    <>
      <div className="bg-[#eaf5ff] text-black px-[20rem] py-[5rem]">
        <div className="grid grid-cols-2 gap-x-[4rem]">
          {/* left-section */}
          <div className="flex flex-col">
            {/* location-container */}
            <div className="flex flex-col">
              <span className="text-[2rem] font-bold pb-[1rem]">Location:</span>
              <span className="text-[2rem]  pb-[1rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
                dolore!
              </span>
            </div>
            {/* email-container */}
            <div className="flex flex-col">
              <span className="text-[2rem] font-bold pb-[1rem]">Email:</span>
              <span className="text-[2rem]  pb-[1rem]">
                sorem@gmail.com dolore!
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[2rem] font-bold pb-[1rem]">Phone:</span>
              <span className="text-[2rem]  pb-[1rem]">+1 (123) 876897</span>
            </div>
          </div>
          {/* right-section */}
          <div className="">
            <span className="text-[2rem] font-bold pb-[1rem]">Contact Us:</span>
            {/* contact-form */}
            <div className="py-[1rem]">
              {/* first & last name */}
              <div className="flex justify-between items-center w-full gap-x-[2rem] pb-[2rem]">
                {/* first name */}
                <div className="flex flex-col w-full">
                  <span className="text-[1.5rem] font-semibold pb-[0.2rem]">
                    First name
                  </span>
                  <div
                    className="px-[0.5rem] py-[0.5rem]"
                    style={{
                      borderBottom: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <input
                      type="text"
                      className="bg-transparent outline-none text-[1.2rem]"
                    />
                  </div>
                </div>
                {/* last name */}
                <div className="flex flex-col w-full">
                  <span className="text-[1.5rem] font-semibold pb-[0.2rem]">
                    Last name
                  </span>
                  <div
                    className="px-[0.5rem] py-[0.5rem]"
                    style={{
                      borderBottom: "2px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <input
                      type="text"
                      className="bg-transparent outline-none text-[1.2rem]"
                    />
                  </div>
                </div>
              </div>
              {/* email */}
              <div className="flex flex-col pb-[2rem]">
                <span className="text-[1.5rem] font-semibold pb-[0.2rem]">
                  Email
                </span>
                <div
                  className="px-[0.5rem] py-[0.5rem]"
                  style={{
                    borderBottom: "2px solid black",
                    borderRadius: "10px",
                  }}
                >
                  <input
                    type="text"
                    className="bg-transparent outline-none text-[1.2rem]"
                  />
                </div>
              </div>
              {/* message */}
              <div className="flex flex-col">
                <span className="text-[1.5rem] font-semibold pb-[0.2rem]">
                  Message
                </span>
                {/* <input type="text" /> */}
                <div
                  className="px-[0.5rem] py-[0.5rem]"
                  style={{
                    borderBottom: "2px solid black",
                    borderRadius: "10px",
                  }}
                >
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="bg-transparent outline-none text-[1.2rem]"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
