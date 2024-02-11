import Link from "next/link";
import RightBar from "./rightbar";

const Dashboard = async () => {
  return (
    <div className="flex">
      <div className="container mx-auto px-4">
        <h1 className="mx-auto my-8 text-3xl font-bold">Dashboard</h1>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          <Link href="/openSRS">View SRS</Link>
        </button>
        <div className="my-8 grid grid-cols-2 gap-x-6">
          <div className="my-3 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-lg text-white">
            <Link
              href="/project/roadmap"
              className="p-20 text-lg font-semibold "
            >
              Roadmap
            </Link>
          </div>
          <div className="my-3 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-lg text-white">
            <Link
              href="/project/backlog"
              className="p-20 text-lg font-semibold "
            >
              Backlog
            </Link>
          </div>
          <div className="my-3 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-lg text-white">
            <Link href="/project/board" className="p-20 text-lg font-semibold ">
              Board
            </Link>
          </div>
          <div className="my-3 flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-violet-500 text-lg text-white">
            <Link
              href="/project/charts"
              className="p-20 text-lg font-semibold "
            >
              Charts
            </Link>
          </div>
        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default Dashboard;
