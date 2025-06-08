import ContentBlock from "@/components/ContentBlock";
import Profile from "@/components/Profile";
import { Book, GitHub, Headphones, Instagram, MessageCircle, RefreshCw, Type } from "react-feather";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-2xl gap-8">
      <Profile />
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4">
        <ContentBlock Icon={MessageCircle}
          title="그래도 우리는 말합니다. 이번에도, 그럼에도, 재밌었노라고."
          text={`피드백 컴페티션 10주년 엔딩 무대 "THAT'S WHY WE DANCE" 中`}
          color="red"
          link="https://youtu.be/p-6hP4bUWyU" />
        <ContentBlock Icon={GitHub}
          title="GitHub"
          text="@jedeop"
          color="orange"
          link="https://github.com/jedeop" />
        <ContentBlock Icon={Headphones}
          title="지금 듣는 음악"
          text={`Dancing Through Life \n- Movie Wicked OST`}
          color="emerald" />
        <ContentBlock Icon={Book}
          title="지금 읽는 책"
          text={`홍성욱의 STS, 과학을 경청하다 \n- 홍성욱`}
          color="emerald" />
        <ContentBlock Icon={Type}
          title="일상 블로그"
          text="THE STORY"
          color="sky"
          link="https://blog.naver.com/cong0116" />
        <ContentBlock Icon={Instagram}
          title="인스타그램 (일상)"
          text="@jae0x31"
          color="sky"
          link="https://www.instagram.com/jae0x31" />
        <ContentBlock Icon={Instagram}
          title="인스타그램 (사진)"
          text="@jae0x31.chalkak"
          color="sky"
          link="https://www.instagram.com/jae0x31.chalkak" />
        <ContentBlock Icon={RefreshCw}
          title="마지막 수정 일시"
          text="2025년 6월 8일"
          color="slate" />
      </div>
    </div>
  );
}
