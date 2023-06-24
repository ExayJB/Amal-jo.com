var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){

        if(MenuItems.style.maxHeight == "0px"){

            MenuItems.style.maxHeight = "200px";

        }
        else{

            MenuItems.style.maxHeight = "0px"
        }



    }
/***************************CONTACT TOGGLE********************************************** */



      /*******************************************SELLER 1*********************************************** */

    
          
    let sellerno1products = {
        data: [
          {
            productName: "Face Glitter",
            productSeller: "@Afnan_glitter",
            category: "Accs",
            price: "50/hr",
            image: "img/afnanglitter1.jpeg",
            productlink: "https://www.instagram.com/afnan_glitter/",

          },
          {
            productName: "Face Glitter",
            category: "Accs",
            productSeller: "@Afnan_glitter",
            price: "50/hr",
            image: "img/afnanglitter2.jpeg",
            productlink: "https://www.instagram.com/afnan_glitter/",

          },
          {
            productName: "Face Glitter",
            category: "Accs",
            productSeller: "@Afnan_glitter",
            price: "50/hr",
            image: "img/afnanglitter3.jpeg",
            productlink: "https://www.instagram.com/afnan_glitter/",

          },
          {
            productName: "Face Glitter",
            category: "Accs",
            productSeller: "@Afnan_glitter",
            price: "50/hr",
            image: "img/afnanglitter4.jpeg",
            productlink: "https://www.instagram.com/afnan_glitter/",

          },
          {
            productName: "Face Glitter",
            category: "Accs",
            productSeller: "@Afnan_glitter",
            price: "50/hr",
            image: "img/afnanglitter5.jpeg",
            productlink: "https://www.instagram.com/afnan_glitter/",

          },
          
        ],
      }
  ;
  for (let i of sellerno1products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    
    
    //product seller
    let Sellername = document.createElement("h6");
    Sellername.classList.add("seller-name");
    Sellername.innerText = i.productSeller.toUpperCase();
    container.appendChild(Sellername);
    

    
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //product link
    //let productlink = document.createElement("h6");
    //productlink.classList.add("product-link");
    //productlink .innerText = i.productlink.toUpperCase();
    //container.appendChild(productlink);



    //price
    let price = document.createElement("h6");
    price.innerText = "JOD " + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("sellerno1products").appendChild(card);
    card.onclick = function() {
      window.location.href = 'https://www.instagram.com/afnan_glitter/';
  };
  }


  /*******************************************SELLER 2*********************************************** */



  let sellerno2products = {
    data: [
      {
        productName: "Candle | شمعة",
        category: "Decor",
        productSeller: "@Eva_Art",
        price: "89",
        image: "img/Eva_art1.jpeg",
        productlink: "https://www.instagram.com/afnan_glitter/",

      },
      {
        productName: "Candle | شمعة",
        category: "Decor",
        productSeller: "@Eva_Art",
        price: "189",
        image: "img/Eva_art2.jpeg",
        productlink: "https://www.instagram.com/afnan_glitter/",

      },
      {
        productName: "Coaster",
        category: "Decor",
        productSeller: "@Eva_Art",
        price: "49",
        image: "img/Eva_art3.jpeg",
        productlink: "youtube",

      },

    ],
  }
  ;


  for (let i of sellerno2products.data) {
        //Create Card
        let card = document.createElement("div");
        //Card should have category and should stay hidden initially
        card.classList.add("card", i.category, "hide");
        //image div
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        //img tag
        let image = document.createElement("img");
        image.setAttribute("src", i.image);


        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        
        //container
        let container = document.createElement("div");
        container.classList.add("container");
        
        
        //product seller
        let Sellername = document.createElement("h6");
        Sellername.classList.add("seller-name");
        Sellername.innerText = i.productSeller.toUpperCase();
        container.appendChild(Sellername);

        
        //product name
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = i.productName.toUpperCase();
        container.appendChild(name);

        //product link
        //let productlink = document.createElement("h6");
        //productlink.classList.add("product-link");
        //productlink .innerText = i.productlink.toUpperCase();
        //container.appendChild(productlink);



        //price
        let price = document.createElement("h6");
        price.innerText = "JOD " + i.price;
        container.appendChild(price);
      
        card.appendChild(container);
        document.getElementById("sellerno2products").appendChild(card);
        card.onclick = function() {
          window.location.href = 'https://www.instagram.com/';
      };
      }
   



