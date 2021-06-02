import React, { useEffect, useState } from "react";
import "./ShareInfo.scss";
import config from "../../config";
import Axios from "axios";

type ShareInfoProps = {
  symbol: string;
  startPrice: number;
  units: number;
};

const ShareInfo: React.FC<ShareInfoProps> = (props) => {
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [gbpRate, setGbpRate] = useState<number>(0);

  useEffect(() => {
    Axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${config.finnHub.apiKey}`
    ).then((response) => {
      setCurrentPrice(response.data.c);
    });
    Axios.get(
      `https://finnhub.io/api/v1/forex/rates?base=USD&token=${config.finnHub.apiKey}`
    ).then((response) => {
      setGbpRate(response.data.quote.GBP);
    });
  }, [props.symbol]);

  const currentValue = () => {
    return currentPrice * gbpRate * props.units;
  };

  const startValue = () => {
    return props.startPrice * gbpRate * props.units;
  };

  const profit = () => {
    return currentValue() - startValue();
  };

  const percentageDiff = () => {
    return (currentPrice / props.startPrice) * 100 - 100;
  };

  const toTwoDp = (num: number) => {
    return Math.round(num * 100) / 100;
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
      <div className="current-value">£{Math.round(currentValue())}</div>
      <div className={"profit " + greenOrRed(profit())}>
        £{Math.abs(Math.round(profit()))}
      </div>
      <div className={"percentage-diff " + greenOrRed(percentageDiff())}>
        {Math.abs(toTwoDp(percentageDiff()))}%
      </div>
    </div>
  );
};

export default ShareInfo;
