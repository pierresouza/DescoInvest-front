import { FaLinkedin, FaGithubSquare, FaBehance } from "react-icons/fa";
import { buttonVariants } from "./ui/Button";
import { cn } from "../functions/twMerge";
import { type CardProps } from "../interfaces/ICard";

export function Card({
  photo,
  alt,
  name,
  office,
  techs,
  description,
  options,
  links,
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        "min-h-[23.25rem] border border-secondary-200 bg-white w-[18.75rem] px-4 pb-6 relative",
        options?.highlight && "border-primary-500",
        className,
      )}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-[5rem_1fr] gap-x-3 mb-6 min-h-[8.375rem]">
          <div className="bg-secondary-200 rounded-bl-full rounded-br-full grid items-end">
            <img src={photo} alt={`${alt}`} className="rounded-full" />
          </div>
          <div className="text-secondary-800 pt-4">
            <strong className="text-xl leading-6 font-medium">{office}</strong>
            <h3 className="font-light text-sm mb-1">{name}</h3>
            <ul className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <li
                  key={tech}
                  className="rounded-3xl text-secondary-700 p-[0.375rem] bg-[#D1D5DB66] text-[0.625rem]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-secondary-600 mb-7">{description}</p>
        <div className="flex gap-x-4 mt-auto">
          <a
            href={links?.linkedIn}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline", size: "small" }),
              "text-base rounded-xl gap-x-4 font-medium px-3",
            )}
            rel="noreferrer"
          >
            Linkedln
            <FaLinkedin />
          </a>
          {options?.isDev ? (
            <a
              href={links?.github}
              target="_blank"
              className={cn(
                buttonVariants({ size: "small" }),
                "text-base rounded-xl gap-x-4 border-secondary-600 font-medium px-3 hover:bg-secondary-900 hover:text-white",
              )}
              rel="noreferrer"
            >
              Github
              <FaGithubSquare />
            </a>
          ) : (
            <a
              href={links?.behance}
              target="_blank"
              className={cn(
                buttonVariants({ size: "small" }),
                "text-base rounded-xl gap-x-4 border-secondary-600 font-medium px-3 hover:bg-secondary-900 hover:text-white",
              )}
              rel="noreferrer"
            >
              Behance
              <FaBehance />
            </a>
          )}
        </div>
      </div>
      {options?.title && (
        <div className="absolute -top-[9px] inset-x-0 mx-auto flex justify-center items-start">
          <span className="h-[18px] px-3 flex justify-center items-center bg-primary-500 rounded text-[9px] text-white">
            {options.title}
          </span>
        </div>
      )}
    </article>
  );
}
