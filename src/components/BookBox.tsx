import Image from "next/image";
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
    Book1,
    Book2,
    Book3,
    Book4,
    Book5,
    Book6,
    Book7,
    Book8,
    Book9,
    Book10,
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-bold text-xl">10 Books to Get to Know Me</div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-8 mt-4">
        {books.map((book, index) => (
          <Image
            key={index}
            src={book}
            alt={`Book ${index + 1}`}
            className="w-full h-auto object-cover rounded shadow-sm mt-auto"
          />
        ))}
      </div>
    </div>
  );
}