/*******************************************SELLER 3*********************************************** */


let sellerno3products = {
  data: [
    {
      productName: "هلال ونجمة من خيوط المكرمة",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "20",
      image: "img/Emanarts1.jpeg",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Dream Catcher | دريم كاتشر",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "الكبير 20 / الصغير 15",
      image: "img/Emanarts2.jpeg",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },{
      productName: " KeyChain | ميدالية",
      category: "Accs",
      productSeller: "@Eman_Art",
      price: "2",
      image: "img/Emanarts3.jpeg",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },{
      productName: " Plant Pot Holder | مكرمة لتعليق النباتات",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "15",
      image: "img/Emanarts4.jpeg",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },{
      productName: "Wool Scarf | شال صوف",
      category: "Clothes",
      productSeller: "@Eman_Art",
      price: "50",
      image: "img/Emanarts5.jpeg",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Key Chain | ميدالية",
      category: "Accs",
      productSeller: "@Eman_Art",
      price: "2",
      image: "img/Emanarts6.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Key Chain | ميدالية",
      category: "Accs",
      productSeller: "@Eman_Art",
      price: "1",
      image: "img/Emanarts7.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Key Chain | ميدالية",
      category: "Accs",
      productSeller: "@Eman_Art",
      price: "1",
      image: "img/Emanarts8.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Small Plant Pot Holder | حاملة نباتات صغيرة",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "5",
      image: "img/Emanarts9.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Medium Plant Pot Holder | حاملة نباتات وسط",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "10",
      image: "img/Emanarts10.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Double Plant Pot Holder | حاملة نباتات ثنائية",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "20",
      image: "img/Emanarts11.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Triple Plant Pot Holder | حاملة نباتات ثلاثية",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "25",
      image: "img/Emanarts12.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Medium Plant Pot Holder | حاملة نباتات وسط",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "10",
      image: "img/Emanarts13.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Large Plant Pot Holder | حاملة نباتات كبيرة",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "15",
      image: "img/Emanarts14.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Large Plant Pot Holder | حاملة نباتات كبيرة",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "15",
      image: "img/Emanarts15.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Tree shaped Dream Catcher | دريم كاتشر شكل شجرة",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "20",
      image: "img/Emanarts16.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Tree shaped Dream Catcher | دريم كاتشر شكل شجرة",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "20",
      image: "img/Emanarts17.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Candle Holder Muliple Sizes |حاملة شموع متعدد الأحجام",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "كبير 6 / وسط 5/ صغير 4",
      image: "img/Emanarts18.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Car Decoration  | تعليقة سيارة",
      category: "Accs",
      productSeller: "@Eman_Art",
      price: "2.50",
      image: "img/Emanarts19.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Four Candle Holder | حاملة شموع رباعية",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "15",
      image: "img/Emanarts20.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    {
      productName: "Cloth Napkins Decor  | ربطة منديل سفرة",
      category: "Decor",
      productSeller: "@Eman_Art",
      price: "2",
      image: "img/Emanarts21.jfif",
      //productlink: "https://www.instagram.com/afnan_glitter/",

    },
    
  ],
}
;
     


for (let i of sellerno3products.data) {
//Create Card
let card = document.createElement("div");
//Card should have category and should stay hidden initially
card.classList.add("card", i.category, "hide");
//image div
let imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");
//img tag
let image = document.createElement("img");
image.setAttribute("src", i.image);


imgContainer.appendChild(image);
card.appendChild(imgContainer);

//container
let container = document.createElement("div");
container.classList.add("container");


//product seller
let Sellername = document.createElement("h6");
Sellername.classList.add("seller-name");
Sellername.innerText = i.productSeller.toUpperCase();
container.appendChild(Sellername);


//product name
let name = document.createElement("h5");
name.classList.add("product-name");
name.innerText = i.productName.toUpperCase();
container.appendChild(name);

//product link
//let productlink = document.createElement("h6");
//productlink.classList.add("product-link");
//productlink .innerText = i.productlink.toUpperCase();
//container.appendChild(productlink);



//price
let price = document.createElement("h6");
price.innerText = "JOD " + i.price;
container.appendChild(price);

card.appendChild(container);
document.getElementById("sellerno3products").appendChild(card);
card.onclick = function() {
  window.location.href = 'https://www.instagram.com/eman_arts0/';
};
}


