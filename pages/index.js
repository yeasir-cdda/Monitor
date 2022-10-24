import Card from "../src/components/Card";
import Table from "../src/components/Table";
import Traffic from "../src/components/Traffic";
import MarketPlace from "../src/components/MarketPlace";
import { useEffect, useState } from "react";
// const data = [

//     {
//         label: "Domestic partner",
//         badge: "Last 30 days",
//         content: [
//             {
//                 name: "Database",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//             {
//                 name: "Invite",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//             {
//                 name: "New Live",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//             {
//                 name: "Database",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//         ],
//     },
//     {
//         label: "International Marketplace Partner",
//         badge: "Last 30 days",
//         content: [
//             {
//                 name: "Database",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//             {
//                 name: "Invite",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//             {
//                 name: "New Live",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//             {
//                 name: "Database",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//         ],
//     },
//     {
//         label: "Transaction",
//         badge: "Last 30 days",
//         content: [
//             {
//                 name: "Offers Made",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//             {
//                 name: "Person Sales",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//             {
//                 name: "Closed(MTD)",
//                 global: "671",
//                 actual: "431",
//                 or: "-240",
//             },
//         ],
//     },
// ];

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
    const [data, setData] = useState([]);
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        const inter = setInterval(() => {
            fetch("https://api.globalomls.com/api/statistics")
                .then((res) => res.json())
                .then((data) => setData(data));
        }, 5000);
        return () => clearInterval(inter);
    }, []);
    useEffect(() => {
        const inter = setInterval(() => {
            fetch("https://api.globalomls.com/api/statistics/sales")
                .then((res) => res.json())
                .then((data) => setCardData(data));
        }, 5000);
        return () => clearInterval(inter);
    }, []);
    return (
        <div className="w-full h-screen grid grid-cols-5 p-6 gap-6 bg-[#F3F6F9]">
            <div className="col-span-2 flex flex-col   gap-6">
                {data.map((tableData, i) => (
                    <Table key={i} tableData={tableData} />
                ))}
            </div>

            <div className="col-span-3 gap-6  flex flex-col">
                <Traffic />
                <MarketPlace />

                <div className="flex gap-8">
                    {cardData.map((data, i) => (
                        <Card key={i} data={data}></Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Index;
