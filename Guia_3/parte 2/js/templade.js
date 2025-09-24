 const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "Laptop", desc: "64GB RAM", img: "imagenes/laptop.jpg", price: "$1200"},
    {titulo: "Mouse", desc: "Inalámbrico", img: "imagenes/mause.webp", price: "$50"},
    {titulo: "Teclado", desc: "Mecánico", img: "imagenes/teclado.webp", price: "$150"},
    {titulo: "Monitor", desc: "4K UHD", img: "imagenes/pantalla.webp",price: "$400"},
    {titulo: "Audífonos", desc: "Cancelación de ruido", img: "imagenes/audifonos.webp", price: "$200"},
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".img").src = p.img;
    
    clon.querySelector(".price").textContent = p.price; 
    contenedor.appendChild(clon);
  });
