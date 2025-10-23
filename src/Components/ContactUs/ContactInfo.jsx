import React from "react";
import { FaEnvelope, FaDiscord, FaTwitter } from "react-icons/fa";

const ContactInfo = () => {
  const contacts = [
    {
      id: 1,
      icon: <FaEnvelope className="text-3xl text-[#dd163b]" />,
      title: "Email",
      info: "support@gamehub.com",
      link: "mailto:support@gamehub.com",
    },
    {
      id: 2,
      icon: <FaDiscord className="text-3xl text-[#dd163b]" />,
      title: "Discord",
      info: "Join our community",
      link: "#",
    },
    {
      id: 3,
      icon: <FaTwitter className="text-3xl text-[#dd163b]" />,
      title: "Twitter",
      info: "@GameHubOfficial",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-[#17161a] text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-[#1f1e23] hover:shadow-lg hover:shadow-[#dd163b50] transition duration-300 p-6 text-center rounded-2xl"
          >
            <div className="flex flex-col items-center space-y-3">
              {contact.icon}
              <h3 className="font-semibold text-lg">{contact.title}</h3>
              <p className="text-gray-400">{contact.info}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
