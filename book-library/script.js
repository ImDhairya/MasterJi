// let myData = [];
// await fetchData();

// // 'https://api.freeapi.app/api/v1/public/books?page=3&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech'

// async function fetchData() {
//   try {
//     const response = await fetch("https://api.freeapi.app/api/v1/public/books");
//     const result = await response.json();

//     if (!result.data || !result.data.data) {
//       throw new Error("Unexpected data structure");
//     }

//     // console.log(result.data.data);
//     // console.log(result.data.data[0]);

//     myData = [...result.data];
//   } catch (error) {
//     console.error("The error is:", error);
//   }
// }

// console.log(myData);

// function getSingleContainer() {
//   const container = document.createElement("div");
// }

let collectedData = [];
async function fetchData() {
  try {
    const response = await fetch("https://api.freeapi.app/api/v1/public/books");
    const resultData = await response.json();

    // console.log(resultData);

    collectedData = JSON.parse(JSON.stringify(resultData.data.data));
    // console.log(collectedData);
  } catch (error) {
    console.log(error, "Error fetching data");
  }
}

async function main() {
  await fetchData();
  console.log(collectedData);
}

main();
const myDate = "2006 - 04 - 04;";
const cleanDate = myDate.replace(";", "").trim();
const correctDt = cleanDate.replaceAll("-", "/").trim();
// console.log(a);

const date = new Date(correctDt);
console.log(date);
