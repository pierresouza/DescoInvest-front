import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, A11y } from "swiper/modules";

import { type CardProps } from "../interfaces/ICard";
import { Card } from "./CardTeam";
import { SlideControls } from "./SlideControls";

interface TeamSliderProps {
  members: CardProps[];
}

export function TeamSlider({ members }: TeamSliderProps) {
  return (
    <Swiper wrapperTag="ul" modules={[Pagination, A11y]} pagination>
      {members.map((member) => (
        <SwiperSlide key={member.name} tag="li">
          <Card {...member} className="mx-auto" />
        </SwiperSlide>
      ))}
      <div className="flex justify-end gap-x-4 mt-9">
        <SlideControls />
      </div>
    </Swiper>
  );
}
