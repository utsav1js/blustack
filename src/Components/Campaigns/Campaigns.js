import React,{Component} from "react";
import "./Campaigns.css";
import data from "./../../config";
import CampaignsDetail from "../CampaignDetail";
import TabHeading from "../TabHeading";

class Campaigns extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      config: data,
    };
    this.changeActiveTab.bind(this);
    this.onChange.bind(this);
  }

  changeActiveTab(index){
    this.setState({
        activeTab:index
    })
  }

  onChange = (date, index) => {
    const data = [...this.state.config];
    data[index].createdOn = date.getTime();
    this.setState({ data });
  }
  

  render() {
    let { activeTab , config} = this.state;
    return (
      <div className="container">
        <TabHeading activeTab={activeTab} changeActiveTab={this.changeActiveTab.bind(this)} />
        <CampaignsDetail activeTab={activeTab} data={config} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}

export default Campaigns;
