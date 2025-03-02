import React, { useState } from "react";
import { Pagination } from "@windmill/react-ui"; // Replace with your library if different

const MyTableFooter = ({ totalResults, resultsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Japanese Pagination Text */}
      <div className="text-sm text-gray-700 mt-2 text-center">
        {(() => {
          const start = (currentPage - 1) * resultsPerPage + 1;
          const end = Math.min(currentPage * resultsPerPage, totalResults);
          return `${start}-${end}件目を表示（全${totalResults}件）`;
        })()}
      </div>
    </div>
  );
};

export default MyTableFooter;
