import React, { useEffect, useState } from "react";
import "./ShareInfo.scss";
import config from "../../config";
import Axios from "axios";

type ShareInfoProps = {
  symbol: string;
  name: string;
  startPrice: number;
  units: number;
  isUS: boolean;
};

const ShareInfo: React.FC<ShareInfoProps> = (props) => {
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    Axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${config.finnHub.apiKey}`
    ).then((quoteResponse) => {
      setCurrentPrice(quoteResponse.data.c);
      if (props.isUS) {
        Axios.get(
          `https://finnhub.io/api/v1/forex/rates?base=USD&token=${config.finnHub.apiKey}`
        ).then((forexResponse) => {
          setCurrentValue(
            quoteResponse.data.c * forexResponse.data.quote.GBP * props.units
          );
        });
      } else {
        setCurrentValue(quoteResponse.data.c * props.units);
      }
    });
  }, [props.symbol]);

  const percentageDiff = () => {
    return (currentPrice / props.startPrice) * 100 - 100;
  };

  const currencySign = () => {
    if (props.isUS) {
      return "$";
    }
    return "£";
  };

  const toTwoDp = (num: number) => {
    return Math.round(num * 100) / 100;
  };

  const plusIfPositive = (num: number) => {
    if (num >= 0) {
      return "+";
    }
    return "";
  };

  const greenOrRed = (num: number) => {
    if (num < 0) {
      return "red";
    } else {
      return "green";
    }
  };

  return (
    <div className="ShareInfo">
      <div className="name">{props.symbol}</div>
      <div className="current-price">
        {currencySign() + Math.round(currentPrice)}
      </div>
      <div className="current-value">£{Math.round(currentValue)}</div>
      <div className={"percentage-diff " + greenOrRed(percentageDiff())}>
        {plusIfPositive(percentageDiff()) + toTwoDp(percentageDiff())}%
      </div>
    </div>
  );
};

export default ShareInfo;
