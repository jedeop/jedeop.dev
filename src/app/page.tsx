import LinkBox from "@/components/LinkBox";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-2xl gap-12">
      <Profile />
      <LinkBox />
    </div>
  );
}
