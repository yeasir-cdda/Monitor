<<<<<<< HEAD
import Card from "../src/components/Card";
import Table from "../src/components/Table";
const data = [
    {
        label: "Domestic partner",
        badge: "Last 30 days",
        content: [
            {
                name: "Database",
                global: "671",
                actual: "431",
                or: "-240",
            },
            {
                name: "Invite",
                global: "671",
                actual: "431",
                or: "-240",
            },
            {
                name: "New Live",
                global: "671",
                actual: "431",
                or: "-240",
            },
            {
                name: "Database",
                global: "671",
                actual: "431",
                or: "-240",
            },
        ],
    },
    {
        label: "International Marketplace Partner",
        badge: "Last 30 days",
        content: [
            {
                name: "Database",
                global: "671",
                actual: "431",
                or: "-240",
            },
            {
                name: "Invite",
                global: "671",
                actual: "431",
                or: "-240",
            },
            {
                name: "New Live",
                global: "671",
                actual: "431",
                or: "-240",
            },
            {
                name: "Database",
                global: "671",
                actual: "431",
                or: "-240",
            },
        ],
    },
    {
        label: "Transaction",
        badge: "Last 30 days",
        content: [
            {
                name: "Offers Made",
                global: "671",
                actual: "431",
                or: "-240",
            },
            {
                name: "Person Sales",
                global: "671",
                actual: "431",
                or: "-240",
            },
            {
                name: "Closed(MTD)",
                global: "671",
                actual: "431",
                or: "-240",
            },
        ],
    },
];
const cardData = [
    {
        title: "Total Sales This Month",
        amount: 123456,
        growth: 15.25,
        icon: "sales",
    },
    {
        title: "Total Profits This Month",
        amount: 123456789,
        growth: 25.25,
        icon: "profit",
    },
];
const Index = () => {
    return (
        <div className="w-full h-screen grid grid-cols-5 p-6 gap-6 bg-[#F3F6F9]">
            <div className="col-span-2 grid gap-6">
                {data.map((tableData) => (
                    <Table tableData={tableData} />
                ))}
            </div>
            <div className="col-span-3 grid grid-rows-3 gap-6">
                <div className="flex gap-8">
                    {cardData.map((data) => (
                        <Card data={data}></Card>
                    ))}
                </div>
=======
import MarketPlace from "../src/components/MarketPlace";
import Traffic from "../src/components/Traffic";

const Index = () => {
    return (
        <div className="w-full h-screen grid bg-[#F2F2F2] grid-cols-5 p-6 gap-6">
            <div className="col-span-2 grid gap-6"></div>
            <div className="col-span-3 gap-6  grid grid-rows-3">
                <Traffic />
                <MarketPlace />
>>>>>>> yeasir
            </div>
        </div>
    );
};
export default Index;
