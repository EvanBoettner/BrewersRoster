
//Fetching json data
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((roster) => {
    roster.forEach((player) => {
      const playerInfo =
        // grabbing and displaying data information
        `<div class = 'player' id=${player.id} data-id = ${player.id}>
        <h1>${player.firstName} ${player.lastName}</h1>
        <h4>PlayerID: ${player.id}</h4> 
        <img data-id = ${player.id} class = 'baseballImg' src=${player.picture} /> <br> 
      </div>`;
      document
        .getElementById("players")
        .insertAdjacentHTML("beforeend", playerInfo); //displaying the created html 

      document.getElementById(`${player.id}`).addEventListener("click", (e) => {
        let data = roster.find((data) => { 
          return data.id === Number(e.target.parentElement.dataset.id);
        });// finds the specific index data
        
        if (data[e] === roster[e]) { // checks if the data info and the info from the roster is the same
          console.log(data[e], roster[e]);
          const moreInfo = ` <div id = 'cardInfo' >
        <h4 id='position'>Position: ${data.primaryPosition}</h4> 
        <h4 id='bat'>Bat side: ${data.batSide}</h4>
        <h4 id='throw'>Throw side: ${data.throwSide}</h4>
        <h4 id='number'>Number: ${data.number}</h4>
        <h4 id='birth'>Place of birth: ${data.birthCity}, ${data.birthStateProvince}, <br> ${data.birthCountry}</h4>
      </div>`;
          document
            .getElementById(`${player.id}`)
            .insertAdjacentHTML("beforeend", moreInfo); //Creates html displaying additional player info 
        }
      });
    });
  });

// Adding a toggle effect to slider buttons
document.getElementById("rosterSlider").addEventListener("mouseover", () => {
  document.getElementById("leftArrow").style.visibility = "visible";
});
document.getElementById("rosterSlider").addEventListener("mouseleave", () => {
  document.getElementById("leftArrow").style.visibility = "hidden";
});

document.getElementById("rosterSlider").addEventListener("mouseover", () => {
  document.getElementById("rightArrow").style.visibility = "visible";
});
document.getElementById("rosterSlider").addEventListener("mouseleave", () => {
  document.getElementById("rightArrow").style.visibility = "hidden";
});

// Creating a slider for the roster
const leftSlider = document.getElementById("leftArrow");
const rightSlider = document.getElementById("rightArrow");

leftSlider.addEventListener("click", (event) => {
  const content = document.querySelector("#players");
  console.log(content);
  content.scrollLeft -= 800; // adds the slide effect
  event.preventDefault(); // prevents page reload
});
rightSlider.addEventListener("click", (event) => {
  const content = document.querySelector("#players");
  content.scrollLeft += 800; // adds the slide effect
  event.preventDefault(); // prevents page reload
});
