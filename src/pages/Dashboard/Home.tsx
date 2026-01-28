
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import PhotoMetrics from "../../components/ecommerce/PhotoMetrics";

export default function Home() {
  return (
    <>
      <PageMeta
        title="KinkLink Dashboard | Sell and Buy Your Photos"
        description="Dashboard page for KinkLink, where you can monitor your photo sales and purchases."
      />
      <div className="grid gap-4 md:gap-6">
        <div className="col-span-12 space-y-4 md:space-y-6">
          <PhotoMetrics />
        </div>

        

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <MonthlyTarget />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4">   

          <MonthlySalesChart />
        </div>

        

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
