import React from "react";

import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Jay Vaidya",
      description:
        "Jay Vaidya, a proud alumnus of CT Group of Institutions, is now a Senior Cloud Technical Expert at Amazon. His expertise in cloud computing and system architecture showcases the strong foundation and career opportunities our institution provides. We celebrate his success and continue to inspire future leaders!",
      image: 'https://admissions.paruluniversity.ac.in/landing-page/domestic/imgs/Placed%20(4).png',
      socials: [
        {
          icon: <FaEnvelope />,
          link: "",
        },
        {
          icon: <FaPhone />,
          link: "",
        },
        {
          icon: <FaInstagram />,
          link: "",
        },
      ],
    },
    {
      name: "Milind Purswani",
      description:
        "Milind Purswani, a distinguished alumnus of CT Group of Institutions, is now a Security Engineer at Snapchat. His expertise in cybersecurity and digital safety reflects the strong technical foundation and industry-ready skills nurtured at our institution. We take pride in his achievements and continue to empower future innovators!",
      image: 'https://admissions.paruluniversity.ac.in/landing-page/domestic/imgs/Placed%20(3).png',
      socials: [
        {
          icon: <FaEnvelope />,
          link: "",
        },
        {
          icon: <FaPhone />,
          link: "",
        },
        {
          icon: <FaInstagram />,
          link: "",
        },
      ],
    },
    {
      name: "Mansi Dalwani",
      description:
        "Mansi Dalwani, a proud alumnus of CT Group of Institutions, is now a Data Strategist at Google. Her expertise in data analysis and strategic decision-making highlights the strong academic foundation and industry exposure provided at our institution. We celebrate her success and continue to inspire future leaders!",
      image: 'https://admissions.paruluniversity.ac.in/landing-page/domestic/imgs/Placed%20(2).png',
      socials: [
        {
          icon: <FaEnvelope />,
          link: "",
        },
        {
          icon: <FaPhone />,
          link: "",
        },
        {
          icon: <FaInstagram />,
          link: "",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D857B] to-[#071F1D] text-white py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-center mb-8 inline-block bg-white text-black px-6 py-2 rounded-[21px]">
            Our Alumni
          </h1>
        </div>
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-lg p-8 space-y-4 md:space-y-0 hover:border-2 hover:border-white transition-all duration-300"
            >
              {index === 1 ? (
                <>
                  {/* Info Section */}
                  <div className="md:w-2/3 w-full text-center md:text-right py-4 md:px-8">
                    <h2 className="text-4xl font-semibold">{member.name}</h2>
                    <p className="mt-4 text-lg">{member.description}</p>
                    <div className="flex justify-center md:justify-end space-x-4 mt-6 text-lg">
                      {member.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border-2 border-transparent hover:border-white transition-all cursor-pointer"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="flex-shrink-0 md:w-1/4 w-full text-center py-4 md:px-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 object-cover mx-auto rounded-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image Section */}
                  <div className="flex-shrink-0 md:w-1/4 w-full text-center py-4 md:px-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 object-cover mx-auto rounded-lg"
                    />
                  </div>
                  {/* Info Section */}
                  <div className="md:w-2/3 w-full text-center md:text-left py-4 md:px-8">
                    <h2 className="text-4xl font-semibold">{member.name}</h2>
                    <p className="mt-4 text-lg">{member.description}</p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-6 text-lg">
                      {member.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border-2 border-transparent hover:border-white transition-all cursor-pointer"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
