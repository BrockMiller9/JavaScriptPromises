// part 1-------------------------
// let url = "http://numbersapi.com/";
// favNumber = 7;

// $.getJSON(`${url}${favNumber}?json`).then((data) => {
//   console.log(data);
// });

// let favNumbers = [7, 11, 12];
// for (num of favNumbers) {
//   $.getJSON(`${url}${num}?json`).then((data) => {
//     console.log(data);
//   });
// }

// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return $.getJSON(`${url}${favNumber}?json`);
//   })
// ).then((facts) => {
//   facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
// });

// part 2-------------------------
let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

$.getJSON(url).then((data) => {
  console.log(data);
  let deckId = data.deck_id;
  let url2 = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  $.getJSON(url2).then((data) => {
    console.log(data);
    let card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  });
});

$.getJSON(url).then((data) => {
  console.log(data);
  let deckId = data.deck_id;
  let url2 = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  $.getJSON(url2)
    .then((data) => {
      console.log(data);
      let card = data.cards[0];
      console.log(`${card.value} of ${card.suit}`);
    })
    .then(() => {
      $.getJSON(url2).then((data) => {
        console.log(data);
        let card = data.cards[0];
        console.log(`${card.value} of ${card.suit}`);
      });
    });
});

const button = document.querySelector("button");
const cardArea = document.querySelector("#results");

$.getJSON(url).then((data) => {
  console.log(data);
  let deckId = data.deck_id;
  button.addEventListener("click", () => {
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then((data) => {
        console.log(data);
        let card = data.cards[0];
        cardArea.innerHTML += `<img src=${card.image} />`;
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
