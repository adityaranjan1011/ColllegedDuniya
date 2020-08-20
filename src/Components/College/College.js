import React, { Component } from "react";
import "./College.css";
import Pagination from "../Pagination/Pagination";
import CollegeCard from "../CollegeCard/CollegeCard";
import CollegesJson from "../colleges.json";

class College extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pagePerData: 10,
      currentPage: 1,
      setcurrentPage: 1,
      collegeData: CollegesJson,
    };
  }

  paginate = (pageNumber) => {
    console.log(pageNumber, "asdfasd");
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    const { colleges } = this.state.collegeData;
    const indexOfLastPage = this.state.currentPage * this.state.pagePerData;
    const indexOfFirstPage = indexOfLastPage - this.state.pagePerData;
    const collegeData = colleges.slice(indexOfFirstPage, indexOfLastPage);

    return (
      <div className="College">
        <div className="college-container">
          <h2>Colleges in North India</h2>
          <CollegeCard college={collegeData} />
          <Pagination
            postPerData={this.state.pagePerData}
            totalData={colleges.length}
            paginate={this.paginate}
          />
        </div>
      </div>
    );
  }
}

export default College;
