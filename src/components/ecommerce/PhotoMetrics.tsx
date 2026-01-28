import { FaImages, FaUserTie, FaUser } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";

import Badge from "../ui/badge/Badge";

export default function PhotoMetrics() {
  const metrics = [
    {
      title: "Total Photos",
      value: "12,480",
      icon: FaImages,
      trend: "up",
      percentage: "8.2%",
    },
    {
      title: "Buyer Photos",
      value: "7,320",
      icon: FaUser,
      trend: "up",
      percentage: "5.4%",
    },
    {
      title: "Seller Photos",
      value: "5,160",
      icon: FaUserTie,
      trend: "down",
      percentage: "2.1%",
    },
    {
      title: "Reported Photos",
      value: "184",
      icon: MdReportProblem,
      trend: "down",
      percentage: "12.6%",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {metrics.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
              <Icon className="text-gray-800 text-xl dark:text-white/90" />
            </div>

            {/* Content */}
            <div className="flex items-end justify-between mt-5">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.title}
                </span>
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                  {item.value}
                </h4>
              </div>

              <Badge color={item.trend === "up" ? "success" : "error"}>
                {item.trend === "up" ? (
                  <HiArrowUp className="mr-1" />
                ) : (
                  <HiArrowDown className="mr-1" />
                )}
                {item.percentage}
              </Badge>
            </div>
          </div>
        );
      })}
    </div>
  );
}
