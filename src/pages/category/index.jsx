import Layout from '@/components/Layout';
import React, { useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import { getCategories, updateCategories } from '@/services/apiCalls';
import axios from 'axios';

const TickIcon = () => (
  <svg
    className="w-3 h-3 text-white fill-current"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M7.993 14.73l-4.14-4.14a1 1 0 00-1.414 1.415l5.148 5.147a1 1 0 001.414 0l9.197-9.196a1 1 0 10-1.415-1.415l-8.783 8.782z"
      clipRule="evenodd"
    />
  </svg>
);

function Category() {
  // Sample category data
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleFetchCategories = async() => {
    const res = await getCategories()
    if (res && res.length > 0) {
      setCategories(res);
    }
  }

  // Handle saving selected categories
  const handleSaveCategories = () => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    alert('Categories saved successfully!');
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('selectedCategories'))?.length > 0) {
      setSelectedCategories(JSON.parse(localStorage.getItem('selectedCategories')))
    }
    handleFetchCategories()
  }, [])

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Toggle category selection
  const toggleCategorySelection = (category) => {
    if (selectedCategories.includes(category.name)) {
      setSelectedCategories([...selectedCategories.filter(a => a !== category.name)]);
    } else {
      setSelectedCategories([...selectedCategories, category.name]);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-start bg-white text-black">
        <div className="w-[576px] min-h-[380px] h-[fit-content] bg-white border border-[#C1C1C1] rounded-[20px] p-8">
          <h1 className="text-center text-[32px] font-semibold mb-4 leading-9">Please mark your interests!</h1>
          <p className="text-center text-[16px] mb-4 leading-9">We will keep you notified.</p>
          <p className="font-medium px-4 text-[20px] mb-8 leading-9">My saved interests! <span>{`( ${selectedCategories?.length} / 100 )`}</span></p> 
          {/* Render categories */}
          <div className='px-4'>
            {(currentItems && currentItems.length > 0) ? (
              currentItems?.map((category, i) => (
                <div key={i} className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id={`category-${i}`}
                    className="mr-2 hidden"
                    checked={selectedCategories.includes(category?.name)}
                    onChange={() => toggleCategorySelection(category)}
                  />
                  <label
                    htmlFor={`category-${i}`}
                    className="inline-block w-4 h-4 mr-2 pb-[2px] border border-black rounded-sm cursor-pointer flex justify-center items-center"
                    style={{ backgroundColor: selectedCategories.includes(category?.name) ? 'black' : 'white' }}
                    onChange={() => toggleCategorySelection(category)}
                  >
                    {selectedCategories.includes(category?.name) && <TickIcon />}
                  </label>
                  <label htmlFor={`category-${i}`}>{category.name}</label>
                </div>
            ))) : (
              <p>No Data Available</p>
            )}

            {/* Render pagination */}
            <Pagination
              totalItems={categories.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />

            {/* Render "Save Categories" button on last page */}
            <button className="w-full rounded-md p-4 bg-black text-white font-medium mt-4" onClick={handleSaveCategories}>
              Save Categories
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Category;
