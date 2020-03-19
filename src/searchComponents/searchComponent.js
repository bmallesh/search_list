import React from "react";
import SearchInputComponent from "./searchInputComponent/searchInputComponent";
import ListComponent from "./listComponent/listComponent";
import listData from "../listData";
class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: listData
    };
    this.searchList = this.searchList.bind(this);
  }

  searchList(data) {
    console.log(data);
    if (data.searchStr === "") {
      console.log("empt");
      this.setState({ dataList: listData });
    }
    if (data.id && data.name && data.gender && data.searchStr !== "") {
      const filterList = this.state.dataList.filter(element => {
        return (
          element._id.includes(data.searchStr) ||
          element.name.toLowerCase().includes(data.searchStr.toLowerCase()) ||
          element.gender.toLowerCase().includes(data.searchStr.toLowerCase())
        );
      });
      this.setState({
        dataList: filterList
      });
    }
    if (data.name && data.searchStr !== "") {
      const filterList = this.state.dataList.filter(element => {
        return element.name
          .toLowerCase()
          .includes(data.searchStr.toLowerCase());
      });
      console.log(filterList);
      this.setState({
        dataList: filterList
      });
    }
  }

  render() {
    return (
      <div className="container">
        <SearchInputComponent searchList={this.searchList} />
        <ListComponent list={this.state.dataList} />
      </div>
    );
  }
}
export default SearchComponent;
