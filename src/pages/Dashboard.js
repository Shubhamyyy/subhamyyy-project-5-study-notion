import React from 'react'

const Dashboard = () => {
  return (
    <div >
      <div className="flex-1 flex flex-col">
            <main className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Upcoming Classes</h2>
                        <ul className="mt-4">
                            <li className="border-b py-2">Math - Algebra (9:00 AM)</li>
                            <li className="border-b py-2">Science - Physics (11:00 AM)</li>
                        </ul>
                    </div>

                   
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Recent Assignments</h2>
                        <ul className="mt-4">
                            <li className="border-b py-2">Calculus Homework - Due 28 Aug</li>
                            <li className="border-b py-2">Physics Lab Report - Due 30 Aug</li>
                        </ul>
                    </div>

                   
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">Study Progress</h2>
                        <p className="mt-4">You have completed 75% of your current course material.</p>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Dashboard;
