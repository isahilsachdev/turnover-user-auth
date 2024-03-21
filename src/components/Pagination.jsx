import React from 'react';

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  // Calculate total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate an array of page numbers to display
  const pageNumbers = [];
  const leftBound = Math.max(1, currentPage - 3);
  const rightBound = Math.min(totalPages, currentPage + 3);

  for (let i = leftBound; i <= rightBound; i++) {
    pageNumbers.push(i);
  }

  // Handle click on page number
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center items-center mt-8 gap-2">
      <button className='text-gray-500' onClick={() => onPageChange(currentPage - 2)} disabled={currentPage < 3}>
        {'<<'}
      </button>
      <button className='text-gray-500' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {'<'}
      </button>
      {leftBound > 1 && <span>...</span>}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={`mx-2 ${pageNumber === currentPage ? 'font-bold' : ''}`}
        >
          {pageNumber}
        </button>
      ))}
      {rightBound < totalPages && <span>...</span>}
      <button className='text-gray-500' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {'>'}
      </button>
      <button className='text-gray-500' onClick={() => onPageChange(currentPage + 2)} disabled={currentPage === totalPages - 1}>
        {'>>'}
      </button>
    </div>
  );
}

export default Pagination;
