import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icon/io5";
export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
  };
  return (
    <footer className="footer-section ">
      <div className="container grid grid-three-cols ">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon.MdPlace}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
