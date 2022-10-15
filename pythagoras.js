var o = document.getElementById("num");
var t = document.getElementById("w");
var s = document.getElementById("btn").disabled;
o.disabled = false;
function a() {
  s = true;
  o.disabled = true;
  var z = [];
  const w = parseInt(o.value, 10);
  if (w >= 0) {
    t.innerHTML = "";
    for (var y = 1; y <= w; y++) {
      for (var x = 1; x <= w; x++) {
        if (y > x) {
          if ((y - x) % 2 != 0) {
            var a = true;
            for (var v = 2; v <= x; v++) {
              if (y % v == 0 && x % v == 0) {
                a = false;
                break;
              }
            }
            if (a == true) {
              z.push([y ** 2 - x ** 2, 2 * y * x, y ** 2 + x ** 2]);
            }
          }
        }
      }
    }
    t.innerHTML = z.join("<br>");
    s = false;
    o.disabled = false;
  } else {
    t.innerHTML = "your brain is bad";
    s = false;
    o.disabled = false;
  }
}
