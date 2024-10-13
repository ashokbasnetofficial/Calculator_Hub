import React from "react";
import Link from "next/link";
interface CardProps {
  children: React.ReactNode;
  href: string;
  styles?: string;
}
const Card: React.FC<CardProps> = (props) => {
  return (
    <Link
      href={props.href}
      className={`w-80 ${
        props.styles ? props.styles : "h-40"
      } bg-white flex flex-col  rounded-lg px-4 py-2 my-4 shadow-lg transition duration-300 ease-in-out transform hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1`}
    >
      {props.children}
    </Link>
  );
};

export default Card;
