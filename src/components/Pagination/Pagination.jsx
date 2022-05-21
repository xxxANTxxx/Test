import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({ itemsLength, handleSetPage }) => {
	const itemsPerPage = 4;
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		setPageCount(Math.ceil(itemsLength / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const startPage = itemOffset + 1;
	const endPage = itemOffset + itemsPerPage;

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % itemsLength;
		setItemOffset(newOffset);
		handleSetPage(event.selected + 1)
	};

	return (
		<>
			<div className='pagination'>
				<div className='pagination__displayed'>{startPage}-{endPage > itemsLength ? itemsLength : endPage} of {itemsLength} items</div>
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					marginPagesDisplayed={1}
					pageCount={pageCount}
					previousLabel="<"
					renderOnZeroPageCount={null}
					containerClassName="pagination__content"
					previousClassName="pagination__item"
					nextClassName="pagination__item"
					breakClassName="pagination__item"
					pageClassName="pagination__item"
					activeClassName="pagination__active"
					disabledClassName="pagination__disabled"
				/>
			</div>
		</>
	);
}

export default Pagination
