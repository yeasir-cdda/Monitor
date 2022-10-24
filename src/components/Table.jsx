const Table = ({ tableData }) => {
    return (
        <div className="w-full">
            <div className="bg-white flex justify-between items-center px-[14px] py-[16px]  sm:-mx-6 md:mx-0 -mx-4">
                <div className="text-[16px] font-[500] text-[#555555]">{tableData.label}</div>
                <div className="text-[#979797] text-[14px]">{tableData.badge}</div>
            </div>
            <div className="-mx-4 overflow-scrool ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0">
                <table className="min-w-full">
                    <thead className="bg-[#F3F6F9] border-b border-[#D9D9D9]">
                        <tr>
                            <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm text-[#555555] text-[14px] font-[500]">
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3 text-left text-sm text-[#555555] text-[14px] font-[500] table-cell"
                            >
                                Global
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3 text-left text-sm text-[#555555] text-[14px] font-[500] table-cell"
                            >
                                Actual
                            </th>
                            <th scope="col" className="py-3 text-left text-sm text-[#555555] text-[14px] font-[500]">
                                +OR-
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {tableData.content.map((data) => (
                            <tr key={data.email} className="border-b border-[#D9D9D9]">
                                <td className="px-3 py-3 text-[#A8A8A8] text-[14px] font-[400] table-cell">{data.name}</td>
                                <td className="px-3 py-3 text-[#A8A8A8] text-[14px] font-[400] table-cell">{data.global}</td>
                                <td className="px-3 py-3 text-[#A8A8A8] text-[14px] font-[400] table-cell">{data.actual}</td>
                                <td className="py-3 text-[#A8A8A8] text-[14px] font-[400] table-cell">{data.or}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Table;
