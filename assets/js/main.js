var padre = document.getElementById("container");
window.addEventListener("load", function(e){
  e.preventDefault();
  var cdf = document.createDocumentFragment();
  var pelota = document.createElement("div");
      pelota.classList.add("pelota");
  // campo, arcos
  var campo = document.createElement("div");
      campo.classList.add("campo");
  var arcoDer = document.createElement("div");
      arcoDer.classList.add("arco-der");
  var pelotaDer = document.createElement("div");
      pelotaDer.classList.add("pelota");
  var arcoIzq =document.createElement("div");
      arcoIzq.classList.add("arco-izq");
      var pelotaIzq = document.createElement("div");
          pelotaIzq.classList.add("pelota");
  arcoDer.appendChild(pelotaDer);
  arcoIzq.appendChild(pelotaIzq);
  campo.appendChild(arcoDer);
  campo.appendChild(arcoIzq);
  campo.appendChild(pelota);
  var circle = document.createElement("div");
      circle.classList.add("circle");
  var span = document.createElement("span");
  var text = document.createTextNode("Laboratoria 2017 - Made By: MiriamMendoza");
      span.classList.add("text");
      span.appendChild(text);

  cdf.appendChild(campo);
  cdf.appendChild(circle);
  cdf.appendChild(span);
  padre.appendChild(cdf);

  // <div class="campo">
  //   <div class="arco-der">
  //     <div class="pelota"> </div>
  //   </div>
  //   <div class="arco-izq">
  //     <div class="pelota"> </div>
  //   </div>
  //   <div class="pelota"></div>
  //  </div>
  // <div class="circle">
  // </div>
  // <span class="text">Laboratoria 2017 - Made By: MiriamMendoza</span>
})
