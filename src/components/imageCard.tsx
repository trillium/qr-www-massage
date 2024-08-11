import Image from "next/image";
import clsx from "clsx";

type ImageCardProps = {
  src: string;
  theme?: "light" | "dark" | null;
  text?: boolean;
} & (
  | { blackonwhite: true; whiteonblack?: false }
  | { blackonwhite?: false; whiteonblack: true }
  | { blackonwhite?: false; whiteonblack?: false }
);

/**
 * ImageCard component renders an image with optional text and various themes.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.src - The source URL of the image.
 * @param {string|null} [props.theme=null] - The theme of the card, can be "dark" or "light".
 * @param {boolean} [props.text=true] - Whether to display the text below the image.
 * @param {boolean} [props.blackonwhite=false] - Whether to use black text on a white background.
 * @param {boolean} [props.whiteonblack=false] - Whether to use white text on a black background.
 * @returns {JSX.Element} The rendered ImageCard component.
 */
export default function ImageCard({
  src,
  theme = null,
  text = true,
  blackonwhite = false,
  whiteonblack = false,
}: ImageCardProps) {
  return (
    <div
      className={clsx(
        "rounded-md",
        // "xxs:border-[12px] border-4",
        "border-6",
        "xxs:border-7",
        "xs:border-8",
        "sm:border-9",
        "md:border-10",
        "lg:border-11",
        "xl:border-12",
        "2xl: border-13",
        {
          "bg-black border-black": blackonwhite,
          "bg-white border-white": whiteonblack,
          "bg-primary border-primary": !whiteonblack && !blackonwhite,
          "text-white": blackonwhite,
          "text-black": whiteonblack,
          "text-dark": !whiteonblack && !blackonwhite && theme === "dark",
          "text-light": !whiteonblack && !blackonwhite && theme !== "dark",
        }
      )}
    >
      <Image
        className={clsx("relative border-8 rounded-md border-dark", {
          "border-white": blackonwhite,
          "border-black": whiteonblack,
          "border-light": !whiteonblack && !blackonwhite && theme === "light",
          "border-dark": !whiteonblack && !blackonwhite && theme === "dark",
          
        })}
        src={"http:" + src}
        alt="qr code to trilliummassage.la"
        width={700}
        height={700}
        priority
      />
      {text && (
        <h2
          className={clsx(
            `text-3xl font-bold text-center pt-4 pb-3`,
            `xxs:text-4xl`, 
            `xs:text-5xl`, 
            `sm:text-6xl`,
            "md:text-7xl",
            {
              "bg-black": blackonwhite,
              "bg-white": whiteonblack,
              "bg-primary": !whiteonblack && !blackonwhite,
              "text-white": blackonwhite,
              "text-black": whiteonblack,
              "text-dark": !whiteonblack && !blackonwhite && theme === "dark",
              "text-light": !whiteonblack && !blackonwhite && theme !== "dark",
            }
          )}
        >
          Scan to Book
        </h2>
      )}
    </div>
  );
}
