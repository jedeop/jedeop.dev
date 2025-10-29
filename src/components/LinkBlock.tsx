import Link from "next/link";
import { Icon } from "react-feather";

export interface Content {
  Icon: Icon;
  title: string;
  text?: string;
  link?: string;
  life?: boolean;
}

interface LinkBlockProps {
  content: Content;
}

export default function LinkBlock({ content }: LinkBlockProps) {
  const body = (
    <div
      className={`flex items-center gap-2 py-1.5 px-5 rounded-full border-3 border-gray-200 ${content.life ? "border-dashed" : "bg-gray-200 "}`}
    >
      <content.Icon size={24} className="shrink-0" />
      <div className="font-bold">{content.title}</div>
      {content.text ? (
        <div className="whitespace-pre-wrap">{content.text}</div>
      ) : (
        <></>
      )}
    </div>
  );
  return content.link ? (
    <Link href={content.link}>{body}</Link>
  ) : (
    <div>{body}</div>
  );
}
