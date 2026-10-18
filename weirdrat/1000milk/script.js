for (let i = 0; i < 1000; i++) {
  let milk = document.createElement("img");
  milk.src = "/milk/milk.jpg";
  milk.style.display = "inline-block";
  milk.style.width = "100px";
  milk.style.height = "auto";
  document.body.append(milk);
  console.log(i); 
}
