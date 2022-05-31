document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    search();
});

document.querySelector("#loupe").addEventListener("click", () => {
    search();
});

function search() {

  document.querySelector(".content").textContent = "";

  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

  fetch(url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
        return response.json();
    })

    .then(data => {
        getImg(data);
        console.log(data);
    })

    .catch(error => console.log(error));   
}

function getImg(data) {
  for(let i = 0; i < data.results.length; i++){
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url("+data.results[i].urls.raw+")";
    image.addEventListener("dblclick", function(){
      window.open(data.results[i].links.download, '_blank');
    })
    document.querySelector(".content").appendChild(image);
  }
}