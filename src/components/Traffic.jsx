import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const Traffic = () => {
    return (
        <div className="w-full  bg-white rounded-sm border border-[#EFF0F6] flex flex-col h-full">
            <h2 className="px-4 py-[14px] border-b border-[#D9D9D9] text-[#555555] text-base font-medium">
                Web Traffic
            </h2>
            <div className="  ">
                <CustomCart />
            </div>
        </div>
    );
};
export default Traffic;

const CustomCart = () => {
    const series = [
        {
            name: "sells",
            data: [31, 40, 28, 51, 42, 109, 100, 40, 50, 10, 30, 29],
        },
    ];

    const options = {
        chart: {
            height: 250,
            type: "area",
            toolbar: {
                show: false,
            },
        },

        dataLabels: {
            enabled: false,
        },

        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "month",
            categories: [
                "jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "jun",
                "jul",
                "aug",
                "sept",
                "oct",
                "nov",
                "dec",
            ],
        },

        tooltip: {
            x: {
                format: "mm",
            },
        },
    };

    return <ApexCharts options={options} series={series} type="area" height={250} />;
};
