var switchitoActive = function (selector) {
    document.querySelector("#i-all").className = "";
    document.querySelector("#i-photography").className = "";
    document.querySelector("#i-fashion").className = "";
    document.querySelector("#i-sculpture").className = "";

    document.querySelector(selector).className = "i-clicked";
  };

document.querySelector("#i-all").addEventListener("click", function(){
    switchitoActive("#i-all");
});
document.querySelector("#i-photography").addEventListener("click", function(){
    switchitoActive("#i-photography");
});
document.querySelector("#i-fashion").addEventListener("click", function(){
    switchitoActive("#i-fashion");
});
document.querySelector("#i-sculpture").addEventListener("click", function(){
    switchitoActive("#i-sculpture");
});

    