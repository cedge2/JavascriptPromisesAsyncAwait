let faveNumber = 1;
let baseURL = "http://numbersapi.com";

async function faveNumFacts() {
    let data = await $.getJSON(`${baseURL}/${faveNumber}?json`);
    console.log(data);
}
faveNumFacts();

const faveNumbers = [1, 2, 3];
async function multNums() {
  let data = await $.getJSON(`${baseURL}/${faveNumbers}?json`);
  console.log(data);
}
multNums();

async function fourFacts() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${faveNumber}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  fourFacts();