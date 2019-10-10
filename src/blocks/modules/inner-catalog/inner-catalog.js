const line = document.querySelector(".catalog-sidebar__filter-item-range-controls");
console.info(line);


if (line) {

      let bar = document.querySelector(".catalog-sidebar__filter-item-range-active");
      let minPrice = document.querySelector("input[name='min-price']");
      let maxPrice = document.querySelector("input[name='max-price']");
      let point1 = document.querySelector(".catalog-sidebar__filter-item-range-min");
      let point2 = document.querySelector(".catalog-sidebar__filter-item-range-max");
      let coordsLine = line.getBoundingClientRect();
      let maxPriceValue = 5000;
      let pixelPriceValue = maxPriceValue / line.clientWidth;
      let downTarget = "";


      const mouseDown = function(e) {
        downTarget = e.target;
        var r = e.clientX - downTarget.getBoundingClientRect().left
          , t = function(e) {
            minPrice.style.pointerEvents = "none",
            maxPrice.style.pointerEvents = "none";
            var t = point1.getBoundingClientRect()
              , o = point2.getBoundingClientRect()
              , s = coordsLine.left - t.width / 2
              , i = s - coordsLine.left
              , a = o.left - t.width
              , l = t.left + t.width
              , n = l - coordsLine.left
              , c = coordsLine.right - o.width / 2
              , u = e.clientX - r
              , d = function(e, r, o, s) {
                u >= e && u <= o && (downTarget.style.left = u - coordsLine.left + "px"),
                u < e && (downTarget.style.left = r + "px"),
                u > o && (downTarget.style.left = o - coordsLine.left - 2 + "px"),
                bar.style.left = point1.offsetLeft + t.width / 2 + "px",
                bar.style.width = point2.offsetLeft - point1.offsetLeft + "px"
            };
            downTarget.classList.contains("catalog-sidebar__filter-item-range-min") && d(s, i, a),
            downTarget.classList.contains("catalog-sidebar__filter-item-range-max") && d(l, n, c),
            minPrice.value = (point1.offsetLeft - i) * pixelPriceValue,
            maxPrice.value = (point2.offsetLeft + point2.offsetWidth / 2) * pixelPriceValue
        };
        document.addEventListener("mousemove", t),
        document.addEventListener("mouseup", function() {
            downTarget = "",
            document.removeEventListener("mousemove", t),
            minPrice.style.pointerEvents = "auto",
            maxPrice.style.pointerEvents = "auto"
        })
    };
    line.addEventListener("mousedown", mouseDown),
    line.ondragstart = function() {
        return !1
    }
}