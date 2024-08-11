import clsx from "clsx";

/**
 * QRContainer component that wraps its children with optional themes and styles.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} [props.whiteonblack=false] - Whether to use white text on a black background.
 * @param {boolean} [props.blackonwhite=false] - Whether to use black text on a white background.
 * @param {string|null} [props.theme=null] - The theme of the container, can be "dark" or "light".
 * @param {React.ReactNode} props.children - The child components to be wrapped by the container.
 * @returns {JSX.Element} The rendered QRContainer component.
 */
export default function QRContainer({
  whiteonblack = false,
  blackonwhite = false,
  theme = null,
  children,
}: {
  whiteonblack?: boolean;
  blackonwhite?: boolean;
  theme?: string | null;
  children: React.ReactNode;
}) {
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-center",
        "px-2",
        "xss:px-4",
        "xs:px-6",
        "sm:px-8",
        {
          "bg-white": blackonwhite,
          "bg-black": whiteonblack,
          "text-white": blackonwhite,
          "text-black": whiteonblack,
          "bg-dark": !whiteonblack && !blackonwhite && theme === "dark",
          "bg-light": !whiteonblack && !blackonwhite && theme === "light",
        }
      )}
    >
      <div className="relative flex flex-col place-items-cente">{children}</div>
    </main>
  );
}
