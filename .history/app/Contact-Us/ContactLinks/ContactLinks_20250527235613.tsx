import Navbar from "@/app/components/Navbar";

const contactNavLinks = [
  { label: "Home", link: "/" },
  { label: "Prayer Request", link: "/Home-page/Prayer-Request" },
  { label: "Testimony", link: "/Contact-Us/Testimony" },
  { label: "Contact Us", link: "/Contact-Us" },
];

export default function contactLinks() {
  return (
    <>
      <Navbar classname=" from-[#0C101C] to-red-500"
        churchName="His Coming Evangelical Church"
        navItems={contactNavLinks}
      />
      {/* ...rest of your contact page content... */}
    </>
  );
}