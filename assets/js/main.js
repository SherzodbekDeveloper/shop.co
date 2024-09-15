
window.addEventListener("DOMContentLoaded", () => {

  // function removeLoader(){
  //   const loader = document.querySelector('.loader')
  //   loader.style.display = "none"
  // }
  // setTimeout(removeLoader, 500)
  window.onload = function () {
    document.querySelector('.loader').style.display = "none"
  }
  const productsDatas = [
    {
      title: "Gaming Mouse",
      rate: 5,
      price: 70,
      discount: 15, // 15% off
      image:
        "https://redragonshop.com/cdn/shop/products/ltcmouse.png?v=1597816435",
    },
    {
      title: "Mechanical Keyboard",
      rate: 4,
      price: 130,
      discount: 20, // 20% off
      image:
        "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png",
    },
    {
      title: "4K Monitor",
      rate: 5,
      price: 400,
      discount: 30, // 30% off
      image:
        "https://images.samsung.com/is/image/samsung/ie-monitor-ur55-lu28r550uquxen-frontblack-199058842?$650_519_PNG$",
    },
    {
      title: "USB-C Hub",
      rate: 4,
      price: 50,
      discount: 10, // 10% off
      image:
        "https://www.sitecom.com/media/4d/7c/ac/1686736087/8716502031658_1.png",
    },
    {
      title: "Wireless Mouse",
      rate: 4,
      price: 40,
      discount: 5, // 5% off
      image:
        "https://resource.logitech.com/content/dam/logitech/en/products/mice/m185/gallery/m185-gallery-1-grey-emea.png",
    },
    {
      title: "Noise Cancelling Earbuds",
      rate: 5,
      price: 150,
      discount: 25, // 25% off
      image:
        "https://www.denon.com/dw/image/v2/BGJH_PRD/on/demandware.static/-/Sites-master-catalog-soundunited/default/dwf2bd0a6c/denon/PDP_images/HeadphonesWirelessEarbuds/DenonNoiseCancellingEarbuds-Black/DenonNoiseCancelling-Black_front1.png?sw=2160",
    },
    {
      title: "Smart Thermostat",
      rate: 4,
      price: 180,
      discount: 15, // 15% off
      image:
        "https://png.pngtree.com/png-vector/20221103/ourmid/pngtree-nest-thermostat-blue-panel-industry-central-vector-png-image_15171184.png",
    },
    {
      title: "Tablet Stand",
      rate: 4,
      price: 25,
      discount: 10, // 10% off
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/sa_en/sm-a235flbvmea/gallery/sa-en-galaxy-a23-sm-a235-sm-a235flbvmea-532155476?$650_519_PNG$",
    },
    {
      title: "Wi-Fi Router",
      rate: 4,
      price: 100,
      discount: 20, // 20% off
      image:
        "https://trueview.co.in/wp-content/uploads/2024/02/4G-5G-Wireless-Router-05.webp",
    },
  ];

  const toproductsDatas = [
    {
      title: "Smartphone Case",
      rate: 3,
      price: 80,
      discount: 10, // 10% off
      image: "./assets/imgs/ProductsImages/product2.png",
    },

    {
      title: "Portable Charger",
      rate: 3,
      price: 60,
      discount: 15, // 15% off
      image: "./assets/imgs/ProductsImages/product4.png",
    },
    {
      title: "Wireless Earbuds",
      rate: 4,
      price: 120,
      discount: 20, // 20% off
      image: "./assets/imgs/ProductsImages/product1.png",
    },
    {
      title: "Laptop Sleeve",
      rate: 4,
      price: 45,
      discount: 5, // 5% off
      image: "./assets/imgs/ProductsImages/product7.png",
    },
    {
      title: "Smart Watch",
      rate: 4,
      price: 200,
      discount: 20, // 20% off
      image: "./assets/imgs/ProductsImages/product5.png",
    },
    {
      title: "Fitness Tracker",
      rate: 3,
      price: 90,
      discount: 12, // 12% off
      image: "./assets/imgs/ProductsImages/product6.png",
    },
    {
      title: "Bluetooth Speaker",
      rate: 4,
      price: 150,
      discount: 25, // 25% off
      image: "./assets/imgs/ProductsImages/product3.png",
    },

    {
      title: "Noise Cancelling Headphones",
      rate: 3,
      price: 180,
      discount: 30, // 30% off
      image: "./assets/imgs/ProductsImages/product8.png",
    },
  ];

  const comments = [
    {
      id: 1,
      name: "John Doe",
      comment: "This is an excellent product! I've been using it for a while now and it has significantly improved my workflow. Highly recommend it to everyone!",
      stars: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "The quality is good, but I faced some minor issues with the setup process. Overall, it's worth the price and serves its purpose.",
      stars: 4
    },
    {
      id: 3,
      name: "Mark Johnson",
      comment: "Honestly, I expected more from this product. It's decent but lacks some essential features that I need for my work. Could use some improvements.",
      stars: 3
    },
    {
      id: 4,
      name: "Emily Davis",
      comment: "I am really impressed by the customer service! They were quick to resolve my issue and now the product works flawlessly. A fantastic experience overall.",
      stars: 5
    },
    {
      id: 5,
      name: "Michael Brown",
      comment: "The design is sleek and modern, but the performance is slightly underwhelming compared to other options. Still, a good choice for those on a budget.",
      stars: 4
    },
    {
      id: 6,
      name: "Lisa Wilson",
      comment: "This product has exceeded my expectations! The user interface is intuitive, and it performs exceptionally well under various conditions. Definitely recommend!",
      stars: 5
    },
    {
      id: 7,
      name: "Tom Harris",
      comment: "Not satisfied with this product. It feels overpriced for what it offers, and there are better alternatives available in the market. Wouldn't recommend.",
      stars: 2
    },
    {
      id: 8,
      name: "Sara Clark",
      comment: "The product arrived on time, and the packaging was excellent. It works well for my needs, though there are some minor improvements that could be made.",
      stars: 4
    },
    {
      id: 9,
      name: "Chris Lewis",
      comment: "I love this product! It’s been extremely helpful for my daily tasks, and I haven’t encountered any issues so far. Great value for the money!",
      stars: 5
    },
    {
      id: 10,
      name: "Anna Walker",
      comment: "It's okay, but I expected a bit more. The product functions as described, but there are a few things that could be improved, like the battery life.",
      stars: 3
    }
  ];



  const xBtn = document.querySelector(".xBtn");
  const headerTop = document.querySelector(".header-top");
  const menuBtn = document.querySelector(".menu-btn-mobile");
  const closeBtn = document.querySelector(".close-btn-mobile");
  const navLists = document.querySelector(".nav__lists");
  const searchBtnMobile = document.querySelector(".search-btn-mobile");
  const searchForm = document.querySelector(".search-form");
  const overlay = document.querySelector(".overlay");
  const header = document.querySelector(".header");

  xBtn.addEventListener("click", () => {
    headerTop.remove();
    if (window.innerWidth <= 1024) {
      navLists.style.paddingTop = "25px";
    } else {
      navLists.style.paddingTop = "0";
    }
  });
  menuBtn.addEventListener("click", () => {
    closeBtn.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    navLists.classList.add("show");
    document.body.style.overflow = "hidden";
  });
  closeBtn.addEventListener("click", () => {
    closeBtn.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    navLists.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  searchBtnMobile.addEventListener("click", () => {
    searchForm.classList.toggle("show");
    overlay.classList.toggle("hidden");
  });

  let lastScroll = window.scrollY;
  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll >= lastScroll && currentScroll >= 50) {
      header.style.transform = "translate3d(0,-100%,0)";
    } else {
      header.style.transform = "translate3d(0,0%,0)";
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1024) {
      navLists.style.paddingTop = "25px";
    } else {
      navLists.style.paddingTop = "0";
    }
  });

  const bottomNumbers = document.querySelectorAll(".bottom-numbers h3");

  const numbers = [
    {
      element: bottomNumbers[0],
      end: 200,
    },
    {
      element: bottomNumbers[1],
      end: 2000,
    },
    {
      element: bottomNumbers[2],
      end: 30000,
    },
  ];

  function animationCountUp(element, end, duration) {
    const incrementTime = 10;
    const steps = duration / incrementTime;
    const increment = end / steps;

    let currentNumber = 0;
    let finishTime = 0;

    const interval = setInterval(() => {
      finishTime += incrementTime;
      currentNumber += increment;
      element.innerText = `${currentNumber.toLocaleString()}+`;
      if (finishTime >= duration || currentNumber >= end) {
        clearInterval(interval);
        element.innerText = `${end.toLocaleString()}+`;
      }
    }, incrementTime);
  }

  numbers.forEach((number) => {
    animationCountUp(number.element, number.end, 1000);
  });

  const productsCardsContainers = document.querySelectorAll(".products-cards");

  function createStar(currentStar) {
    let stars = "";
    for (let index = 1; index <= 5; index++) {
      if (index <= currentStar) {
        stars += ` <i class="ri-star-fill"></i>`;
      } else {
        stars += ` <i class="ri-star-line"></i>`;
      }
    }
    return stars;
  }

  function createProducts(container, productDatas) {
    container.innerHTML = "";
    productDatas.forEach((product) => {
      const newDiv = document.createElement("div");
      newDiv.className = "product-card";
      newDiv.innerHTML = `
    <div class="card-img" >
    <img draggable="false" src="${product.image}" alt="" loading ="lazy" />
    </div>
    <div class="card-content">
    <h2>${product.title}</h2>
    <div class="rating">
    <div class="stars">
    ${createStar(product.rate)}
    </div>
    <div class="rating-number">
    <span>${product.rate} /</span>
    <span class="rating-grey">5</span>
    </div>
    </div>
    <div class="price-div">
    <span class="price">$${product.price - (product.price / 100) * product.discount
        }</span>
          <span class="discount-price">$${product.price}</span>
          <span class="discount-pers">-${product.discount}%</span>
          </div>
          </div>`;

      container.appendChild(newDiv);
    });
  }

  createProducts(productsCardsContainers[0], productsDatas);
  createProducts(productsCardsContainers[1], toproductsDatas);

  productsCardsContainers.forEach((container) => {
    let isDown = false;
    let startX;
    let scrolLeft;
    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("active");
      startX = e.pageX;
      scrolLeft = container.scrollLeft;
    });
    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("active");
    });
    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("active");
    });
    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const currentX = e.pageX;
      const walk = currentX - startX;
      container.scrollLeft = scrolLeft - walk;
    });
  });


  const carousel = document.querySelector('.customer-cards');
  const carouselBtns = document.querySelectorAll('.customer-btns button');
  const cardWidth = carousel.querySelector('.card').offsetWidth + 20;



  function createCarousel(parent, carouselObj) {
    parent.innerHTML = ""

    carouselObj.forEach((element) => {
      const commentDiv = document.createElement('div')
      commentDiv.className = "card"

      commentDiv.innerHTML += `
    <div class="card-stars">
    ${createStar(element.stars)}
    </div>
    <div class="card-name">
    <h3>${element.name}</h3>
    <span><i class="ri-checkbox-circle-fill"></i></span>
    </div>
    <p>
    ${element.comment}
    </p>
    `
      parent.appendChild(commentDiv)

    })
  }

  createCarousel(carousel, comments)

  let isDragging = false,
    dragStartX,
    dragScrollLeft;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    dragStartX = e.pageX;
    dragScrollLeft = carousel.scrollLeft;
    carousel.style.scrollSnapType = 'none';
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = dragScrollLeft - (e.pageX - dragStartX);
  };

  const dragStop = () => {
    carousel.classList.remove("dragging");
    isDragging = false;
    carousel.style.scrollSnapType = 'x mandatory';
  };

  let isScrolling = false;

  carouselBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (isScrolling) return;
      isScrolling = true;

      const cardWidth = carousel.querySelector('.card').offsetWidth + 20;
      const direction = index === 0 ? -1 : 1;
      carousel.scrollBy({
        left: direction * cardWidth,
        behavior: "smooth"
      });

      setTimeout(() => {
        isScrolling = false;
      }, 500);
    });
  });

  carousel.addEventListener('mousedown', dragStart);
  carousel.addEventListener('mousemove', dragging);
  carousel.addEventListener('mouseleave', dragStop);
  carousel.addEventListener('mouseup', dragStop);

})