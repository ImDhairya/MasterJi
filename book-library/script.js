let collectedData = [];
let count = 1;
const wizard = document.querySelector(".wizard");
const readMore = document.getElementById("read-more");
const container = document.getElementById("container");

async function getMoreData() {
  count++;
  try {
    const url = await fetch(
      `https://api.freeapi.app/api/v1/public/books?page=${count}&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech`
    );

    const resultURLData = await url.json();
    const nextData = resultURLData.data.data;

    console.log("New Data Fetched:", nextData);

    collectedData = [...collectedData, ...nextData];
    loadData(nextData);
  } catch (error) {
    console.error("Error fetching more data:", error);
  }
}
async function cardClick(id) {
  console.log(wizard);
  console.log(typeof collectedData);
  const myData = collectedData.find((ele) => ele.id === id);
  console.log(myData, typeof myData);
  wizard.innerHTML = `
   <div onclick="cardClick(${myData.id})" class="wizard-card">
    <div class="wizard-card-header">
    <h2 class="wizard-card-title">${myData.volumeInfo.title}</h2>
    <p class="wizard-card-id">ID: ${myData.id}</p>
    </div>
    <div class="wizard-card-body">
    <p class="wizard-card-author">By: ${
      myData.volumeInfo.authors || "Unknown Author"
    }</p>
    <div class="wizard-card-details">
    <p><strong>Published:</strong> ${
      myData.volumeInfo.publishedDate || "Unknown"
    }</p>
    <p><strong>Publisher:</strong> ${
      myData.volumeInfo.publisher || "Unknown"
    }</p>
    <p><strong>Pages:</strong> ${myData.volumeInfo.pageCount || "Unknown"}</p>
    </div>
    <p class="wizard-card-description">
    ${myData.volumeInfo.description || "No description available."}
    </p>
    </div>
    </div>
  `;
}
function loadData(data) {
  data.forEach((val) => {
    const cardHTML = `
    <div onclick="cardClick(${val.id})" class="card">
    <div class="card-header">
    <h2 class="card-title">${
      val.volumeInfo.title.length > 35
        ? val.volumeInfo.title.slice(0, 35) + "..."
        : val.volumeInfo.title
    }</h2>
    <p class="card-id">ID: ${val.id}</p>
    </div>
    <div class="card-body">
    <p class="card-author">By: ${
      val.volumeInfo.authors?.slice(0, 3).join(", ") || "Unknown Author"
    }</p>
    <div class="card-details">
    <p><strong>Published:</strong> ${
      val.volumeInfo.publishedDate || "Unknown"
    }</p>
    <p><strong>Publisher:</strong> ${val.volumeInfo.publisher || "Unknown"}</p>
    <p><strong>Pages:</strong> ${val.volumeInfo.pageCount || "Unknown"}</p>
    </div>
    <p class="card-description">
    ${
      val.volumeInfo.description?.slice(0, 200) + "..." ||
      "No description available."
    }
    </p>
    </div>
    </div>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech"
    );

    const resultData = await response.json();
    collectedData = resultData.data.data;

    loadData(collectedData);
  } catch (error) {
    console.error("Error fetching initial data:", error);
  }
}

async function main() {
  await fetchData();

  readMore.addEventListener("click", async () => {
    console.log("CLICKED");
    await getMoreData();
  });
}

main();
