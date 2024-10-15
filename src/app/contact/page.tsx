import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/derek0k" },
  { icon: <AiFillLinkedin />, url: "https://kr.linkedin.com/" },
  { icon: <AiFillYoutube />, url: "https://www.youtube.com/" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>derek0kim@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-500"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <div>{/* 다른 URL로 이동하기 때문에 a태그 사용 */}</div>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
