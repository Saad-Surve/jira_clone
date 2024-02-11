// components/MyLineChart.tsx
"use client";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Gantt from '../../../components/GanttChart/GanttChart'

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
function page() {
  const [yAxis, setYAxis] = useState<Number[]>([])
  useEffect(() => {
    const fetchData = async () => {
      // fetch data from server
      const res = await axios.get('http://localhost:3000/api/storyPoints')
      const data = res.data
      // set the data to the state

      console.log(data)
      setYAxis([200, 182, 145, 134, 140, data.totalFinalStoryPoints])
    }
    
    fetchData()
  }
  , [])

  console.log()
  return (
    <div className="h-calc() w-full">
      {/* line chart */}
      <div className="w-1/2 h-1/2">
        Product Burndown Chart
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
              data: yAxis,
              backgroundColor: "purple",
            },
          ],
        }}
      />
      <div className="">
      <Gantt />
      </div>
    </div>
    </div>
  )
}

export default page;