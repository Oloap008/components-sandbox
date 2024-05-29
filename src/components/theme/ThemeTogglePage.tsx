import ThemeToggle from "./ThemeToggle";

export default function ThemeTogglePage() {
  return (
    <div className="h-screen w-screen p-20 grid text-light_dark background-light_dark">
      <div className="fixed top-5 right-10">
        <ThemeToggle />
      </div>
      <h1 className="text-[75px] self-center">Hello World!</h1>
    </div>
  );
}
