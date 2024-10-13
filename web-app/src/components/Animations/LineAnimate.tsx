import React from "react";
import Image from "next/image";
import styles from "@/components/UI/Animations/LineAnimate.module.css";
import anim_line from "../../../../public/images/anim_line.png";
const LineAnimation = () => {
  return (
    <div className={`${styles.anim_line}`}>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
      <span>
        <Image src={anim_line} alt="anim_line" priority />
      </span>
    </div>
  );
};

export default LineAnimation;
