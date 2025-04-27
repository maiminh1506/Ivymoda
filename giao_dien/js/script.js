    //header
    const header = document.querySelector("header")
    window.addEventListener("scroll", function(){
        x = window.pageYOffset
        if(x > 0) {
            header.classList.add("sticky")
        }
        else {
            header.classList.remove("sticky")
        }
    })

    //-------- Menu - SLIDERBAR - CARTEGORY ------------//
    const itemSliderBar = document.querySelectorAll(".cartegory-left-li");

    itemSliderBar.forEach(function (menu, index) {
        menu.addEventListener("click", function () {
            itemSliderBar.forEach(function (item) {
                if (item !== menu) {
                    item.classList.remove("block");
                }
            });
            menu.classList.toggle("block");
        });
    });

    //-------PRODUCT ---------//
    const bigImg = document.querySelector(".product-content-left-big-img img"); // Chỉ chọn ảnh lớn duy nhất
const smallImg = document.querySelectorAll(".product-content-left-small-img img"); // Chọn tất cả ảnh nhỏ

smallImg.forEach(function (imgItem) {
    imgItem.addEventListener("click", function () {
        bigImg.src = imgItem.src; // Đổi ảnh lớn thành ảnh của phần tử nhỏ được nhấn
    });
});


    const baoquan = document.querySelector(".baoquan");
    const chitiet = document.querySelector(".chitiet");
    const baoquanContent = document.querySelector(".product-content-right-button-content-baoquan");
    const chitietContent = document.querySelector(".product-content-right-button-content-chitiet");

    if (baoquanContent && chitietContent) {
        baoquanContent.style.display = "none";
        chitietContent.style.display = "block";
    }

    if (baoquan) {
        baoquan.addEventListener("click", function () {
            document.querySelector(".product-content-right-button-content-chitiet").style.display = "none";
            document.querySelector(".product-content-right-button-content-baoquan").style.display = "block";
        });
    }

    if (chitiet) {
        chitiet.addEventListener("click", function () {
            document.querySelector(".product-content-right-button-content-chitiet").style.display = "block";
            document.querySelector(".product-content-right-button-content-baoquan").style.display = "none";
        });
    }

    const butTon = document.querySelector(".product-content-right-button-top")
    if (butTon) {
        butTon.addEventListener("click", function () {
            document.querySelector(".product-content-right-button-content-big").classList.toggle("activeB")
            });
        };

