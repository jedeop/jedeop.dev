import LinkBlock, { Content } from "@/components/LinkBlock";
import { GitHub, Instagram, Type, Linkedin } from "react-feather";

const data: Content[] = [
  // {
  //   Icon: MessageCircle,
  //   title: `"I don't want to make something that's so perfect that someone else could have made it."`,
  //   text: `Tom Sachs`,
  //   color: "red",
  //   // link: "https://youtu.be/p-6hP4bUWyU",
  // },
  {
    Icon: GitHub,
    title: "깃허브",
    link: "https://github.com/jedeop",
  },
  {
    Icon: Linkedin,
    title: "링크드인",
    link: "https://www.linkedin.com/in/jaewonpark621639",
  },
  {
    Icon: Type,
    title: "일상 블로그",
    link: "https://blog.naver.com/cong0116",
    life: true,
  },
  {
    Icon: Instagram,
    title: "인스타그램",
    text: "일상",
    link: "https://www.instagram.com/jae0x31",
    life: true,
  },
  {
    Icon: Instagram,
    title: "인스타그램",
    text: "사진",
    link: "https://www.instagram.com/jae0x31.chalkak",
    life: true,
  },
];

export default function LinkBox() {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-x-8 gap-y-4 flex-wrap justify-center`}
    >
      {data.map((item, index) => (
        <LinkBlock key={index} content={item} />
      ))}
    </div>
  );
}