/**********************************************SELLER 4 *************************************** */
let sellerno4products = {
  data: [
    {
      productName: "Table Lamb | وحدة إنارة من جذع شجرة",
      category: "Decor",
      productSeller: "@tree.trunk_decoration",
      price: "20",
      image: "img/TTD1.jpeg",

    },
    {
      productName: "Clock | ساعة من جذع شجرة",
      category: "Decor",
      productSeller: "@Eva_Art",
      price: "17",
      image: "img/TTD2.jpeg",

    },
    

  ],
}
;


for (let i of sellerno4products.data) {
      //Create Card
      let card = document.createElement("div");
      //Card should have category and should stay hidden initially
      card.classList.add("card", i.category, "hide");
      //image div
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      //img tag
      let image = document.createElement("img");
      image.setAttribute("src", i.image);


      imgContainer.appendChild(image);
      card.appendChild(imgContainer);
      
      //container
      let container = document.createElement("div");
      container.classList.add("container");
      
      
      //product seller
      let Sellername = document.createElement("h6");
      Sellername.classList.add("seller-name");
      Sellername.innerText = i.productSeller.toUpperCase();
      container.appendChild(Sellername);

      
      //product name
      let name = document.createElement("h5");
      name.classList.add("product-name");
      name.innerText = i.productName.toUpperCase();
      container.appendChild(name);

      //product link
      //let productlink = document.createElement("h6");
      //productlink.classList.add("product-link");
      //productlink .innerText = i.productlink.toUpperCase();
      //container.appendChild(productlink);



      //price
      let price = document.createElement("h6");
      price.innerText = "JOD " + i.price;
      container.appendChild(price);
    
      card.appendChild(container);
      document.getElementById("sellerno4products").appendChild(card);
      card.onclick = function() {
        window.location.href = 'https://www.instagram.com/tree.trunk_decoration/';
    };
    }


    /**********************************************SELLER 5 *************************************** */
let sellerno5products = {
  data: [
    {
      productName: "Scarf | لفحة جوخ مطرزة",
      category: "Clothes",
      productSeller: "@farahh.st0re",
      price: "7",
      image: "img/farahstore1.jpeg",

    },
    {
      productName: "Graduation Scarf |  وشاحات تخرج مطرز",
      category: "Clothes",
      productSeller: "@farahh.st0re",
      price: "10",
      image: "img/farahstore2.jpeg",

    },
    {
      productName: "Graduation Cap |  طواقي تخرج مطرزة",
      category: "Clothes",
      productSeller: "@farahh.st0re",
      price: "10",
      image: "img/farahstore3.jpeg",

    },
    

  ],
}
;


