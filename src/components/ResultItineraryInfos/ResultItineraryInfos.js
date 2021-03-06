import React from "react";
import uuid from "uuid/index";
import {
  dataTimeFormatting,
  dataDurationFormatting,
  dataPriceFormatting,
  dataTransportFormatting
} from "../DataAPIFormatting/DataAPIFormatting";
import ResultItineraryFormatting from "../ResultItineraryFormatting/ResultItineraryFormatting";
import "./errorMessage.css";

const ResultItineraryInfos = ({ globalState }) => {
  return globalState.result ? (
    globalState.result.map(res => {
      return (
        <ResultItineraryFormatting
          key={uuid()}
          depTime={dataTimeFormatting(res.departure_date_time)}
          arrTime={dataTimeFormatting(res.arrival_date_time)}
          durationJourney={dataDurationFormatting(res.durations.total)}
          durationWalking={
            res.durations.walking > 0
              ? dataDurationFormatting(res.durations.walking)
              : ""
          }
          transportJourney={dataTransportFormatting(res.sections)}
          price={
            res.fare.found ? dataPriceFormatting(res.fare.total.value) : "-"
          }
        />
      );
    })
  ) : (
    <div className="errorMsg">
      <p>Aucun trajet disponible</p>
    </div>
  );
};

export default ResultItineraryInfos;
