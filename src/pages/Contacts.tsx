import Box from "../components/Box";
import ContactsContent from "../components/ContactsContent";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn } from "react-icons/fa";

function Contacts() {
  return (
    <section
      id="contacts"
      className="min-h-screen scroll-mt-24 flex items-start pt-6 md:items-center md:pt-0 relative z-20"
    >
      <div className="w-full flex flex-col items-center md:-translate-y-4 lg:-translate-y-6">
        <h2 className="font-nabla text-2xl">Contacts</h2>
        <div className="flex sm:flex-row flex-col w-full py-12 px-6 md:px-10 gap-10 justify-center sm:px-75">
          <Box className="flex-1 min-w-50" href="mailto:melychow@icloud.com">
            <ContactsContent
              header="Email"
              text="melychow@icloud.com"
              icon={EnvelopeIcon}
            ></ContactsContent>
          </Box>
          <Box
            className="flex-1 min-w-50"
            href="https://www.linkedin.com/in/melissa-chow-720131234/"
          >
            <ContactsContent
              header="Linkedin"
              text="melissa-chow"
              icon={FaLinkedinIn}
            ></ContactsContent>
          </Box>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
