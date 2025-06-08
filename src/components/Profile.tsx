import ProfileImage from "./ProfileImage"

export default function Profile() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <ProfileImage />
      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-bold text-4xl flex gap-1">
          박재원
          <div className="font-bold text-gray-400 text-xl flex items-end">공학도</div>
        </h1>
        <h2 className="font-bold text-gray-400 text-xl">
          더 밝고 따듯한 세상을 위해, <br />
          사회와 정치에 기여하는 방법을 모색 중이다.
        </h2>
        <h2 className="font-bold text-gray-400 text-md">
          jwpark24@postech.ac.kr <br/>
          jedeop@jedeop.dev
        </h2>
      </div>
    </div>
  );
}
