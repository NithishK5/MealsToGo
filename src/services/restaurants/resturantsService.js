import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(camelize(transformedResponse));
  })
  .catch((err) => {
    console.log(err);
  });
