export default function Home() {
    return (
      <>
        {/* navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-blue-600">Logboard</a>
            <div className="space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</a>
                z<a href="/project/1" className="text-gray-700 hover:text-blue-600">Projects</a>
              <a href="/public/example" className="text-gray-700 hover:text-blue-600">Public Board</a>
            </div>
          </div>
        </nav>
  
        {/* navbarespaço */}
        <div className="h-16" />
  
        {/* geral */}
        <div className="flex items-center justify-center h-[calc(100vh-4rem)] bg-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Logboard</h1>
            <p className="text-lg text-gray-600 mb-6">Your personal project management tool</p>
            <a href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Go to Dashboard
            </a>
          </div>
        </div>
      </>
    )
  };

  dispatchEvent(new Event('DOMContentLoaded', { bubbles: true, cancelable: true }));
dispatchEvent(new Event('load', { bubbles: true, cancelable: true }));
  