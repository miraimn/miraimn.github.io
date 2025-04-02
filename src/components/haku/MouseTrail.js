import { useEffect } from "react";

export default function MouseTrail(props) {
  var Stats = function () {
    var e = Date.now(),
      t = e,
      i = 0,
      n = 1 / 0,
      r = 0,
      s = 0,
      o = 1 / 0,
      a = 0,
      l = 0,
      h = 0,
      c = document.createElement("div");
    c.id = "stats";
    c.addEventListener(
      "mousedown",
      function (e) {
        e.preventDefault();
        v(++h % 2);
      },
      !1
    );
    var u = document.createElement("div");
    c.appendChild(u);
    var d = document.createElement("div");
    u.appendChild(d);
    var p = document.createElement("div");
    for (p.id = "fpsGraph", u.appendChild(p); 74 > p.children.length; ) {
      var f = document.createElement("span");
      p.appendChild(f);
    }
    var m = document.createElement("div");
    c.appendChild(m);
    var g = document.createElement("div");
    m.appendChild(g);
    var y = document.createElement("div");
    for (y.id = "msGraph", m.appendChild(y); 74 > y.children.length; ) {
      var f = document.createElement("span");
      y.appendChild(f);
    }
    var v = function (e) {
        switch ((h = e)) {
          case 0:
            u.style.display = "block";
            m.style.display = "none";
            break;
          case 1:
            u.style.display = "none";
            m.style.display = "block";
            break;
        }
      },
      b = function (e, t) {
        var i = e.appendChild(e.firstChild);
        i.style.height = t + "px";
      };
    return {
      REVISION: 11,
      domElement: c,
      setMode: v,
      begin: function () {
        e = Date.now();
      },
      end: function () {
        var h = Date.now();
        return (
          (i = h - e),
          (n = Math.min(n, i)),
          (r = Math.max(r, i)),
          (g.textContent = i + " MS (" + n + "-" + r + ")"),
          b(y, Math.min(30, 30 - 30 * (i / 200))),
          l++,
          h > t + 1e3 &&
            ((s = Math.round((1e3 * l) / (h - t))),
            (o = Math.min(o, s)),
            (a = Math.max(a, s)),
            (d.textContent = s + " FPS (" + o + "-" + a + ")"),
            b(p, Math.min(30, 30 - 30 * (s / 100))),
            (t = h),
            (l = 0)),
          h
        );
      },
      update: function () {
        e = this.end();
      },
    };
  };
  var ctx,
    hue,
    form,
    buffer,
    target = {},
    tendrils = [],
    settings = {};
  Math.TWO_PI = Math.PI * 2;

  function Oscillator(options) {
    this.init(options || {});
  }
  function Tendril(options) {
    this.init(options || {});
  }
  function init(event) {
    document.removeEventListener("mousemove", init);
    document.removeEventListener("touchstart", init);
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("touchmove", mousemove);
    document.addEventListener("touchstart", touchstart);

    mousemove(event);
    reset();
    loop();
  }

  function reset() {
    tendrils = [];

    for (var i = 0; i < settings.trails; i++) {
      tendrils.push(
        new Tendril({
          spring: 0.45 + 0.025 * (i / settings.trails),
        })
      );
    }
  }
  function Req() {
    window.setTimeout(loop, 1000 / 60);
  }
  var reverse = false;
  var a = 0;
  function loop() {
    if (!ctx.running) return;
    if (reverse) {
      a--;
      if (a < 0) {
        reverse = false;
      }
    } else {
      a++;
      if (a > 255) {
        reverse = true;
      }
    }
    ctx.globalCompositeOperation = "source-over";
    var gradient = ctx.createLinearGradient(
      0,
      0,
      ctx.canvas.width,

      ctx.canvas.height
    );

    // 添加颜色停止点
    gradient.addColorStop(0.0949, '#0723A7'); // 9.49%
        gradient.addColorStop(0.7253, '#587CF6'); // 72.53%
        gradient.addColorStop(0.998, '#ED662D');  

    // ctx.fillStyle = "#2A1D6B";
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "rgba(" + (a + 1 * 20) + ", 50, " + 255 + ", 0.25)";
    ctx.lineWidth = 1;

    for (var i = 0, tendril; i < settings.trails; i++) {
      tendril = tendrils[i];
      tendril.update();
      tendril.draw();
    }

    ctx.frame++;
    ctx.stats.update();
    Req();
  }

  function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function mousemove(event) {
    if (event.touches) {
      target.x = event.touches[0].pageX;
      target.y = event.touches[0].pageY;
    } else {
      target.x = event.clientX;
      target.y = event.clientY;
    }
    // event.preventDefault();
  }

  function touchstart(event) {
    if (event.touches.length == 1) {
      target.x = event.touches[0].pageX;
      target.y = event.touches[0].pageY;
    }
  }
  function OnLoad() {
    ctx = document.getElementById("caaan").getContext("2d");
    ctx.stats = new Stats();
    ctx.running = true;
    ctx.frame = 1;
    var gradient = ctx.createLinearGradient(
      0,
      0,
      ctx.canvas.width / 2,

      ctx.canvas.height
    );

    // 添加颜色停止点
    gradient.addColorStop(0, "#DD00B4"); // 起始颜色
    gradient.addColorStop(1, "#2D1E6B"); // 结束颜色（你可以根据需要更改）

    // ctx.fillStyle = "#2A1D6B";
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.frame++;
    ctx.stats.update();
    hue = new Oscillator({
      phase: Math.random() * Math.TWO_PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    document.addEventListener("mousemove", init);
    document.addEventListener("touchstart", init);
    resize();
  }
  function Draw() {
    settings.debug = true;
    settings.friction = 0.5;
    settings.trails = 20;
    settings.size = 50;
    settings.dampening = 0.25;
    settings.tension = 0.98;

    Oscillator.prototype = (function () {
      var value = 0;

      return {
        init: function (options) {
          this.phase = options.phase || 0;
          this.offset = options.offset || 0;
          this.frequency = options.frequency || 0.001;
          this.amplitude = options.amplitude || 1;
        },

        update: function () {
          this.phase += this.frequency;
          value = this.offset + Math.sin(this.phase) * this.amplitude;
          return value;
        },

        value: function () {
          return value;
        },
      };
    })();

    Tendril.prototype = (function () {
      function Node() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
      }

      return {
        init: function (options) {
          this.spring = options.spring + Math.random() * 0.1 - 0.05;
          this.friction = settings.friction + Math.random() * 0.01 - 0.005;
          this.nodes = [];

          for (var i = 0, node; i < settings.size; i++) {
            node = new Node();
            node.x = target.x;
            node.y = target.y;

            this.nodes.push(node);
          }
        },

        update: function () {
          var spring = this.spring,
            node = this.nodes[0];

          node.vx += (target.x - node.x) * spring;
          node.vy += (target.y - node.y) * spring;

          for (var prev, i = 0, n = this.nodes.length; i < n; i++) {
            node = this.nodes[i];

            if (i > 0) {
              prev = this.nodes[i - 1];

              node.vx += (prev.x - node.x) * spring;
              node.vy += (prev.y - node.y) * spring;
              node.vx += prev.vx * settings.dampening;
              node.vy += prev.vy * settings.dampening;
            }

            node.vx *= this.friction;
            node.vy *= this.friction;
            node.x += node.vx;
            node.y += node.vy;

            spring *= settings.tension;
          }
        },

        draw: function () {
          var x = this.nodes[0].x,
            y = this.nodes[0].y,
            a,
            b;

          ctx.beginPath();
          ctx.moveTo(x, y);

          for (var i = 1, n = this.nodes.length - 2; i < n; i++) {
            a = this.nodes[i];
            b = this.nodes[i + 1];
            x = (a.x + b.x) * 0.5;
            y = (a.y + b.y) * 0.5;

            ctx.quadraticCurveTo(a.x, a.y, x, y);
          }

          a = this.nodes[i];
          b = this.nodes[i + 1];

          ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
          ctx.stroke();
          ctx.closePath();
        },
      };
    })();
  }
  var style = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0%",
    left: "0%",
  };
  if (props.inner == 1) {
    style = {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0%",
      left: "0%",
    };
  }
  useEffect(() => {
    // loop()
    OnLoad();
  }, []);
  // window.onload = OnLoad
  return (
    <div className="haku-mouse-trail">
      <canvas style={style} id="caaan"></canvas>
      <Draw></Draw>
    </div>
  );
}
