import Link from "next/link";
import { Icon } from "react-feather";

const colors = {
  "red": "border-red-300 bg-red-100 shadow-red-100/50 dark:border-red-800 dark:bg-red-950 dark:shadow-red-950/50",
  "orange": "border-orange-300 bg-orange-100 shadow-orange-100/50 dark:border-orange-800 dark:bg-orange-950 dark:shadow-orange-950/50",
  "sky": "border-sky-300 bg-sky-100 shadow-sky-100/50 dark:border-sky-800 dark:bg-sky-950 dark:shadow-sky-950/50",
  "slate": "border-slate-300 bg-slate-100 shadow-slate-100/50 dark:border-slate-800 dark:bg-slate-950 dark:shadow-slate-950/50",
  "emerald": "border-emerald-300 bg-emerald-100 shadow-emerald-100/50 dark:border-emerald-800 dark:bg-emerald-950 dark:shadow-emerald-950/50",
};

export interface Content {
  Icon: Icon;
  title: string;
  text: string;
  color: keyof typeof colors;
  link?: string;
}

interface ContentBlockProps {
  content: Content;
}

export default function ContentBlock({ content }: ContentBlockProps) {
  const body = (
    <div className={`flex flex-col gap-4 p-4 rounded-lg shadow-lg border ${colors[content.color]} h-full`}>
      <content.Icon size={36} className="shrink-0 mb-auto ml-auto" />
      <div className="mt-2">
        <div className="font-bold">
          {content.title}
        </div>
        <div className="whitespace-pre-wrap">
          {content.text}
        </div>
      </div>
    </div>
  )
  return (
    content.link
      ? <Link href={content.link}>{body}</Link>
      : <div>{body}</div>
  );
}
