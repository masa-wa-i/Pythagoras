var o = document.getElementById("num");
var s = document.getElementById("wa");
var t = document.getElementById("w");
o.disabled = false;
function a() {
  var p = [];
  var z = [];
  const w = parseInt(o.value, 10);
  if (w >= 0) {
    s.innerHTML = "";
    o.disabled = true;
    for (var i = 1; i <= w; i++) {
      p.push(i);
    }
    for (var e = 1; e <= w - 1; e++) {
      for (var f = 2; p[e] * f <= w; f++) {
        if (p.indexOf(p[e] * f) != -1) {
          p.splice(p.indexOf(p[e] * f), 1);
        }
      }
    }
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
    s.innerHTML = p.join("<br>");
    t.innerHTML = z.join("<br>");
    o.disabled = false;
  } else {
    s.innerHTML = "your brain is bad";
  }
}
