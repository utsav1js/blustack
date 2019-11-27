import React,{Component} from "react";
import "./Campaigns.css";
import CampaignsDetail from "../CampaignDetail";
import TabHeading from "../TabHeading";
import loader from "../../assets/loader.gif";

class Campaigns extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      config: null,
      dataLoaded: false
    };
    this.changeActiveTab.bind(this);
    this.onChange.bind(this);
  }

  async getData(){
    const res = await fetch("https://api.myjson.com/bins/n9tty");
    var data = await res.json();
    this.setState({
      config:data,
      dataLoaded:true
    })
  }

  componentDidMount(){
    this.getData();
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
    let { activeTab , config, dataLoaded} = this.state;
    return (
      <div>
      {!dataLoaded && <div className="textalign">data loading......</div> }
      {dataLoaded && <div className="container">
        <TabHeading activeTab={activeTab} changeActiveTab={this.changeActiveTab.bind(this)} />
        <CampaignsDetail activeTab={activeTab} data={config} onChange={this.onChange.bind(this)} />
      </div>}
      </div>)
    
  }
}

export default Campaigns;