for (let i of sellerno5products.data) {
      //Create Card
      let card = document.createElement("div");
      //Card should have category and should stay hidden initially
      card.classList.add("card", i.category, "hide");
      //image div
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      //img tag
      let image = document.createElement("img");
      image.setAttribute("src", i.image);


      imgContainer.appendChild(image);
      card.appendChild(imgContainer);
      
      //container
      let container = document.createElement("div");
      container.classList.add("container");
      
      
      //product seller
      let Sellername = document.createElement("h6");
      Sellername.classList.add("seller-name");
      Sellername.innerText = i.productSeller.toUpperCase();
      container.appendChild(Sellername);

      
      //product name
      let name = document.createElement("h5");
      name.classList.add("product-name");
      name.innerText = i.productName.toUpperCase();
      container.appendChild(name);

      //product link
      //let productlink = document.createElement("h6");
      //productlink.classList.add("product-link");
      //productlink .innerText = i.productlink.toUpperCase();
      //container.appendChild(productlink);



      //price
      let price = document.createElement("h6");
      price.innerText = "JOD " + i.price;
      container.appendChild(price);
    
      card.appendChild(container);
      document.getElementById("sellerno5products").appendChild(card);
      card.onclick = function() {
        window.location.href = 'https://instagram.com/farahh.st0re?igshid=YmMyMTA2M2Y=';
    };
    }

    /**********************************SELLER 6**************************************** */


    


    let sellerno6products = {
  data: [
    {
      productName: "Custom made braclates | أساور مصنوعة يدويًا",
      category: "Accs",
      productSeller: "@handmade_libra",
      price: "starting 1",
      image: "img/libra1.jpeg",

    },
    {
      productName: "Custom made necklaces | سناسيل مصنوعة يدويًا",
      category: "Accs",
      productSeller: "@handmade_libra",
      price: "starting 2",
      image: "img/libra2.jpeg",

    },
    {
      productName: "Custom made Straps | تعليقات نظارات/كمامات/هواتف ",
      category: "Accs",
      productSeller: "@handmade_libra",
      price: "starting 2",
      image: "img/libra3.jpeg",

    },
    {
      productName: "braclates | أساور",
      category: "Accs",
      productSeller: "@handmade_libra",
      price: "4 per pair",
      image: "img/libra4.jpeg",

    },
    {
      productName: "Custom made rings | خواتم خرز ",
      category: "Accs",
      productSeller: "@handmade_libra",
      price: "1 per 3 rings",
      image: "img/libra5.jpeg",

    },

  ],
}
;


for (let i of sellerno6products.data) {
      //Create Card
      let card = document.createElement("div");
      //Card should have category and should stay hidden initially
      card.classList.add("card", i.category, "hide");
      //image div
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      //img tag
      let image = document.createElement("img");
      image.setAttribute("src", i.image);


      imgContainer.appendChild(image);
      card.appendChild(imgContainer);
      
      //container
      let container = document.createElement("div");
      container.classList.add("container");
      
      
      //product seller
      let Sellername = document.createElement("h6");
      Sellername.classList.add("seller-name");
      Sellername.innerText = i.productSeller.toUpperCase();
      container.appendChild(Sellername);

      
      //product name
      let name = document.createElement("h5");
      name.classList.add("product-name");
      name.innerText = i.productName.toUpperCase();
      container.appendChild(name);

      //product link
      //let productlink = document.createElement("h6");
      //productlink.classList.add("product-link");
      //productlink .innerText = i.productlink.toUpperCase();
      //container.appendChild(productlink);



      //price
      let price = document.createElement("h6");
      price.innerText = "JOD " + i.price;
      container.appendChild(price);
    
      card.appendChild(container);
      document.getElementById("sellerno6products").appendChild(card);
      card.onclick = function() {
        window.location.href = 'https://instagram.com/farahh.st0re?igshid=YmMyMTA2M2Y=';
    };
    }
    
    
    
    
    
    
    
  

/******************************************************************* */
      //parameter passed from button (Parameter same as category)
      function filterProduct(value) {
        //Button class code
        let buttons = document.querySelectorAll(".button-value");
        buttons.forEach((button) => {
          //check if value equals innerText
          if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
          } else {
            button.classList.remove("active");
          }
        });
      
        //select all cards
        let elements = document.querySelectorAll(".card");
        //loop through all cards
        elements.forEach((element) => {
          //display all cards on 'all' button click
          if (value == "all") {
            element.classList.remove("hide");
          } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
              //display element based on category
              element.classList.remove("hide");
            } else {
              //hide other elements
              element.classList.add("hide");
            }
          }
        });
      }
      
      //Search button click
      document.getElementById("search").addEventListener("click", () => {
        //initializations
        let searchInput = document.getElementById("search-input").value;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".card");
      
        //loop through all elements
        elements.forEach((element, index) => {
          //check if text includes the search value
          if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
          } else {
            //hide others
            cards[index].classList.add("hide");
          }
        });
      });
      
      //Initially display all products
      window.onload = () => {
        filterProduct("all");
      };