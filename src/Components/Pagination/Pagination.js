import React from "react";
import "./Pagination.css";

const Pagination = ({ postPerData, totalData, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalData / postPerData); i++) {
    pageNumber.push(i);
  }

  return (
    <nav style={{padding:'30px'}}>
      <ul className="Pagination">
        {pageNumber.map((number) => {
          return (
            <li key={number} className="page-number">
              <a
                href="!#"
                className="page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
