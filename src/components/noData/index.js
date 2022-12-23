import noData from "../../images/noData.png";
import "./noData.css";

const NoDataAvailable = () => {
  return (
    <div className="containerNoData">
      <img src={noData} alt="No Data" height="400" width="400" />
      <div>No Data Available</div>
    </div>
  );
};

export default NoDataAvailable;
