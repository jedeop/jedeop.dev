import ContentBlock, { Content } from "@/components/ContentBlock";
import Profile from "@/components/Profile";
import {
  Book,
  GitHub,
  Headphones,
  Instagram,
  MessageCircle,
  RefreshCw,
  Type,
} from "react-feather";

const data: Content[] = [
  {
    Icon: MessageCircle,
    title: "그래도 우리는 말합니다. 이번에도, 그럼에도, 재밌었노라고.",
    text: `피드백 컴페티션 10주년 엔딩 무대 "THAT'S WHY WE DANCE" 中`,
    color: "red",
    link: "https://youtu.be/p-6hP4bUWyU",
  },
  {
    Icon: GitHub,
    title: "GitHub",
    text: "@jedeop",
    color: "orange",
    link: "https://github.com/jedeop",
  },
  {
    Icon: Headphones,
    title: "지금 듣는 음악",
    text: `새삼스럽게 왜 (악뮤)`,
    color: "emerald",
  },
  {
    Icon: Book,
    title: "지금 읽는 책",
    text: `급류 (정대건)`,
    color: "emerald",
  },
  {
    Icon: Type,
    title: "일상 블로그",
    text: "THE STORY",
    color: "sky",
    link: "https://blog.naver.com/cong0116",
  },
  {
    Icon: Instagram,
    title: "인스타그램 (일상)",
    text: "@jae0x31",
    color: "sky",
    link: "https://www.instagram.com/jae0x31",
  },
  {
    Icon: Instagram,
    title: "인스타그램 (사진)",
    text: "@jae0x31.chalkak",
    color: "sky",
    link: "https://www.instagram.com/jae0x31.chalkak",
  },
  {
    Icon: RefreshCw,
    title: "마지막 수정 일시",
    text: "2025년 6월 28일",
    color: "slate",
  },
];

const grid_rows = [
  "sm:grid-rows-1",
  "sm:grid-rows-2",
  "sm:grid-rows-3",
  "sm:grid-rows-4",
  "sm:grid-rows-5",
  "sm:grid-rows-6",
  "sm:grid-rows-7",
  "sm:grid-rows-8",
  "sm:grid-rows-9",
  "sm:grid-rows-10",
];
const grid_row = grid_rows[Math.ceil(data.length / 3) - 1];

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-2xl gap-8">
      <Profile />
      <div className={`grid grid-cols-1 sm:grid-cols-3 ${grid_row} gap-4`}>
        {data.map((item, index) => (
          <ContentBlock key={index} content={item} />
        ))}
      </div>
    </div>
  );
}
