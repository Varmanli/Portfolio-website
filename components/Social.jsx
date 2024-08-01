import Link from "next/link";
import { FaGithub, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Socials = [
  {
    icon: <FaGithub />,
    path: "/",
  },
  {
    icon: <FaYoutube />,
    path: "/",
  },
  {
    icon: <FaLinkedinIn />,
    path: "/",
  },
  {
    icon: <FaTwitter />,
    path: "/",
  },
];

function Social({ containerStyle, iconStyle }) {
  return (
    <div className={containerStyle}>
      {Socials.map((item, index) => {
        return (
          <Link href={item.path} className={iconStyle} key={index}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
