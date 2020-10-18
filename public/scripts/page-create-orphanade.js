//Create map
const map = L.map("mapid").setView([-22.8232878, -43.0088399, 15], 15);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add markes
map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remover icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//Adicionar o campo de fotos
function addPhotoField() {
  //Pegar o container de photps
  const container = document.querySelector("#images");
  //Pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima image add.
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se campo ta vazio, se sim, não adicionar ao container de images
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //Limpar campo antes de adicionar ao container
  input.value = "";
  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do primeiro campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//Selecionar Sim e Não
function toggleSelect(event) {
  //retirar a classe active dos botões
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });
  //pegar o botão clicado
  const button = event.currentTarget;
  button.classList.add("active");
  //atualizar o meu inputo com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  //verificar se sim ou não
  input.value = button.dataset.value;
  //colocar a classe actve no botão clicado
}