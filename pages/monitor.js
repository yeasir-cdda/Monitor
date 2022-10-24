import MarketPlace from "../src/components/MarketPlace";
import Traffic from "../src/components/Traffic";

const Index = () => {
    return (
        <div className="w-full h-screen grid bg-[#F2F2F2] grid-cols-5 p-6 gap-6">
            <div className="col-span-2 grid gap-6"></div>
            <div className="col-span-3 gap-6  grid grid-rows-3">
                <Traffic />
                <MarketPlace />
            </div>
        </div>
    );
};
export default Index;
