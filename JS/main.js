import { getLimit, getAllCategory } from "../JS/get.js";

const product_3 = document.querySelector("#fixseds");
const ourCards = document.querySelector("#ourCards");
const loremBTN = document.querySelector("#loremMore");

const getProducts = async (id) => {
  try {
    const data = await getLimit(id);
    ourCards.innerHTML = data
      ?.map((items) => {
        return `<a href="../HTML/oneCard.html?id=${items.id}" class="w-[280px] h-[400px] group border-2 border-gray-600 rounded-xl">
                <div class="grid grid-cols-1 bg-white rounded-t-xl">
                  <figure class="flex p-4 ">
                    <img class="w-[180px] h-[200px] object-contain mx-auto" src="${items.image}"/>
                    <div class="hidden group-hover:flex flex-col gap-2 items-center justify-start">
                      <i class="p-2 bg-gray-300 rounded-full fa-regular fa-heart"></i>
                      <i class="p-2 bg-gray-300 rounded-full fa-regular fa-eye"></i>
                    </div>
                  </figure>
                </div>
                <div class="w-full h-[32px] group-hover:flex font-bold items-center justify-center group-hover:bg-black text-white/90">
                  <p class="hidden group-hover:block"> Add To Cart </p>
                </div>
                <div class="px-2 mt-2">
                  <p>${items.title}</p>
                  <div class="flex items-center gap-2 font-medium">
                    <p class="text-red-500">$${items.price}</p>
                    <p class="flex items-center gap-1">
                      <div class="text-orange-500 fa-solid fa-star"></div>
                      <div class="text-orange-500 fa-solid fa-star"></div>
                      <div class="text-orange-500 fa-solid fa-star"></div>
                      <div class="text-orange-500 fa-solid fa-star"></div>
                      <div class="text-orange-500 fa-solid fa-star"></div>
                    </p>
                    <p class="text-gray-800">(35)</p>
                  </div>
                </div>
            </a>`;
      })
      .join("");
  } catch (e) {
    console.log(e);
  }
};

// Limit 1, 1 and 2
(async function Limit(num) {
  const data_3 = await getLimit(num);
  product_3.innerHTML = data_3
    ?.map((item) => {
      return `<div class="w-[350px] h-[350px] flex flex-col">
                    <img class="img1" src="${item.image}" alt="">
                    <p class="titlesImg">${item.title}</p>
                    <img class="priceImg" src="./Images/reting.svg"/>
                    <div class="texts">
                        <p class="p2">$${item.price}</p>
                    </div>
                </div>`;
    })
    .join("");
})(1);
getProducts(8);
// Limit 1, 1 and 2 end

loremBTN.addEventListener("click", (e) => {
  e.preventDefault();
  getAllCategory();
});
