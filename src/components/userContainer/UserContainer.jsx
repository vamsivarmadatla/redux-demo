import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../store/action/userAction";
import ReactPaginate from "react-paginate";
import Loader from "../loader";
import { Col, Container, Row } from "react-bootstrap";
import "./UserContainer.css";

const UserContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [listData, setListData] = useState([]);
  const [totalNoOfPages, setTotalNoOfPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [startCount, setStartCount] = useState(1);
  const [endCount, setEndCount] = useState(10);

  const getData = useSelector((state) => state.userListReducer);
  const dispatch = useDispatch();

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listData.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(getUserList());
  }, [getUserList]);

  useEffect(() => {
    let data = getData && getData.userList && getData.userList;
    setListData(data);

    let noOfTotal = listData.length;
    setTotalCount(noOfTotal);

    let totalPages = Math.ceil(noOfTotal / postsPerPage);
    setTotalNoOfPages(totalPages);

    let listCount = listData.count;
    if (listCount < postsPerPage && listCount >= totalCount) {
      setEndCount(listCount);
    }
  });

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected + 1);
    setSelectedPage(selected);

    let startCount = Math.ceil(selected * postsPerPage);
    setStartCount(startCount + 1);

    if (startCount + postsPerPage > totalCount) {
      setEndCount(totalCount);
    } else {
      setEndCount(startCount + postsPerPage);
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Row className="main-background noPadding">
      <Col>
        <Container>
          <div>
            <h1 className="main-title">redux</h1>
            <div>
              <>
                {totalCount && totalCount > 0 ? (
                  <div className="show-fetch-data-details mt-4 mb-4">
                    Showing {startCount} - {endCount} of top
                    <strong>{totalCount} Users </strong>
                    available
                  </div>
                ) : null}

                {currentPosts.length ? (
                  currentPosts?.map((user) => <p key={user.id}>{user.title}</p>)
                ) : (
                  <Loader />
                )}
              </>
            </div>
            <div>
              {currentPosts && currentPosts.length > 0 ? (
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  pageCount={totalNoOfPages}
                  initialSelected={2}
                  forcePage={selectedPage}
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName="pagination"
                  breakClassName="page-item"
                  breakLabel={
                    <a rel="canonical" className="page-link">
                      ...
                    </a>
                  }
                  pageClassName="page-item"
                  previousClassName="page-item"
                  nextClassName="page-item"
                  pageLinkClassName="page-link"
                  previousLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  activeClassName="active"
                />
              ) : null}
            </div>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default UserContainer;
