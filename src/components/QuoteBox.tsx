import Quote from "./svg/Quote";

export default function QuoteBox() {
  return (
    <div className="flex flex-col gap-y-2">
      <Quote className="fill-gray-400 size-8" />
      <div className="font-bold">
        {
          "I don't want to make something that's so perfect that someone else could have made it."
        }
      </div>
      <div className="">- Tom Sachs</div>
    </div>
  );
}
