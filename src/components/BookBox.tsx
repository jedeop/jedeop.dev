import Image from "next/image";
import { Tooltip } from "@/components/ReactTooltip";
import Book1 from "@/assets/books/1.jpg";
import Book2 from "@/assets/books/2.jpg";
import Book3 from "@/assets/books/3.jpg";
import Book4 from "@/assets/books/4.jpg";
import Book5 from "@/assets/books/5.jpg";
import Book6 from "@/assets/books/6.jpg";
import Book7 from "@/assets/books/7.jpg";
import Book8 from "@/assets/books/8.jpg";
import Book9 from "@/assets/books/9.jpg";
import Book10 from "@/assets/books/10.jpg";

export default function BookBox() {
  const books = [
    {
      title: "다정한 것이 살아남는다",
      author: "브라이언 헤어 & 버네사 우즈",
      reason: "우리 사회는 왜이리 갈등으로 가득할까?",
      image: Book1,
    },
    {
      title: "집단 착각",
      author: "토드 로즈",
      reason: "나는 혼자가 아니구나",
      image: Book2,
    },
    {
      title: "물고기는 존재하지 않는다",
      author: "룰루 밀러",
      reason: `"물고기는 존재하지 않는다."`,
      image: Book3,
    },
    {
      title: "당신을 기다리고 있어",
      author: "김보영",
      reason: `"기다리고 있어. 내가 여기 있어."`,
      image: Book4,
    },
    {
      title: "마션",
      author: "앤디 위어",
      reason: `영화로는 담을 수 없는 소설만의 매력`,
      image: Book5,
    },
    {
      title: "함께 자라기",
      author: "김창준",
      reason: `"'함께'는 협력을 말하고, '자라기'는 학습을 말합니다."`,
      image: Book6,
    },
    {
      title: "공정하다는 착각",
      author: "마이클 샌델",
      reason: "능력주의를 비판할 논거가 필요하다면",
      image: Book7,
    },
    {
      title: "지적 대화를 위한 넓고 얕은 지식 1",
      author: "채사장",
      reason: "내가 사회를 바라보는 시야를 바꾸어 놓은 책",
      image: Book8,
    },
    {
      title: "햇볕 쬐기",
      author: "조온윤",
      reason: "동시대 시인만이 줄 수 있는 감각",
      image: Book9,
    },
    {
      title: "CODE",
      author: "찰스 펫졸드",
      reason: "컴퓨터의 작동 원리를 비유 없이 설명해낸",
      image: Book10,
    },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-bold text-xl">10 Books to Get to Know Me</div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-8 mt-4">
        {books.map((book, index) => (
          <div key={index} className="mt-auto">
            <Image
              src={book.image}
              alt={`책 표지 사진(${book.author}의 "${book.title}")`}
              className="w-full h-auto object-cover rounded shadow-sm"
              id={`book-img-${index}`}
            />
            <Tooltip anchorSelect={`#book-img-${index}`} className="max-w-80">
              {book.reason}
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
