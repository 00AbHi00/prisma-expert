import { ThemeToggle } from "@/components/theme-toggle";
export const Header = () => {
  return (
    <>
      {/* Header Section,
      in this theme can be toggled, 
    */}
      <nav className="w-screen p-3 flex justify-around ">
        <div className="flex gap-3 p-1">
          <span className="outline p-2 rounded-sm hover:bg-accent ">Home</span>
          <span className="outline p-2 rounded-sm hover:bg-accent ">Users</span>
          <span className="outline p-2 rounded-sm hover:bg-accent ">Contact</span>
          <span className="outline p-2 rounded-sm hover:bg-accent ">Main</span>
        </div>
        <ThemeToggle />
      </nav>
    </>
  );
};
