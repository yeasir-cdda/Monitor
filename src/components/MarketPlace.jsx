import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const MarketPlace = () => {
    const data = [
        {
            name: "www.google.com",
            value: 40,
        },
        {
            name: "www.yahoo.com",
            value: 20,
        },
        {
            name: "www.mark.com",
            value: 80,
        },
        {
            name: "www.maruf.com",
            value: 70,
        },
        {
            name: "www.maruf.com",
            value: 70,
        },
    ];
    return (
        <div className="w-full  bg-white rounded-sm border border-[#EFF0F6] flex flex-col h-full">
            <h2 className="px-4 py-[14px] border-b border-[#D9D9D9] text-[#555555] text-base font-medium">
                Top Marketplaces
            </h2>
            <div className="flex px-4 bg-[#F3F6F9]  py-3 justify-between  items-center">
                <h6 className="text-[#555555] text-sm font-medium">Marketplace Name</h6>
                <h6 className="text-[#555555] text-sm font-medium">Traffic</h6>
            </div>
            {data.map((i) => (
                <CustomConponent key={i} data={i} />
            ))}
        </div>
    );
};
export default MarketPlace;

const CustomConponent = ({ data }) => {
    return (
        <div className="px-4 flex items-center border-[#D9D9D9] border-t justify-between py-3 ">
            <h6 className="text-[#A8A8A8] text-sm ">{data.name}</h6>
            <div className="flex gap-3 items-center w-[150px]">
                <h5 className="text-[#A8A8A8] text-sm">{data.value}</h5>
                <CustomCart value={data.value} />
            </div>
        </div>
    );
};

const CustomCart = ({ value }) => {
    const series = [
        {
            data: [31, 40, 28, 51, 42, 109, 100, 40, 50, 10, 30, 29],
        },
    ];

    const options = {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100],
            },
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        tooltip: {
            enabled: false,
        },
    };

    return <ApexCharts options={options} series={series} type="area" height={20} />;
};
