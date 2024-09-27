'use client';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
  // Helper to handle page change
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Previous Button */}
      <button
        className={`w-8 h-8 flex items-center justify-center rounded-full border border-[#F85959] text-[#F85959] ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-100'
        }`}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {<IoIosArrowBack />}
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`w-8 h-8 flex items-center justify-center rounded-full border border-[#F85959] text-[#F85959] ${
              pageNumber === currentPage ? 'bg-red-100' : 'hover:bg-red-50'
            }`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        className={`w-8 h-8 flex items-center justify-center rounded-full border border-[#F85959] text-[#F85959] ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-100'
        }`}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {<IoIosArrowForward />}
      </button>
    </div>
  );
};

export default Pagination;
