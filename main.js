// let url = "https://swapi.dev/api/planets/1/";

// ourFirstPromise.then((response) => {
//   console.log(response.data);
// });
// ourFirstPromise.catch((error) => {
//   console.log(error);
// });

// let ourFirstPromise = axios
//   .get(url)
//   .then((response) => {
//     console.log(response.data);
//     axios
//       .get(response.data.residents[0])
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {});

// axios
//   .get(url)
//   .then((response) => {
//     console.log("First");
//     console.log(response.data);
//     return axios.get(response.data.residents[0]);
//   })
//   .then((response) => {
//     console.log("Second");
//     console.log(response.data);
//     return axios.get(response.data.films[0]);
//   })
//   .then((response) => {
//     console.log("Third");
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promises

// function wait3Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3 seconds passed");
//     }, 3000);
//   });
// }
// wait3Seconds()
//   .then(() => {
//     console.log("3 seconds passed");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const h1 = document.querySelector("h1");

// setTimeout(
//   () => {
//     h1.style.color = "red";
//   },
//   setTimeout(
//     () => {
//       h1.style.color = "green";
//     },
//     setTimeout(() => {
//       h1.style.color = "blue";
//     }, 1000),
//     1000
//   ),
//   1000
// );

// function changeColor(element, color) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       element.style.color = color;
//       resolve();
//     }, 1000);
//   });
// }

// changeColor(h1, "red")
//   .then(() => changeColor(h1, "green"))
//   .then(() => changeColor(h1, "blue"))
//   .then(() => changeColor(h1, "yellow"))
//   .then(() => changeColor(h1, "pink"))
//   .then(() => changeColor(h1, "violet"))
//   .then(() => changeColor(h1, "indigo"))
//   .then(() => changeColor(h1, "orange"));

// let mockAjaxRequest = new Promise((resolve, reject) => {
//   let probSuccess = 0.5;
//   let requestTime = 1000;

//   setTimeout(() => {
//     let randomNum = Math.random();
//     if (randomNum < probSuccess) {
//       let data = "Here is your data";
//       resolve(data);
//     } else {
//       reject("Request failed");
//     }
//   }, requestTime);
// });

// function mockAjaxRequest() {
//   return new Promise((resolve, reject) => {
//     let probSuccess = 0.5;
//     let requestTime = 1000;

//     setTimeout(() => {
//       let randomNum = Math.random();
//       if (randomNum < probSuccess) {
//         let data = "Here is your data";
//         resolve(data);
//       } else {
//         reject("Request failed");
//       }
//     }, requestTime);
//   });
// }

// mockAjaxRequest()
//   .then((response) => {
//     console.log(response);
//     return mockAjaxRequest();
//   })
//   .then((response) => {
//     console.log(response);
//     return mockAjaxRequest();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// recreating axios

// function get(url) {
//   const request = new XMLHttpRequest();
//   return new Promise((resolve, reject) => {
//     request.onload = function () {
//       if (request.readyState !== 4) return;

//       if (request.status >= 200 && request.status < 300) {
//         resolve(JSON.parse(request.responseText));
//       } else {
//         reject(request.statusText);
//       }
//       request.onerror = function handleError() {
//         reject(request.statusText);
//         request = null;
//       };
//     };
//     request.open("get", url, true);
//     request.send();
//   });
// }

// get(url)
//   .then((response) => {
//     console.log(response);
//     return get(response.residents[0]);
//   })
//   .then((response) => {
//     console.log(response);
//   } )
//   .catch((error) => {
//     console.log(error);
//   });

// promise built in methods

// let fourPokemonPromises = [];

// for (let i = 1; i <= 4; i++) {
//   let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//   fourPokemonPromises.push(axios.get(url));
// }

// Promise.all(fourPokemonPromises)
//   .then((responses) => {
//     responses.forEach((element) => {
//       console.log(element.data.name);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let fourPokemonRace = [];

// for (let i = 1; i <= 4; i++) {
//   let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//   fourPokemonRace.push(axios.get(url));
// }

// Promise.race(fourPokemonRace)
//   .then((response) => {
//     console.log(response.data.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
