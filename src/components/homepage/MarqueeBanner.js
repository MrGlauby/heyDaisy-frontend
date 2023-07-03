import Marquee from "react-gsap-marquee";

export default function MarqueeBanner() {
  return (
    <>
      <div className="marquee-wrapper flex pt-9 items-center h-72 text-neutral-100 bg-primary">
        <Marquee>
          <p className="marquee-text font-bold text-9xl pr-9">
            LEARN SHARE COMMUNICATE
          </p>
        </Marquee>
      </div>
    </>
  );
}
