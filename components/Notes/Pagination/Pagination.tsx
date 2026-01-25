import ReactPaginate from "react-paginate";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => setCurrentPage(selected + 1)}
      forcePage={currentPage - 1}
      containerClassName="flex flex-wrap justify-center items-center gap-3 max-w-56 tablet:max-w-100 tablet-big:max-w-192 mx-auto mobile:text-s20 text-white-950 selection:text-purple-800 selection:bg-pink-400"
      pageClassName="cursor-pointer py-3 px-4.25 border border-white-950/10 hover:border-blue-400 hover:text-blue-400"
      previousClassName="cursor-pointer py-3 px-4.25 border border-white-950/10 hover:border-blue-400 hover:text-blue-400"
      nextClassName="cursor-pointer py-3 px-4.25 border border-white-950/10 hover:border-blue-400 hover:text-blue-400"
      activeClassName="cursor-none bg-blue-400 text-black-900 pointer-events-none"
      disabledClassName="cursor-none pointer-events-none text-white-950/5 bg-white-950/1"
      nextLabel=">"
      previousLabel="<"
    />
  );
}
