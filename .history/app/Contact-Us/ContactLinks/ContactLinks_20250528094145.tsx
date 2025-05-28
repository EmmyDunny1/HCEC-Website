import Navbar from "@/app/components/Navbar";

const contactNavLinks = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/About-Us" },
  { label: "Our Beliefs", link: "/About-Us/Our-Beliefs" },
  { label: "Our History", link: "/About-Us/Our-History" },
  { label: "Our Leadership", link: "/About-Us/Our-Leadership" },
  { label: "Events", link: "/Events" },
  { label: "Sermons", link: "/Sermons" },
  { label: "Prayer", link: "/Prayer" },
  { label: "Bible Study", link: "/Bible-Study" },
  { label: "Membership", link: "/Membership" },
  { label: "Donate", link: "/Donate" },
  { label: "Volunteer", link: "/Volunteer" },
  { label: "News & Updates", link: "/News-and-Updates" },
  { label: "FAQ", link: "/FAQ" },
  { label: "Prayer Request", link: "/Home-page/Prayer-Request" },
  { label: "Testimony", link: "/Contact-Us/Testimony" },
  { label: "Contact Us", link: "/Contact-Us" },
];

export default function contactLinks() {
  return (
    <>
      <Navbar
        churchName="His Coming Evangelical Church"
        navItems={contactNavLinks}
      />
      {/* ...rest of your contact page content... */}
    </>
  );
}