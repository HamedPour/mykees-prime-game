import primeGenerator from "./primeGenerator";
const primeArray = primeGenerator(1000);

export default () => {
  const randomPrime = primeArray[Math.floor(Math.random() * primeArray.length)];
  return randomPrime;
};
