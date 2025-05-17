import React from "react";
import './RoadMap.css';

function RoadMap({ markers }) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 800 250" className="roadmap">
            {/* Road path */}
            <path 
            className="road_path"
            d="M 0 150 C 100 0, 300 300, 400 150 S 600 0, 800 150"
            />

            {/* Dashed center line */}
            <path
            className="road_dash"
            d="M 0 150 C 100 0, 300 300, 400 150 S 600 0, 800 150"
            />

            {/* Markers */}
            {markers.map((marker, index) => (
                <g key={index} className="roadmap_marker">
                    <circle
                    cx={marker.cx}
                    cy={marker.cy}
                    r="15"
                    fill="red"
                    stroke="white"
                    strokeWidth="3"
                    />
                    <text
                    x={marker.cx}
                    y={marker.cy - 25}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#333"
                    >
                    {marker.label}
                    </text>
                    <text
                    x={marker.cx}
                    y={marker.cy + 35}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#333"
                    >
                    {marker.title}
                    </text>
                </g>
            ))}
        </svg>
    )
}

export default RoadMap;