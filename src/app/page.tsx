import BookBox from "@/components/BookBox";
import LinkBox from "@/components/LinkBox";
import Profile from "@/components/Profile";
import QuoteBox from "@/components/QuoteBox";
import Sep from "@/components/svg/Sep";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-2xl gap-12">
      <Profile />
      <LinkBox />
      <Sep />
      <QuoteBox />
      <Sep />
      <BookBox />
      <div className="text-gray-400 text-sm text-center">
        2026년 2월 11일에 마지막으로 수정했습니다.
      </div>
    </div>
  );
}
