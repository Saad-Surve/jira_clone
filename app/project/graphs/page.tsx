// components/MyLineChart.tsx
"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
function page() {
 
  return (
    <>
      {/* line chart */}
      <div>
      <Line
        data={{
          labels: [
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4",
            "Day 5",
            "Day 6",
          ],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132],
              backgroundColor: "purple",
            },
          ],
        }}
      />
    </div>
    </>
  )
}

export default page;