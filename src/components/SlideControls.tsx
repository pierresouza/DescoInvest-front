import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { cn } from "../functions/twMerge";
import { buttonVariants } from "./ui/Button";
import { useSwiper } from "swiper/react";

export function SlideControls() {
  const swiper = useSwiper();

  return (
    <>
      <button
        className={cn(
          buttonVariants(),
          "text-primary-500 hover:text-primary-100",
        )}
        onClick={() => swiper.slidePrev()}
      >
        <BsFillArrowLeftCircleFill size={48} />
      </button>
      <button
        className={cn(
          buttonVariants(),
          "text-primary-500 hover:text-primary-100",
        )}
        onClick={() => swiper.slideNext()}
      >
        <BsFillArrowRightCircleFill size={48} />
      </button>
    </>
  );
}
