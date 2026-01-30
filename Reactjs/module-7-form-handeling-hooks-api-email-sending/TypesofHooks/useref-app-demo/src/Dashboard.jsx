import { Link } from "react-router-dom";
export default function AdminDashboard() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="hidden md:flex flex-col bg-gray-900 text-gray-100 p-5">
        <h2 className="text-2xl font-bold text-indigo-400 mb-8">
          AdminPanel
        </h2>

        <nav className="space-y-4">

         <ul>
             <li className="text-lg"><Link to="/admin-login/manage-feedback">Manage Users</Link></li>
             <li className="mt-2 text-lg"><Link to="/admin-login/manage-feedback">Manage Feedback</Link></li>
            
         </ul>
         
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex flex-col">
        
        {/* HEADER */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Dashboard Overview
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Admin</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="admin"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <main className="p-6 space-y-6">

          {/* STATS GRID */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* CARD */}
            <DashboardCard
              title="Users"
              value="1,245"
              gif="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
            />

            <DashboardCard
              title="Sales"
              value="$8,430"
              gif="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
            />

            <DashboardCard
              title="Orders"
              value="320"
              gif="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
            />

            <DashboardCard
              title="Growth"
              value="+18%"
              gif="https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif"
            />
          </section>

          {/* SECOND GRID */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* ACTIVITY */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">
                Recent Activity
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>✅ New user registered</li>
                <li>📦 Order #1021 completed</li>
                <li>💰 Payment received</li>
                <li>⚙️ Settings updated</li>
              </ul>
            </div>

            {/* GIF PANEL */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow p-6 text-center">
              <img
                src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif"
                alt="analytics"
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-white font-semibold text-lg">
                Live Analytics
              </h3>
              <p className="text-indigo-100 text-sm mt-1">
                Monitoring performance in real time
              </p>
            </div>

          </section>
        </main>
      </div>
    </div>
  );
}

/* CARD COMPONENT */
function DashboardCard({ title, value, gif }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-500">
          {title}
        </h3>
        <span className="text-lg font-bold text-gray-800">
          {value}
        </span>
      </div>

      <img
        src={gif}
        alt={title}
        className="w-full h-32 object-cover rounded-lg"
      />
    </div>
  );
}
