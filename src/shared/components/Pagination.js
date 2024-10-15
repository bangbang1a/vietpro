import { Link, useSearchParams } from "react-router-dom";

const Pagination = ({ pages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { total, totalPages, currentPage, next, prev, hasNext, hasPrev } =
    pages;
  const formatUrl = (page) => `/Search?keyword=${keyword}&page=${page}`;
  const renderPagesHTML = (delta = 2) => {
    // [1345679]
    let listPages = [];
    const left = currentPage - delta;
    const right = currentPage + delta;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        (i >= left && i <= right)
      ) {
        listPages.push(i);
      }
    }
    return listPages;
  };
  return (
    <div id="pagination">
      <ul className="pagination">
        {hasPrev && (
          <li className="page-item">
            <Link className="page-link" to={formatUrl(currentPage - 1)}>
              Trang truoc
            </Link>
          </li>
        )}

        {renderPagesHTML().map((page, index) => (
          <li
            key={index}
            className={`page-time ${page === currentPage ? "active" : ""}`}
          >
            <Link className="page-link" to={formatUrl(page)}>
              {page}
            </Link>
          </li>
        ))}
        {hasNext && (
          <li className="page-item">
            <Link className="page-link" to={formatUrl(currentPage + 1)}>
              Trang sau
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Pagination;
