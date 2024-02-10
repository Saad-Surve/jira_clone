import Link from 'next/link';

const Dashboard = async () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8 mx-auto">Dashboard</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/openSRS">View SRS</Link>
      </button>
      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="bg-gray-200 p-4 flex items-center justify-center">
          <Link href="/project/roadmap" className="text-lg font-semibold text-gray-800">Roadmap</Link>
        </div>
        <div className="bg-gray-200 p-4 flex items-center justify-center">
          <Link href="/project/backlog" className="text-lg font-semibold text-gray-800">Backlog</Link>
        </div>
        <div className="bg-gray-200 p-4 flex items-center justify-center">
          <Link href="/project/board" className="text-lg font-semibold text-gray-800">Board</Link>
        </div>
        <div className="bg-gray-200 p-4 flex items-center justify-center">
          <Link href="/project/charts" className="text-lg font-semibold text-gray-800">Charts</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
