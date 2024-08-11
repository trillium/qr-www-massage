import URLMaker from "@/components/urlMaker";

export default async function Page(props: any) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark">
      <div className="container flex items-center flex-col">
        <h1 className="text-primary text-4xl font-bold">404</h1>
        <div>
          <h2 className="text-2xl pt-2 text-left">
            This page wasn&apos;t found
          </h2>
          <p className="text-xl text-left">
            Did you forget the &quot;?&quot; in your link?
          </p>
        </div>

        <URLMaker />
      </div>
    </div>
  );
}
