import React, { useEffect, useState } from "react";
import "./ShareInfo.scss";
import config from "../../config";
import Axios, { AxiosResponse } from "axios";

type ShareInfoProps = {
  symbol: string;
  name: string;
  startPrice: number;
  units: number;
};

const ShareInfo: React.FC<ShareInfoProps> = (props) => {
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  useEffect(() => {
    const updateCurrentPrice = async () => {
      const response: AxiosResponse<any> = await Axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${config.finnHub.apiKey}`
      );
      setCurrentPrice(response.data.c);
    };
    updateCurrentPrice();
  }, [props.symbol]);

  const percentageDiff = () => {
    return (currentPrice / props.startPrice) * 100 - 100;
  };

  const toTwoDp = (num: number) => {
    return Math.round(num * 100) / 100;
  };

  const plusOrMinus = (num: number) => {
    if (num < 0) {
      return "-";
    } else {
      return "+";
    }
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
      <div className="name">{props.name}</div>
      <div className="current-price">${currentPrice}</div>
      <div className="current-value">
        ${Math.round(currentPrice * props.units)}
      </div>
      <div className={"percentage-diff " + greenOrRed(percentageDiff())}>
        {plusOrMinus(percentageDiff()) + toTwoDp(percentageDiff())}%
      </div>
    </div>
  );
};

export default ShareInfo;
