import React from "react";
import "./ResultItineraryFormatting.css";

const ResultItineraryFormatting = props => {
  return (
    <div className="row d-flex flex-row resultItinerary">
      {/* Time */}
      <div className="col-md-auto d-flex flex-column justify-content-between align-items-center border-right resultTime">
        <div className="row-md d-flex flex-row align-items-center justify-content-center depTime">
          <i
            className="col-md-4 px-0 icons-itinerary-bullet icons-size-1x text-center text-blue"
            aria-hidden="true"
          ></i>
          <p className="col-md-8 px-0 text-center font-weight-bolder">
            14:08
            {/* {props.depTime} */}
          </p>
        </div>
        <div className="row-md d-none d-md-flex flex-row h-100 w-100 align-items-center justify-content-center forVerticalLine">
          <div className="col-md-4 px-0 h-100 text-center">
            <span className="d-md-inline-block h-100 bg-blue verticalLine"></span>
          </div>
          <div className="col-md-8 px-0 h-100 text-center"></div>
        </div>
        <div className="row-md d-flex flex-row align-items-center justify-content-center arrTime">
          <i
            className="col-md-4 px-0 icons-localisation-pin icons-size-1x text-center text-blue"
            aria-hidden="true"
          ></i>
          <p className="col-md-8 px-0 text-center font-weight-bolder">
            14:43
            {/* {props.arrTime} */}
          </p>
        </div>
      </div>

      {/* Duration */}
      <div className="col-md-auto d-flex flex-column border-right justify-content-center align-items-center durationJourney">
        <p className="row-md d-flex flex-row justify-content-center font-weight-bolder font-size-5x durationJourneyTotal">
          35 min
          {/* {props.durationJourney} */}
        </p>
        {/* props.durationWalking */}{" "}
        {"7 min" !== "" ? (
          <div className="row-md durationWalking">
            <p className="d-none d-md-flex flex-column flex-wrap justify-content-center durationWalking-md">
              <span>dont 7 min{/* {props.durationWalking}*/}</span>
              <span>de marche</span>
            </p>
            <p className="d-md-none durationWalking-sm">
              (
              <i
                className="icons-itinerary-pedestrian icons-size-1x"
                aria-hidden="true"
              />
              7 min
              {/* {props.durationWalking} */})
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Transport mode */}
      <div className="col d-flex align-items-center transportJourney">
        <p>M 4 - M 1 - W{/* {props.transportJourney} */}</p>
      </div>

      {/* Price */}
      <div className="col-md-auto border-left d-flex justify-content-center align-items-center font-weight-bolder price">
        <p>1,90 €{/* {props.price} */}</p>
      </div>

      {/* Detail button */}
      <div className="col-md-auto border-left d-flex justify-content-center align-items-center detailAccess">
        <p className="text-blue">
          DÉTAILS{" "}
          <i
            className="icons-arrow-next icons-size-1x text-blue"
            aria-hidden="true"
          ></i>
        </p>
      </div>
    </div>
  );
};

export default ResultItineraryFormatting;
