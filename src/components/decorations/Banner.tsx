import { cn } from "../../functions/twMerge";

interface PropsBanner {
  className?: string;
  positionLine?: string;
}

export function Banner({ className, positionLine }: PropsBanner) {
  return (
    <div className={cn("absolute z-0 hidden w-full xl:block", className)}>
      <div className={cn("-skew-y-[15deg]", positionLine)}>
        <div className="ml-[2%] h-12 w-52 translate-y-4 -skew-x-12 bg-gradient-login2" />
        <div className="h-12 w-full bg-gradient-login" />
      </div>
    </div>
  );
}
