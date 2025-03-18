const data = [
    {
        id: 1,
        name: "Tachymeter Men's Pro Wear Black",
        img: "./img/watch1.jpg",
        price: 74,
        cat:"Sport",
    },
    {
        id: 2,
        name: "Michael Kors Men's wear",
        img: "./img/watch2.jpg",
        price: 80,
        cat:"Dress",
    },
    {
        id: 3,
        name: "Tachymeter Men's Pro Wear Gold & Silver",
        img: "./img/watch3.jpg",
        price: 74,
        cat:"Dress",
    },
    {
        id: 4,
        name: "Tachymeter Men's Pro Wear Gold",
        img: "./img/watch4.jpg",
        price: 74,
        cat:"Dress",
    },
    {
        id: 5,
        name: "Tachymeter Men's Pro Wear Rose Gold",
        img: "./img/watch5.jpg",
        price: 76,
        cat:"Dress",
    },
    {
        id: 6,
        name: "Tachymeter Men's Pro Wear Black & Gold",
        img: "./img/watch6.jpg",
        price: 74,
        cat:"Casual",
    },
    {
        id: 7,
        name: "Tachymeter Men's Pro Wear Blue & Gold",
        img: "./img/watch7.jpg",
        price: 74,
        cat:"Casual",
    },
    {
        id: 8,
        name: "Tachymeter Men's Pro Wear Silver & Gold",
        img: "./img/watch8.jpg",
        price: 74,
        cat:"Sport",
    },
    {
        id: 9,
        name: "Berny Casual Men's Wear",
        img: "./img/watch9.jpg",
        price: 60,
        cat:"Casual",
    },
    {
        id: 10,
        name: "Berny Casual Men's Wear Black",
        img: "./img/watch10.jpg",
        price: 55,
        cat:"Sport",
    },
    {
        id: 11,
        name: "Berny Men's Wear Black",
        img: "./img/watch11.jpg",
        price: 57,
        cat:"Sport",
    },
    {
        id: 12,
        name: "Berny Men's Wear White",
        img: "./img/watch12.jpg",
        price: 57,
        cat:"Sport",
    },
    {
        id: 13,
        name: "OLEVS Blue",
        img: "./img/watch13.jpg",
        price: 45,
        cat:"Casual",
    },
    {
        id: 14,
        name: "OLEVS Black",
        img: "./img/watch14.jpg",
        price: 45,
        cat:"Casual",
    },
    {
        id: 15,
        name: "OLEVS Gold",
        img: "./img/watch15.jpg",
        price: 47,
        cat:"Casual",
    },
    {
        id: 16,
        name: "OLEVS Green",
        img: "./img/watch16.jpg",
        price: 40,
        cat:"Casual",
    },
    {
        id: 17,
        name: "OLEVS Brown",
        img: "./img/watch17.jpg",
        price: 37,
        cat:"Dress",
    },
    {
        id: 18,
        name: "OLEVS Black Square",
        img: "./img/watch18.jpg",
        price: 35,
        cat:"Dress",
    },
    {
        id: 19,
        name: "OLEVS Blue Wear",
        img: "./img/watch19.jpg",
        price: 37,
        cat:"Dress",
    },
    {
        id: 20,
        name: "OLEVS Brown Square",
        img: "./img/watch20.jpg",
        price: 35,
        cat:"Dress",
    },
    {
        id: 21,
        name: "OLEVS Black Quartz",
        img: "./img/watch21.jpg",
        price: 100,
        cat:"Luxury",
    },
    {
        id: 22,
        name: "OLEVS Black Pro",
        img: "./img/watch22.jpg",
        price: 105,
        cat:"Luxury",
    },
    {
        id: 23,
        name: "OUPINKE Pro Black & Gold",
        img: "./img/watch23.jpg",
        price: 90,
        cat:"Luxury",
    },
    {
        id: 24,
        name: "OUPINKE Black",
        img: "./img/watch24.jpg",
        price: 60,
        cat:"Dress",
    },
    {
        id: 25,
        name: "OUPINKE Premium Gold Wear",
        img: "./img/watch25.jpg",
        price: 150,
        cat:"Luxury",
    },
    {
        id: 26,
        name: "OUPINKE Pro Black & Gold",
        img: "./img/watch26.jpg",
        price: 95,
        cat:"Dress",
    },
    {
        id: 27,
        name: "OUPINKE Premium Silver Wear",
        img: "./img/watch27.jpg",
        price: 100,
        cat:"Luxury",
    },
    {
        id: 28,
        name: "OUPINKE Gold",
        img: "./img/watch28.jpg",
        price: 80,
        cat:"Dress",
    },
    {
        id: 29,
        name: "OUPINKE Black Pro",
        img: "./img/watch29.jpg",
        price: 78,
        cat:"Dress",
    },
    {
        id: 30,
        name: "OUPINKE Gold & Silver",
        img: "./img/watch30.jpg",
        price: 79,
        cat:"Dress",
    },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map((product)=>
        `
        <div class="product">
                <img class="img" src=${product.img} alt="" />
                <span class="name">${product.name}</span>
                <span class="priceText">${product.price}</span>
            </div>
        `
    ).join("");
    };

    displayProducts(data);

    searchInput.addEventListener("keyup", (e)=>{
        const value = e.target.value.toLowerCase();

        if(value){
            displayProducts(data.filter((item)=> item.name.toLowerCase().indexOf(value)!== -1));
        }else{
            displayProducts(data);
        }
    });

    const setCategories = () => {
        const allCats = data.map(item=> item.cat);
        const categories = ["All",...allCats.filter((item,i)=> {
            return allCats.indexOf(item)===i}),];
            categoriesContainer.innerHTML = categories.map(cat=>
                `
                <span class="cat">${cat}</span>
                `
            ).join("");


            categoriesContainer.addEventListener("click", (e)=>{const selectedCat = e.target.textContent;
                selectedCat === "All"
                ? displayProducts(data)
                : displayProducts(data.filter((item)=> item.cat === selectedCat));
            });
        };

        const setPrices = () => {
            const priceList = data.map((item)=> item.price);
            const minPrice = Math.min(...priceList);
            const maxPrice = Math.max(...priceList);

            priceRange.min = minPrice;
            priceRange.max = maxPrice;
            priceRange.value = maxPrice;
            priceValue.textContent = "$" + maxPrice;

            priceRange.addEventListener("input", (e)=>{
                priceValue.textContent = "$" + e.target.value;
                displayProducts(data.filter((item) => item.price <= e.target.value));
        });
    };

        setCategories();
        setPrices();
    