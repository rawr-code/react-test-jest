const cities = ["Ciudad de México", "Bogotá", "Lima", "Buenos Aires"];

const randomString = () => {
  const str = cities[Math.floor(Math.random() * cities.length)];
  console.log(str);
  return str;
};

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
      if (!str) {
        reject(Error("Error"));
      }
      resolve(
        str
          .split("")
          .reverse()
          .join("")
      );
    });
  };
  
module.exports = randomString;
