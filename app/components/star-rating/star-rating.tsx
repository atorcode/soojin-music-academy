// styles
import styles from "./star-rating.module.scss";

// icons
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export const StarRating = ({ rating }: { rating: number }) => {
  const mapRatingToStarsCount = () => {
    const result = [];
    const strRep = rating.toString();

    let numFull = +strRep[0];
    let numHalf = 0;
    if (strRep.length > 1 && strRep[strRep.length - 1] !== "0") {
      numHalf = 1;
    }
    let numEmpty = 5 - numFull - numHalf;

    for (let i = 0; i < numFull; i++) {
      result.push("full");
    }
    for (let i = 0; i < numHalf; i++) {
      result.push("half");
    }
    for (let i = 0; i < numEmpty; i++) {
      result.push("empty");
    }
    return result;
  };
  return (
    <div>
      {mapRatingToStarsCount().map((starCount) => {
        if (starCount === "full") {
          return <BsStarFill />;
        } else if (starCount === "half") {
          return <BsStarHalf />;
        } else {
          return <BsStar />;
        }
      })}
    </div>
  );
};
