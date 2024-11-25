import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-secondary-100 flex">
      <Sidebar />
      <main className="p-9 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
