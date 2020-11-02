const baseURL = 'https://cat-fact.herokuapp.com';
const wrapper = document.querySelector('.wrapper');

// fetch(`${baseURL}/facts`)
//   .then(function (result) {
//     return result.json();
//   })
//   .then(function (json) {
//     console.log(json)
//     displayResults(json)
//   });

//   function displayResults(facts) {
//       for (i = 0; i < 10; i++) {
//           console.log(facts.all[i].text);
//           let para = document.createElement('p');
//           para.textContent = `${facts.all[i].text}`;
//           section.appendChild(para);
//       }
//   }


const container = document.createElement('div');
container.setAttribute('class', 'container');


fetch(`${baseURL}/facts/random?amount=3`)
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    console.log(json)
    displayResults(json)
  });

  function displayResults(facts) {
      for (i = 0; i < facts.length; i++) {
          console.log(facts[i].text);
          let para = document.createElement('p');
          para.setAttribute('class', 'fact');
          para.textContent = `${facts[i].text}`;
          wrapper.appendChild(para);
      }
  }
  

