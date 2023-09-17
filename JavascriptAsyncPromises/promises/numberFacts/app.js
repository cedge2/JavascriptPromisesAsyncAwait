let faveNumber = 1;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${faveNumber}?json`).then(data => {
  console.log(data);
});

let faveNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${faveNumbers}?json`).then(data => {
  console.log(data);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${faveNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});