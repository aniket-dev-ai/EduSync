import React from "react";

function RoadmapComponent({ roadmapData }) {
  if (!roadmapData || roadmapData.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No roadmap data available.
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {roadmapData.map((step, index) => (
        <div
          key={index}
          className=" rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200 ease-in-out"
        >
          <span> 
          <h2 className="text-xl font-semibold text-indigo-400">{step.name}</h2>
          </span>
          <p className="text-gray-300 my-2">{step.description}</p>
          <br />
          <p>Usefull Links</p>
          <br />
          <ul className="list-disc list-inside space-y-1 text-sm">
            {step.resources.map((resource, i) => (
              <li key={i}>
                {i+1} { }
                <a
                  href={resource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {String(resource).length > 30 ? ${String(resource).slice(0, 30)}... : resource}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RoadmapComponent;