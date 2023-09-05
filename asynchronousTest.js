/*callBack function
*Function that is passed as an argument to another function, 
and it is executed after the first function has finished running.
*/

//Declare Function

function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Kgosi", age: 24 };
    callback(data);
  }, 3000);
  console.log("Getting data.....");
}

//Execute function with a callback

/*fetchData((data) => {
  console.log(`My name is ${data.name}, and I am ${data.age} years old`);
});*/

//To avoid callback hell or pyramid of doom you can use a modern way to handle async operation know as promise.

//A promise in javascript is a placeholder for future value or action.

//Initializa a promise

/*const myPromise = new Promise((resolve, reject) => {
  let myAnswer = false;

  if (myAnswer) {
    resolve("Yes Boy God Did.!!!!");
  } else {
    reject("Yes Boy God Is Working On It.!!!!");
  }
});

myPromise
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });*/

//Promise Chaining.

/*fetch("https://example.com/data")
  .then((response) => response.json())
  .then((data) => processData(data))
  .then((processesData) => {
    //Do something with the processed data
  })
  .catch((error) => console.log(error));*/

//Using Try-Catch

/*fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((error) => console.log(error));*/

//Using Promise.all function
//- It can be useful when you want to fetch data from multiple servers.

/*let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
let promise3 = fetch("https://jsonplaceholder.typicode.com/posts/3");

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => console.log(error));*/

//Async Function with async / await
//async is used to declare functions as asnyncronous functions
//await is used within the asyncronous function and it will pause the function fro further executing untin the promise is resolved.

/*async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  const name = data[0].company.name;
  console.log(name);
}

getData();*/

//Get Data from Spotify API
const clinetID = "053d73a548894d5aa2fa4d16320b74f9";
const clientSecret = "edc6c0e1465844518e58b74134a6f28e";

//private method getting the token
const _getToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clinetID + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};
//_getToken();

//Method for getting artist
/*const _getArtist = async () => {
  const url = `https://api.spotify.com/v1/artists/33LgECnJ6qzEvBzzp4TNAn`;

  const result = new Request(url, {
    headers: {
      Authorization:
        "Bearer BQBx98ds9NVqhTXlSQzA1vNbdCo4YkKVLHS28lpeFPIPENzyGRl_CBYTv4JXhltG_nyspY-_RKQRdEWtZxUldwbm-TkakS7DPiruuWQZpC7QrZcWP6E",
    },
  });

  const artistData = await fetch(result);
  const data = await artistData.json();
  console.log(data.name);
};
*/

//_getArtist();

//Test IIFE function
/*const APIController = (function () {
  console.log("Hello");
})();*/
