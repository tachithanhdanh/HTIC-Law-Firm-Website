import { getStaticImagePath } from "@/utils";

const ContactHeader = () => {
  return (
    <section
      id="contact-header"
      className="relative bg-cover bg-center h-40 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('${getStaticImagePath(
          "/contact/contact-header.png "
        )}')`,
      }}
    ></section>
  );
};

export default ContactHeader;
