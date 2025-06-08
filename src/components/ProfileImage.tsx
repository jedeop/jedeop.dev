import Image from "next/image";
import ProfileImageSource from '@/assets/profile.png'

export default function ProfileImage() {
  return (
    <div
      className="rounded-full w-3xs overflow-hidden"
    >
      <Image
        src={ProfileImageSource}
        alt="박재원의 프로필 사진. 동백꽃 앞에서 박재원이 웃고 있다."
      />
    </div>
  );
}
