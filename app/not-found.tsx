import RollingLink from "@/components/RollingLink";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col gap-4 items-center h-[calc(100vh-6.1rem)] justify-center">
      <h2 className="text-6xl">404</h2>
      <p className="text-low-color">Could not find requested resource</p>
      <RollingLink
        target="_self"
        linkTo="/"
        title="Return Home"
        delay={0.5}
        classes="px-4 py-2 text-sm"
      />
    </div>
  );
}
