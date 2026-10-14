export const topic26 = {
  id: 26,
  code: 'Chapter 26',
  title: 'JavaScript Graphics & Data Visualization',
  subtitle: 'HTML5 Canvas 2D, SVG, Plotly.js, Chart.js, Google Charts, and D3.js data binding',
  category: 'advanced',
  phase: 'Advanced',
  estimatedTime: '40 mins',
  desc: 'Unlock the visual capabilities of modern JavaScript: master the HTML5 Canvas 2D rendering context for high-performance immediate-mode pixel drawing, paths, arcs, gradients, coordinate transformations, and 60fps requestAnimationFrame game loops; compare Canvas against declarative, retain-mode Scalable Vector Graphics (SVG); build responsive, publication-quality dashboards using industry-standard visualization engines including Chart.js, Plotly.js, and Google Charts; and architect custom data-driven visualizations using D3.js selections, dynamic data joins, and mathematical scales.',

  // Layer 1: Expected to Learn
  expectedToLearn: [
    'Understand the architectural differences between Immediate-Mode (Canvas) and Retained-Mode (SVG) graphics.',
    'Render geometric shapes, custom paths, strokes, fills, and arcs using the HTML5 Canvas 2D Context.',
    'Apply coordinate transformations (translate, rotate, scale) and manage state stacks with ctx.save() and ctx.restore().',
    'Execute fluid, battery-friendly visual animations using the window.requestAnimationFrame() loop.',
    'Programmatically create and manipulate Scalable Vector Graphics (SVG) elements directly in the DOM.',
    'Build declarative, interactive scientific and financial charts using Plotly.js traces and layouts.',
    'Construct responsive, animated business charts (bar, line, doughnut) with Chart.js configurations.',
    'Integrate the Google Visualization API with google.charts.load() and google.visualization.DataTable.',
    'Bind raw datasets to DOM elements and compute spatial coordinates using D3.js scales and data joins.',
    'Select the optimal graphics paradigm based on DOM node overhead, interactivity, and dataset scale.'
  ],

  // Layer 2: Real-World Analogy
  analogy: {
    concept: 'Whiteboards, Stained Glass, Stamp Sets, and Lego Bricks',
    analogyText: 'Think of HTML5 Canvas as an artist\'s physical whiteboard: when you draw a red circle with dry-erase marker, the board doesn\'t remember that a "circle" exists—it only knows which microscopic pixels are red. To move the circle, you must wipe the board clean and repaint it at the new coordinates (Immediate Mode). Scalable Vector Graphics (SVG) is like a stained-glass window assembled from individual glass panes: every circle, square, and triangle is its own physical piece that you can grab, inspect, recolor, or click individually (Retained Mode). Chart.js and Plotly.js are pre-assembled rubber stamping sets: you provide ink (data), and with one press you produce gorgeous, pre-styled bar charts and scatter plots with built-in tooltips. Finally, D3.js is a bucket of raw architectural Lego bricks and measuring rulers: it doesn\'t give you a pre-built house, but it provides mathematical scales and binding tools so you can construct any bespoke visualization you can dream of!'
  },

  // Layer 4: Exemplar Interactive Code Sample
  exemplarCode: `<!-- ========================================== -->
<!-- Chapter 26 Master Exemplar: Live Graphics Suite -->
<!-- ========================================== -->
<div style="font-family: system-ui, sans-serif; padding: 16px; max-width: 640px; margin: auto;">
  <h2 style="color: #0ea5e9; margin-top: 0;">JavaScript Visual Graphics Showcase</h2>
  
  <!-- 1. HTML5 Canvas 2D Context -->
  <div style="margin-bottom: 20px;">
    <h4 style="margin: 0 0 8px 0; color: #64748b;">1. HTML5 Canvas 2D (Immediate Mode)</h4>
    <canvas id="exemplarCanvas" width="360" height="140" style="background: #0f172a; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></canvas>
  </div>

  <!-- 2. Scalable Vector Graphics (SVG) -->
  <div style="margin-bottom: 20px;">
    <h4 style="margin: 0 0 8px 0; color: #64748b;">2. Scalable Vector Graphics (SVG Retained Mode - Click Circle!)</h4>
    <svg id="exemplarSvg" width="360" height="90" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
      <rect x="20" y="20" width="80" height="50" rx="8" fill="#3b82f6" />
      <text x="60" y="50" fill="white" font-size="12" text-anchor="middle" font-weight="bold">SVG Rect</text>
      <circle id="interactiveCircle" cx="180" cy="45" r="30" fill="#10b981" style="cursor: pointer; transition: fill 0.2s;" />
      <text x="180" y="50" fill="white" font-size="11" text-anchor="middle" pointer-events="none">Click Me!</text>
      <path d="M 260 65 L 300 20 L 340 65 Z" fill="#f59e0b" />
    </svg>
  </div>

  <!-- 3. Live Chart.js Visual Dashboard -->
  <div>
    <h4 style="margin: 0 0 8px 0; color: #64748b;">3. Chart.js Interactive Data Visualization</h4>
    <div style="max-width: 360px;">
      <canvas id="exemplarChart"></canvas>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  // 1. Draw onto HTML5 Canvas:
  const canvas = document.getElementById('exemplarCanvas');
  const ctx = canvas.getContext('2d');
  
  // Draw gradient triangle:
  ctx.beginPath();
  ctx.moveTo(40, 110);
  ctx.lineTo(120, 30);
  ctx.lineTo(200, 110);
  ctx.closePath();
  ctx.fillStyle = '#38bdf8';
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#0284c7';
  ctx.stroke();

  // Draw glowing circle:
  ctx.beginPath();
  ctx.arc(280, 70, 35, 0, Math.PI * 2);
  ctx.fillStyle = '#ec4899';
  ctx.fill();
  console.log("Canvas rendered successfully (0 DOM child nodes created)");

  // 2. Interactive SVG click behavior:
  const circle = document.getElementById('interactiveCircle');
  let isGreen = true;
  circle.addEventListener('click', () => {
    isGreen = !isGreen;
    circle.setAttribute('fill', isGreen ? '#10b981' : '#f43f5e');
    console.log("SVG Circle clicked! New fill color:", circle.getAttribute('fill'));
  });

  // 3. Render Chart.js Chart:
  const chartCtx = document.getElementById('exemplarChart');
  new Chart(chartCtx, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Revenue ($K)',
        data: [130, 210, 290, 380],
        backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
</script>`,

  // Layer 2 & Layer 3: Concept Cards (9 Cards covering the complete JS Graphics menu)
  cards: [
    {
      id: 1,
      title: 'JavaScript Graphics: Canvas, SVG & WebGL Paradigms',
      description: 'Modern web browsers provide three distinct native graphics subsystems: HTML5 Canvas 2D, Scalable Vector Graphics (SVG), and hardware-accelerated 3D WebGL/WebGPU. Choosing the correct rendering engine is the foundational architectural decision in web graphics.\n\nHTML5 Canvas utilizes an **Immediate-Mode** rendering paradigm. When you draw a shape or text onto a canvas, the browser computes the raster pixels, burns them into a bitmap buffer, and immediately forgets the geometrical concept of the object. There are no DOM nodes created for drawn shapes. This makes Canvas extraordinarily fast and capable of rendering tens of thousands of dynamic particles or chart points without bloating the browser DOM tree.\n\nIn contrast, Scalable Vector Graphics (SVG) utilizes a **Retained-Mode** rendering paradigm. Every line, circle, rect, or text tag inside an `<svg>` element exists as a real DOM node. You can inspect an SVG circle in Chrome DevTools, attach click event listeners with `addEventListener()`, and style it with CSS transitions.\n\nArchitectural Comparison Chart:\n┌─────────────────────────┬───────────────────────────┬──────────────────────────┐\n│ Feature                 │ HTML5 Canvas 2D           │ Scalable Vector Graphics │\n├─────────────────────────┼───────────────────────────┼──────────────────────────┤\n│ Rendering Mode          │ Immediate Mode (Raster)   │ Retained Mode (Vector)   │\n│ DOM Representation      │ 0 DOM nodes (Pixel buffer)│ 1 DOM node per shape     │\n│ Scalability / Zoom      │ Pixelates on deep zoom    │ Infinitely crisp vectors │\n│ Interactivity           │ Manual math coordinate hit│ Native DOM events & CSS  │\n│ High-Density (100k pts) │ Ultra-Fast (60fps)        │ High memory DOM lag      │\n│ Best Suited For         │ Games, Particle systems   │ Icons, UI maps, Dashboards│\n└─────────────────────────┴───────────────────────────┴──────────────────────────┘',
      codeSample: `<!-- Live Side-by-Side Comparison: Canvas vs SVG -->
<div style="display: flex; gap: 16px; flex-wrap: wrap; font-family: system-ui, sans-serif;">
  <!-- Canvas Immediate Mode (No DOM Nodes) -->
  <div style="flex: 1; min-width: 200px;">
    <h4>HTML5 Canvas (0 DOM Nodes)</h4>
    <canvas id="demoCanvas" width="220" height="120" style="background: #1e293b; border-radius: 8px;"></canvas>
    <p id="canvasCount" style="font-size: 12px; color: #64748b;"></p>
  </div>

  <!-- SVG Retained Mode (Real DOM Nodes) -->
  <div style="flex: 1; min-width: 200px;">
    <h4>SVG (Living DOM Nodes)</h4>
    <svg id="demoSvg" width="220" height="120" style="background: #f1f5f9; border-radius: 8px;">
      <rect id="svgBox" x="20" y="20" width="80" height="80" rx="8" fill="#3b82f6" style="cursor: pointer;" />
      <circle cx="160" cy="60" r="35" fill="#10b981" />
    </svg>
    <p id="svgCount" style="font-size: 12px; color: #64748b;"></p>
  </div>
</div>

<script>
  // 1. Paint onto Canvas:
  const canvas = document.getElementById('demoCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(20, 20, 80, 80);
  ctx.fillStyle = '#f43f5e';
  ctx.beginPath();
  ctx.arc(160, 60, 35, 0, Math.PI * 2);
  ctx.fill();
  document.getElementById('canvasCount').textContent = 
    "Canvas DOM child elements: " + canvas.children.length + " (Immediate Mode)";

  // 2. Inspect SVG DOM elements:
  const svg = document.getElementById('demoSvg');
  document.getElementById('svgCount').textContent = 
    "SVG DOM child elements: " + svg.children.length + " (Retained Mode: <rect> & <circle>)";

  // Click SVG rectangle to recolor:
  document.getElementById('svgBox').addEventListener('click', (e) => {
    e.target.setAttribute('fill', '#ec4899');
    console.log("SVG element clicked directly via standard DOM addEventListener!");
  });
</script>`,
      codeSamples: [
        {
          title: 'Example 1: HTML5 Canvas Immediate Mode (Zero DOM Nodes)',
          description: 'Paints raster pixels directly into a bitmap buffer without creating DOM elements.',
          code: `<canvas id="c1" width="300" height="150" style="background: #0f172a; border-radius: 8px;"></canvas>
<script>
  const c = document.getElementById('c1');
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#10b981';
  ctx.fillRect(25, 25, 100, 100);
  console.log("Canvas pixel operations completed. DOM children count:", c.children.length);
</script>`
        },
        {
          title: 'Example 2: Scalable Vector Graphics (Interactive Retained DOM)',
          description: 'Constructs an interactive vector graphic where each shape is an inspectable DOM node.',
          code: `<svg width="300" height="150" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
  <circle id="myDot" cx="150" cy="75" r="45" fill="#6366f1" style="cursor: pointer; transition: transform 0.2s;" />
  <text x="150" y="80" text-anchor="middle" fill="white" font-family="sans-serif" font-size="12" pointer-events="none">Click Dot</text>
</svg>
<script>
  const dot = document.getElementById('myDot');
  dot.addEventListener('click', () => {
    const cur = dot.getAttribute('fill');
    dot.setAttribute('fill', cur === '#6366f1' ? '#f59e0b' : '#6366f1');
    console.log("SVG Circle element clicked. Active fill:", dot.getAttribute('fill'));
  });
</script>`
        }
      ],
      keyTakeaway: 'Canvas uses Immediate Mode (fast, pixel-based, 0 DOM nodes); SVG uses Retained Mode (vector-based, interactive DOM nodes, sharp at any zoom).'
    },
    {
      id: 2,
      title: 'HTML5 Canvas: 2D Context, Paths, Shapes & Coordinates',
      description: 'The HTML5 `<canvas>` element acts as a transparent pixel grid. To draw graphics on this grid, JavaScript must acquire a rendering context using `const ctx = canvas.getContext("2d")`. The 2D coordinate system places the origin `(0, 0)` at the top-left corner of the canvas, with X increasing horizontally to the right and Y increasing vertically downward.\n\nCanvas 2D Coordinate & Arc Geometry:\n┌────────────────────────────────────────────────────────┐\n│ (0,0) Origin ───────────────> +X (Horizontal width)    │\n│   │                                                    │\n│   │  ctx.fillRect(x, y, w, h)                          │\n│   │  ┌──────────────┐                                  │\n│   │  │              │ h                                │\n│   │  └──────────────┘                                  │\n│   │         w                                          │\n│   │                                                    │\n│   │  ctx.arc(cx, cy, r, 0, Math.PI * 2)                │\n│   │         1.5π (Top)                                 │\n│   │     π ─── (·) ─── 0 / 2π (Right)                   │\n│   │         0.5π (Bottom)                              │\n│   ▼                                                    │\n│  +Y (Vertical downward)                                │\n└────────────────────────────────────────────────────────┘\n\nDrawing on Canvas revolves around two fundamental operations: **Stroke** (drawing shape outlines) and **Fill** (painting shape interiors). Basic rectangular primitives can be drawn directly with `fillRect(x, y, w, h)`, `strokeRect(x, y, w, h)`, and `clearRect(x, y, w, h)`.\n\nFor custom shapes, polygons, and curves, developers build **Paths**. A path sequence always begins with `ctx.beginPath()`. Developers then move a virtual drawing pen with `moveTo(x, y)`, trace linear segments with `lineTo(x, y)`, create arcs with `arc(x, y, radius, startAngle, endAngle)`, or draw Bézier curves with `bezierCurveTo()`. Once a path outline is complete, invoking `ctx.closePath()` connects the end back to the start, followed by `ctx.fill()` or `ctx.stroke()` to render the pixels.',
      codeSample: `<canvas id="canvas2" width="360" height="180" style="background: #0f172a; border-radius: 8px;"></canvas>
<script>
  const c = document.getElementById('canvas2');
  const ctx = c.getContext('2d');

  // 1. Solid Rectangle:
  ctx.fillStyle = '#4f46e5';
  ctx.fillRect(20, 20, 90, 60);

  // 2. Stroke Rectangle:
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#38bdf8';
  ctx.strokeRect(130, 20, 90, 60);

  // 3. Custom Arc / Circle:
  ctx.beginPath();
  ctx.arc(290, 50, 30, 0, Math.PI * 2);
  ctx.fillStyle = '#ec4899';
  ctx.fill();

  // 4. Polygon Path (Triangle):
  ctx.beginPath();
  ctx.moveTo(50, 150);
  ctx.lineTo(120, 100);
  ctx.lineTo(190, 150);
  ctx.closePath();
  ctx.fillStyle = '#f59e0b';
  ctx.fill();

  console.log("Canvas shapes and paths rendered successfully.");
</script>`,
      codeSamples: [
        {
          title: 'Example 1: Rectangles & Outlines',
          description: 'Basic rectangular operations using fillRect and strokeRect.',
          code: `<canvas id="ex1" width="300" height="120" style="background: #18181b; border-radius: 8px;"></canvas>
<script>
  const ctx = document.getElementById('ex1').getContext('2d');
  ctx.fillStyle = '#10b981';
  ctx.fillRect(20, 20, 100, 70);
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 4;
  ctx.strokeRect(150, 20, 100, 70);
</script>`
        },
        {
          title: 'Example 2: Linear Color Gradients on Canvas',
          description: 'Creating smooth multi-stop linear color gradients for canvas geometries.',
          code: `<canvas id="ex2" width="320" height="130" style="background: #0f172a; border-radius: 8px;"></canvas>
<script>
  const ctx = document.getElementById('ex2').getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 320, 0);
  grad.addColorStop(0, '#38bdf8');
  grad.addColorStop(0.5, '#818cf8');
  grad.addColorStop(1, '#c084fc');
  ctx.fillStyle = grad;
  ctx.fillRect(20, 25, 280, 80);
</script>`
        }
      ],
      keyTakeaway: 'Canvas coordinates originate at top-left (0,0); custom geometries are constructed via beginPath(), moveTo(), lineTo(), arc(), and finished with fill() or stroke().'
    },
    {
      id: 3,
      title: 'Canvas Transformations, State Stack & 60fps Animation Loops',
      description: 'As scenes grow in complexity, manually calculating rotated or translated vertex coordinates becomes mathematically tedious. The Canvas 2D context resolves this with a powerful affine transformation matrix using `ctx.translate(x, y)`, `ctx.rotate(radians)`, and `ctx.scale(scaleX, scaleY)`.\n\nTransformation State Stack Lifecycle:\n┌────────────────────────────────────────────────────────┐\n│ State Stack Lifecycle (ctx.save & ctx.restore)         │\n├────────────────────────────────────────────────────────┤\n│ 1. ctx.save()       ──> Pushes current matrix to stack │\n│ 2. ctx.translate()  ──> Moves local origin to (x, y)   │\n│ 3. ctx.rotate()     ──> Rotates local coordinate grid  │\n│ 4. ctx.fillRect()   ──> Draws centered on local origin │\n│ 5. ctx.restore()    ──> Pops stack, resets coordinates │\n└────────────────────────────────────────────────────────┘\n\nBecause transformations affect the entire global coordinate grid for all subsequent draw commands, managing the transformation state is critical. The Canvas context provides a state stack managed via `ctx.save()` and `ctx.restore()`. Invoking `ctx.save()` pushes the current transformation matrix, clipping path, `fillStyle`, and `strokeStyle` onto a stack. Invoking `ctx.restore()` pops the stack, reverting all modifications back to their saved state.\n\nTo create silky-smooth, 60fps animations or interactive HTML5 games, never use `setInterval` or `setTimeout`. Always use `window.requestAnimationFrame(callback)`. This browser API synchronizes painting with the monitor display refresh rate (e.g. 60Hz or 120Hz), automatically throttles down when the user switches browser tabs to preserve CPU and battery life, and provides high-precision timestamp parameters.',
      codeSample: `<div style="text-align: center; font-family: system-ui, sans-serif;">
  <canvas id="animCanvas" width="340" height="150" style="background: #020617; border-radius: 8px;"></canvas>
  <p style="font-size: 12px; color: #64748b; margin: 4px 0 0 0;">Live 60fps requestAnimationFrame Physics Loop</p>
</div>

<script>
  const canvas = document.getElementById('animCanvas');
  const ctx = canvas.getContext('2d');

  let x = 30, y = 30;
  let vx = 3, vy = 2;
  const radius = 16;

  function renderFrame() {
    // 1. Clear frame:
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Physics bounce update:
    x += vx;
    y += vy;
    if (x + radius > canvas.width || x - radius < 0) vx = -vx;
    if (y + radius > canvas.height || y - radius < 0) vy = -vy;

    // 3. Render animated orb with radial gradient:
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#0284c7';
    ctx.fill();

    // 4. Schedule next frame:
    requestAnimationFrame(renderFrame);
  }

  requestAnimationFrame(renderFrame);
</script>`,
      codeSamples: [
        {
          title: 'Example 1: Transformations with ctx.save() and ctx.restore()',
          description: 'Rotates a shape around its center without altering subsequent drawings.',
          code: `<canvas id="tx1" width="320" height="130" style="background: #18181b; border-radius: 8px;"></canvas>
<script>
  const ctx = document.getElementById('tx1').getContext('2d');
  ctx.save();
  ctx.translate(160, 65);
  ctx.rotate((35 * Math.PI) / 180);
  ctx.fillStyle = '#ec4899';
  ctx.fillRect(-35, -35, 70, 70);
  ctx.restore(); // Restores clean orientation!
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(10, 10, 40, 40);
</script>`
        },
        {
          title: 'Example 2: 60fps Bouncing Particle Loop',
          description: 'Fluid, battery-efficient animation driven by requestAnimationFrame.',
          code: `<canvas id="tx2" width="320" height="120" style="background: #0f172a; border-radius: 8px;"></canvas>
<script>
  const cv = document.getElementById('tx2');
  const cx = cv.getContext('2d');
  let px = 20, speed = 2.5;
  function loop() {
    cx.clearRect(0, 0, cv.width, cv.height);
    px = (px + speed) % cv.width;
    cx.fillStyle = '#10b981';
    cx.fillRect(px, 45, 30, 30);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
</script>`
        }
      ],
      keyTakeaway: 'Always bracket coordinate transformations with ctx.save() and ctx.restore(); drive all canvas animations with window.requestAnimationFrame().'
    },
    {
      id: 4,
      title: 'Scalable Vector Graphics (SVG): Declarative Vector Architecture',
      description: 'Scalable Vector Graphics (SVG) is an XML-based vector graphics format natively integrated into the HTML DOM. Because SVG is mathematically defined using geometrical descriptions (points, lines, curves, radii) rather than a fixed grid of pixels, SVG graphics scale infinitely without pixelation or blurriness on ultra-high-resolution Retina displays.\n\nIn JavaScript, SVG elements cannot be created with standard `document.createElement()` because they belong to a separate XML namespace. You must instantiate SVG elements using `document.createElementNS("http://www.w3.org/2000/svg", tagName)` and configure geometric attributes using `setAttribute()`.\n\nSVG tags provide dedicated vector shapes: `<rect>` for boxes, `<circle>` and `<ellipse>` for rounded forms, `<line>` for straight segments, `<polyline>` and `<polygon>` for multi-vertex figures, and the versatile `<path>` element. The `<path>` element uses the `d` attribute—a compact string mini-language where `M` means moveto, `L` means lineto, `C` means cubic Bézier curve, and `Z` closes the path.',
      codeSample: `<svg width="100%" height="160" viewBox="0 0 360 160" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
  <!-- Rounded Rect with CSS hover transition -->
  <rect x="25" y="30" width="90" height="90" rx="12" fill="#3b82f6" style="cursor: pointer; transition: 0.3s;" onmouseover="this.setAttribute('fill', '#6366f1')" onmouseout="this.setAttribute('fill', '#3b82f6')" />
  
  <!-- Circle with stroke -->
  <circle cx="180" cy="75" r="42" fill="#10b981" stroke="#047857" stroke-width="4" />
  
  <!-- Vector Polygon Star / Triangle -->
  <polygon points="280,30 320,115 240,115" fill="#f59e0b" />
</svg>`,
      codeSamples: [
        {
          title: 'Example 1: Interactive SVG Shapes with Events',
          description: 'Vector SVG elements listening to DOM click and hover events.',
          code: `<svg id="s1" width="300" height="120" style="background: #1e293b; border-radius: 8px;">
  <circle id="cTarget" cx="150" cy="60" r="38" fill="#ec4899" style="cursor: pointer;" />
</svg>
<script>
  const dot = document.getElementById('cTarget');
  dot.addEventListener('click', () => {
    dot.setAttribute('fill', dot.getAttribute('fill') === '#ec4899' ? '#06b6d4' : '#ec4899');
    console.log("Vector circle toggled!");
  });
</script>`
        },
        {
          title: 'Example 2: Dynamic Programmatic SVG Generation',
          description: 'Constructing SVG nodes in JavaScript using document.createElementNS.',
          code: `<div id="svgContainer"></div>
<script>
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("width", "300");
  svg.setAttribute("height", "100");
  svg.style.background = "#f1f5f9";
  svg.style.borderRadius = "8px";

  const rect = document.createElementNS(ns, "rect");
  rect.setAttribute("x", "30");
  rect.setAttribute("y", "20");
  rect.setAttribute("width", "120");
  rect.setAttribute("height", "60");
  rect.setAttribute("rx", "6");
  rect.setAttribute("fill", "#10b981");

  svg.appendChild(rect);
  document.getElementById('svgContainer').appendChild(svg);
</script>`
        }
      ],
      keyTakeaway: 'SVG is retained-mode vector XML created via document.createElementNS(); shapes are real DOM nodes supporting CSS styling and click events.'
    },
    {
      id: 5,
      title: 'Plotly.js: Declarative Scientific & Financial Visualization',
      description: 'Plotly.js is a high-level, declarative data visualization library built on top of D3.js and WebGL. It is universally celebrated in scientific computing, data science, financial modeling, and academic publishing because it produces publication-ready, interactive charts out of the box with zero boilerplate styling.\n\nThe core architectural concept of Plotly is the separation of **Data Traces** from **Layout**:\n┌────────────────────────────────────────────────────────┐\n│ Plotly Declarative Architecture                        │\n├────────────────────────────────────────────────────────┤\n│ 1. Data Traces  ──> [{ x: [...], y: [...], type: \"scatter\" }]│\n│ 2. Layout       ──> { title: \"...\", xaxis: {...}, theme }   │\n│ 3. Plotly.newPlot(\"div\", traces, layout)               │\n└────────────────────────────────────────────────────────┘\n\nA trace is a JavaScript object defining one dataset and its visual representation: its coordinate arrays (`x` and `y`), its visual type (`"scatter"`, `"bar"`, `"pie"`, `"histogram"`, `"heatmap"`, `"surface"`), and styling properties like marker colors and line widths. To mount the chart, you simply call `Plotly.newPlot(container, [trace1, trace2], layout)`. Plotly automatically equips the chart with interactive zoom, pan, hover tooltips, and one-click PNG export.',
      codeSample: `<div id="plotlyDiv" style="width: 100%; height: 280px;"></div>

<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script>
  const traceRevenue = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    y: [35, 48, 62, 85, 105],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Actual Revenue',
    line: { color: '#0ea5e9', width: 3 },
    marker: { size: 8, color: '#0284c7' }
  };

  const traceTarget = {
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    y: [30, 42, 55, 75, 95],
    type: 'scatter',
    mode: 'lines',
    name: 'Target Plan',
    line: { dash: 'dot', color: '#94a3b8', width: 2 }
  };

  const layout = {
    title: 'Monthly Performance vs Target',
    paper_bgcolor: '#0f172a',
    plot_bgcolor: '#0f172a',
    font: { color: '#e2e8f0', size: 11 },
    margin: { t: 40, r: 20, l: 40, b: 40 }
  };

  Plotly.newPlot('plotlyDiv', [traceRevenue, traceTarget], layout, { responsive: true });
</script>`,
      codeSamples: [
        {
          title: 'Example 1: Plotly Interactive Multi-Series Line Chart',
          description: 'Scientific line chart with interactive zoom, pan, and hover tooltips.',
          code: `<div id="p1" style="width:100%;height:260px;"></div>
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script>
  const t = { x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], y: [12, 19, 8, 17, 24], type: 'scatter', mode: 'lines+markers', line: { color: '#10b981', width: 3 } };
  Plotly.newPlot('p1', [t], { title: 'Daily Traffic Metric', margin: {t:40,l:30,r:20,b:30} }, {responsive:true});
</script>`
        },
        {
          title: 'Example 2: Plotly Categorical Bar Chart',
          description: 'Categorical bar plot with individual bar color palette.',
          code: `<div id="p2" style="width:100%;height:260px;"></div>
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script>
  const data = [{
    x: ['JavaScript', 'Python', 'TypeScript', 'Go'],
    y: [88, 76, 65, 42],
    type: 'bar',
    marker: { color: ['#f59e0b', '#3b82f6', '#0284c7', '#10b981'] }
  }];
  Plotly.newPlot('p2', data, { title: 'Developer Adoption Index', margin: {t:40,l:30,r:20,b:40} }, {responsive:true});
</script>`
        }
      ],
      keyTakeaway: 'Plotly uses a declarative JSON schema separating Data Traces from Layout; ideal for scientific plots, multi-line series, and 3D graphs.'
    },
    {
      id: 6,
      title: 'Chart.js: Modern Responsive HTML5 Dashboard Visualizations',
      description: 'Chart.js is the most popular, lightweight open-source charting library in the JavaScript ecosystem. Unlike SVG-based libraries, Chart.js renders charts using the HTML5 `<canvas>` element, making it exceptionally snappy and performance-friendly across mobile devices and responsive web apps.\n\nInstantiating a chart requires passing a canvas rendering context or element ID to the Chart constructor: `const myChart = new Chart(ctx, configuration)`.\n\nChart.js Configuration Tree:\n┌────────────────────────────────────────────────────────┐\n│ const myChart = new Chart(ctx, {                       │\n│   type: \"doughnut\" | \"bar\" | \"line\" | \"radar\",         │\n│   data: {                                              │\n│     labels: [\"A\", \"B\", \"C\"],                           │\n│     datasets: [{ data: [10, 20, 30], backgroundColor }]│\n│   },                                                   │\n│   options: { responsive: true, plugins: { legend } }   │\n│ });                                                    │\n└────────────────────────────────────────────────────────┘\n\nThe `type` property selects the visual representation: `"bar"`, `"line"`, `"pie"`, `"doughnut"`, `"radar"`, `"polarArea"`, `"bubble"`, or `"scatter"`. The `data` object contains an array of category labels and an array of datasets, each with its own data numbers, `backgroundColor`, and `borderColor`. The `options` block controls responsiveness (`responsive: true`), animation durations, and plugins for legends and tooltips.',
      codeSample: `<div style="max-width: 320px; margin: auto; padding: 10px;">
  <canvas id="chartjsCanvas"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('chartjsCanvas');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['JavaScript', 'Python', 'TypeScript', 'Rust'],
      datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: ['#f59e0b', '#3b82f6', '#0284c7', '#ef4444'],
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: '2026 Developer Survey' }
      }
    }
  });
</script>`,
      codeSamples: [
        {
          title: 'Example 1: Interactive Doughnut Chart with Legend',
          description: 'A responsive doughnut chart with animated hover elevation and custom legend.',
          code: `<div style="max-width: 280px; margin: auto;"><canvas id="cDoughnut"></canvas></div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  new Chart(document.getElementById('cDoughnut'), {
    type: 'doughnut',
    data: {
      labels: ['Frontend', 'Backend', 'DevOps'],
      datasets: [{ data: [55, 30, 15], backgroundColor: ['#38bdf8', '#818cf8', '#34d399'] }]
    },
    options: { responsive: true }
  });
</script>`
        },
        {
          title: 'Example 2: Animated Quarterly Bar Chart',
          description: 'A responsive vertical bar chart with rounded bars and hover tooltips.',
          code: `<div style="max-width: 360px; margin: auto;"><canvas id="cBar"></canvas></div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  new Chart(document.getElementById('cBar'), {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Revenue ($K)',
        data: [150, 230, 310, 420],
        backgroundColor: '#6366f1',
        borderRadius: 6
      }]
    },
    options: { responsive: true }
  });
</script>`
        }
      ],
      keyTakeaway: 'Chart.js is a canvas-based, responsive charting engine configured via { type, data, options } with built-in animations and tooltips.'
    },
    {
      id: 7,
      title: 'Google Charts: Enterprise Visualization API & DataTables',
      description: 'Google Charts is an enterprise-grade visualization platform maintained by Google. It is celebrated for its deep catalog of specialized chart types that are difficult to find in standard libraries, including interactive GeoCharts (world and regional maps), OrgCharts (hierarchical organization trees), Gauges, Timelines, Candlestick charts, and Sankey diagrams.\n\nThe Google Charts workflow follows a strict asynchronous lifecycle:\n┌────────────────────────────────────────────────────────┐\n│ Google Charts Lifecycle Pipeline                       │\n├────────────────────────────────────────────────────────┤\n│ 1. google.charts.load(\"current\", {packages:[\"corechart\"]})│\n│ 2. google.charts.setOnLoadCallback(drawChart)          │\n│ 3. new google.visualization.DataTable()                │\n│    -> addColumn(\"string\", \"Label\")                     │\n│    -> addColumn(\"number\", \"Value\")                     │\n│    -> addRows([[\"Sales\", 100], [\"Ops\", 40]])          │\n│ 4. new google.visualization.PieChart(container).draw() │\n└────────────────────────────────────────────────────────┘\n\nInside the callback, data is encapsulated within a structured `google.visualization.DataTable` object. You define typed columns using `data.addColumn("string", "Label")` and `data.addColumn("number", "Value")`, then populate records using `data.addRows([...])`. Finally, you instantiate a visual class such as `new google.visualization.ColumnChart(element)` and call `chart.draw(data, options)`.',
      codeSample: `<div id="googlePie" style="width: 100%; height: 260px;"></div>

<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Division');
    data.addColumn('number', 'Headcount');
    data.addRows([
      ['Engineering', 145],
      ['Product Design', 32],
      ['Marketing', 58],
      ['Customer Success', 80]
    ]);

    const options = {
      title: 'Company Division Headcount',
      is3D: true,
      colors: ['#6366f1', '#ec4899', '#10b981', '#f59e0b'],
      chartArea: { width: '90%', height: '80%' }
    };

    const chart = new google.visualization.PieChart(document.getElementById('googlePie'));
    chart.draw(data, options);
  }
</script>`,
      codeSamples: [
        {
          title: 'Example 1: Google Charts 3D Pie Chart',
          description: 'Rendering an interactive 3D pie chart using google.visualization.DataTable.',
          code: `<div id="g1" style="width:100%;height:250px;"></div>
<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(() => {
    const d = new google.visualization.DataTable();
    d.addColumn('string', 'Browser');
    d.addColumn('number', 'Share');
    d.addRows([['Chrome', 65], ['Safari', 18], ['Firefox', 8], ['Edge', 9]]);
    new google.visualization.PieChart(document.getElementById('g1')).draw(d, {is3D:true, title:'Browser Market Share'});
  });
</script>`
        },
        {
          title: 'Example 2: Google Charts Column Chart',
          description: 'A formatted vertical column chart with custom series palette.',
          code: `<div id="g2" style="width:100%;height:250px;"></div>
<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(() => {
    const d = google.visualization.arrayToDataTable([
      ['Quarter', 'Revenue ($K)'],
      ['Q1', 120], ['Q2', 180], ['Q3', 250], ['Q4', 340]
    ]);
    new google.visualization.ColumnChart(document.getElementById('g2')).draw(d, {title:'Quarterly Performance', colors:['#0ea5e9']});
  });
</script>`
        }
      ],
      keyTakeaway: 'Google Charts utilizes an asynchronous loader, google.visualization.DataTable schemas, and offers rare enterprise charts like GeoCharts and OrgCharts.'
    },
    {
      id: 8,
      title: 'D3.js (Data-Driven Documents): Selections, Data Binding & Scales',
      description: 'D3.js (Data-Driven Documents) is not a charting library with ready-made "bar" or "line" widgets; rather, it is a foundational data visualization framework that binds arbitrary data arrays directly to the DOM and applies data-driven transformations to SVG, Canvas, or HTML elements.\n\nThe foundational pattern in D3 is **Data Binding**. Using `d3.select()` and `d3.selectAll()`, you select target elements and bind an array of data using `.data(dataset)`. Modern D3 uses the elegant `.join("rect")` method (replacing the legacy enter/update/exit pattern), which automatically creates new SVG elements for added data points, updates existing elements, and removes stale elements.\n\nThe second pillar of D3 is **Mathematical Scales**:\n┌────────────────────────────────────────────────────────┐\n│ D3 Mathematical Scale Transformation                   │\n├────────────────────────────────────────────────────────┤\n│ Input Domain:  [ 0  ───────────────  100 ] (Raw Data)  │\n│                      │ d3.scaleLinear()                │\n│                      ▼                                 │\n│ Output Range:  [ 0px ────────────── 300px ] (Pixels)   │\n└────────────────────────────────────────────────────────┘\n\nRaw data values (e.g. temperatures between -20 and 110, or revenues between $10K and $5M) must be mapped to screen coordinates (e.g. 0 to 800 pixels). D3 scales handle this transformation seamlessly: `d3.scaleLinear().domain([min, max]).range([0, width])` converts continuous numbers to pixels, while `d3.scaleBand()` segments categorical labels for bar charts.',
      codeSample: `<div id="d3BarContainer" style="padding: 10px;"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  const dataset = [35, 68, 92, 120, 150];
  const width = 340, height = 120;

  const svg = d3.select("#d3BarContainer")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#0f172a")
    .style("border-radius", "8px");

  // Create D3 Linear Scale (maps data [0, 150] -> pixel width [0, 260]):
  const scale = d3.scaleLinear().domain([0, 150]).range([0, 260]);

  // Bind data to SVG rect elements:
  svg.selectAll("rect")
    .data(dataset)
    .join("rect")
    .attr("x", 20)
    .attr("y", (d, i) => i * 22 + 10)
    .attr("width", d => scale(d))
    .attr("height", 16)
    .attr("rx", 4)
    .attr("fill", (d, i) => d3.interpolateCool(i / dataset.length));

  console.log("D3.js data binding and scales executed cleanly.");
</script>`,
      codeSamples: [
        {
          title: 'Example 1: D3 Mathematical Scale Transformation',
          description: 'Mapping continuous numeric domain values into screen pixel ranges.',
          code: `<div id="d3ScaleOut" style="font-family: monospace; font-size: 13px; padding: 12px; background: #1e293b; color: #38bdf8; border-radius: 8px;"></div>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  const scale = d3.scaleLinear().domain([0, 1000]).range([0, 400]);
  const out = document.getElementById('d3ScaleOut');
  out.innerHTML = "Scale $0 maps to: " + scale(0) + "px<br>" +
                  "Scale $500 maps to: " + scale(500) + "px<br>" +
                  "Scale $1,000 maps to: " + scale(1000) + "px";
</script>`
        },
        {
          title: 'Example 2: D3 SVG Data Binding (.data().join())',
          description: 'Binding an array directly to SVG bars with dynamic widths.',
          code: `<div id="d3chart"></div>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  const data = [40, 85, 130, 175];
  const s = d3.select("#d3chart").append("svg").attr("width", 300).attr("height", 100).style("background", "#f8fafc").style("border-radius", "6px");
  s.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", 15)
    .attr("y", (d, i) => i * 22 + 10)
    .attr("width", d => d)
    .attr("height", 16)
    .attr("fill", "#0ea5e9");
</script>`
        }
      ],
      keyTakeaway: 'D3.js binds data directly to DOM elements via .data().join() and maps numbers to pixel coordinates using mathematical scales.'
    },
    {
      id: 9,
      title: 'Graphics Architecture Decision Matrix: Choosing the Right Tool',
      description: 'Selecting the appropriate graphics technology is an essential software architecture decision that dictates application performance, responsiveness, and developer maintenance velocity.\n\nGraphics Architecture Decision Tree:\n┌────────────────────────────────────────────────────────┐\n│ Need to visualize data in JavaScript?                  │\n├────────────────────────────────────────────────────────┤\n│ ├─ High frequency / 50,000+ points or 3D?              │\n│ │  └──> Raw Canvas / WebGL (Immediate Mode, 0 DOM lag) │\n│ ├─ Standard Business Dashboard (Bar/Line/Doughnut)?    │\n│ │  └──> Chart.js (Fast, Responsive, Canvas-based)      │\n│ ├─ Scientific / Financial / Statistical Analysis?      │\n│ │  └──> Plotly.js (Zoom, Pan, Boxplots, D3+WebGL)      │\n│ ├─ Bespoke / Novel Custom Infographics?                │\n│ │  └──> D3.js (Mathematical scales, flexible joins)    │\n│ └─ Enterprise Geo/Maps & Org Hierarchies?              │\n│    └──> Google Charts (DataTables, GeoCharts)          │\n└────────────────────────────────────────────────────────┘\n\nChoose **Chart.js** when you need standard business charts (bar, line, doughnut, radar) for dashboards that must be responsive, mobile-optimized, fast to ship, and lightweight with minimal bundle footprint.\n\nChoose **Plotly.js** when building scientific, financial, or data science applications that require interactive exploration, statistical distributions, box plots, 3D surface charts, or one-click export tools.\n\nChoose **Google Charts** when you require enterprise features like internationalized GeoCharts, OrgCharts, or seamless integration with Google Sheets and enterprise backend services.\n\nChoose **D3.js** when your product requires bespoke, novel, non-standard visual layouts (such as force-directed network graphs, Voronoi tessellations, choropleth maps, or complex hierarchical sunbursts).\n\nChoose **Raw HTML5 Canvas / WebGL** when you are building 2D/3D games, particle simulations, video editors, or charts that must render 50,000+ points at 60fps where DOM overhead would freeze the browser.',
      codeSample: `<!-- Live Multi-Engine Dashboard Demonstration -->
<div style="font-family: system-ui, sans-serif; padding: 12px; background: #0f172a; color: white; border-radius: 8px;">
  <h4 style="margin: 0 0 10px 0; color: #38bdf8;">Multi-Engine Visualization Matrix</h4>
  
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <!-- Engine 1: Canvas Sparkline -->
    <div style="flex: 1; min-width: 130px; background: #1e293b; padding: 10px; border-radius: 6px;">
      <div style="font-size: 11px; color: #94a3b8;">Canvas Sparkline</div>
      <canvas id="miniSpark" width="130" height="40" style="margin-top: 6px;"></canvas>
    </div>

    <!-- Engine 2: SVG Vector Badge -->
    <div style="flex: 1; min-width: 130px; background: #1e293b; padding: 10px; border-radius: 6px;">
      <div style="font-size: 11px; color: #94a3b8;">SVG Vector Gauge</div>
      <svg width="130" height="40" style="margin-top: 6px;">
        <circle cx="20" cy="20" r="14" fill="#10b981" />
        <text x="45" y="24" fill="white" font-size="11" font-weight="bold">99.9% Uptime</text>
      </svg>
    </div>
  </div>
</div>

<script>
  // Draw Canvas Sparkline:
  const ctx = document.getElementById('miniSpark').getContext('2d');
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 35);
  ctx.lineTo(25, 20);
  ctx.lineTo(50, 28);
  ctx.lineTo(75, 10);
  ctx.lineTo(105, 18);
  ctx.lineTo(130, 5);
  ctx.stroke();
</script>`,
      codeSamples: [
        {
          title: 'Example 1: Multi-Engine Dashboard (Canvas Sparkline + SVG Badge)',
          description: 'Combining HTML5 Canvas and SVG in a single multi-engine dashboard component.',
          code: `<div style="display:flex;gap:12px;font-family:sans-serif;">
  <div style="padding:10px;background:#18181b;border-radius:6px;color:#38bdf8;">
    <div style="font-size:11px;">Canvas Metric</div>
    <canvas id="cMetric" width="120" height="30"></canvas>
  </div>
</div>
<script>
  const cx = document.getElementById('cMetric').getContext('2d');
  cx.fillStyle = '#38bdf8';
  cx.fillRect(5, 5, 110, 20);
</script>`
        },
        {
          title: 'Example 2: Interactive Graphics Stack Selector',
          description: 'Algorithm recommending the optimal graphics stack based on requirements.',
          code: `<div id="recOutput" style="font-family:sans-serif;padding:12px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;"></div>
<script>
  function pickEngine(points, isScientific) {
    if (points > 10000) return 'HTML5 Canvas / WebGL (High performance, 0 DOM overhead)';
    if (isScientific) return 'Plotly.js (Scientific tools, zoom, pan)';
    return 'Chart.js (Responsive, lightweight dashboard)';
  }
  document.getElementById('recOutput').innerHTML = 
    "<strong>50,000 Data Points:</strong> " + pickEngine(50000, false) + "<br><br>" +
    "<strong>Scientific Plot:</strong> " + pickEngine(200, true);
</script>`
        }
      ],
      keyTakeaway: 'Use Chart.js for clean dashboards, Plotly for scientific data, Google Charts for enterprise geo/org trees, D3 for custom layouts, and Canvas/WebGL for big data.'
    }
  ],

  // Layer 5: Flashcards (10 items)
  flashcards: [
    {
      front: 'What is the fundamental difference between Immediate Mode and Retained Mode graphics?',
      back: 'Immediate Mode (Canvas) paints raw pixels without keeping DOM nodes; Retained Mode (SVG) creates and tracks live DOM elements for every shape.',
      hint: 'Pixel raster vs DOM nodes.'
    },
    {
      front: 'Where is the (0, 0) coordinate origin located on an HTML5 Canvas?',
      back: 'At the top-left corner of the canvas, with X expanding rightward and Y expanding downward.',
      hint: 'Top-left corner.'
    },
    {
      front: 'What is the purpose of ctx.save() and ctx.restore() in Canvas 2D?',
      back: 'They save and restore the canvas state stack (transformations, fill styles, stroke styles, clipping paths).',
      hint: 'Transformation state stack.'
    },
    {
      front: 'Why is window.requestAnimationFrame() preferred over setInterval() for canvas animations?',
      back: 'It syncs with the screen refresh rate (60Hz/120Hz) and automatically pauses when the tab is hidden to save CPU and battery.',
      hint: 'Screen refresh synchronization.'
    },
    {
      front: 'Why must document.createElementNS() be used instead of createElement() for SVG elements?',
      back: 'SVG elements belong to the W3C SVG XML namespace ("http://www.w3.org/2000/svg"), not the standard HTML namespace.',
      hint: 'XML namespace requirement.'
    },
    {
      front: 'In Plotly.js, what is the conceptual difference between a Trace and a Layout?',
      back: 'A Trace defines the data values and geometry type (e.g. scatter, bar); Layout defines global canvas aesthetics, axes, and titles.',
      hint: 'Data series vs Chart aesthetics.'
    },
    {
      front: 'What rendering technology powers Chart.js under the hood?',
      back: 'The HTML5 <canvas> element, providing responsive, hardware-accelerated 2D rendering.',
      hint: 'HTML5 Canvas.'
    },
    {
      front: 'What is a google.visualization.DataTable in Google Charts?',
      back: 'A strongly-typed, two-dimensional table holding columns (with explicit types) and rows used by Google Charts to render visuals.',
      hint: 'Typed tabular data container.'
    },
    {
      front: 'What is the purpose of a Mathematical Scale in D3.js (e.g. d3.scaleLinear)?',
      back: 'To map raw input data values from an abstract domain (e.g. $0 to $1,000) to pixel screen coordinates in a visual range (e.g. 0 to 500px).',
      hint: 'Domain to Range pixel mapping.'
    },
    {
      front: 'When should you choose HTML5 Canvas over SVG for data visualization?',
      back: 'When rendering thousands of dynamic data points (e.g. >10,000 points) where creating individual SVG DOM nodes would overwhelm browser memory.',
      hint: 'High point counts & DOM overhead.'
    }
  ],

  // Layer 6: Chapter Exercise / Quiz (6 questions)
  chapterExercise: [
    {
      id: 'ex-26-1',
      question: 'Which method call acquires the 2D drawing context on an HTML5 <canvas> element?',
      options: [
        'canvas.getContext("2d")',
        'canvas.get2DContext()',
        'canvas.createDrawingContext()',
        'canvas.renderContext2D()'
      ],
      answer: 0,
      explanation: 'canvas.getContext("2d") returns the CanvasRenderingContext2D object used for all 2D drawing commands.'
    },
    {
      id: 'ex-26-2',
      question: 'Why does an SVG graphic remain perfectly sharp when zoomed in, whereas a Canvas bitmap becomes pixelated?',
      options: [
        'SVG uses GPU shaders while Canvas uses CPU memory',
        'SVG is defined mathematically using vector geometry, while Canvas is a fixed raster grid of pixels',
        'SVG automatically increases its pixel density when zoomed',
        'Canvas does not support color interpolation'
      ],
      answer: 1,
      explanation: 'SVG graphics are vector-based equations rendered dynamically at any resolution, whereas Canvas is a fixed-resolution pixel raster.'
    },
    {
      id: 'ex-26-3',
      question: 'Which method restores the canvas coordinate system and styling back to its previously saved state?',
      options: [
        'ctx.reset()',
        'ctx.undo()',
        'ctx.restore()',
        'ctx.popState()'
      ],
      answer: 2,
      explanation: 'ctx.restore() pops the top state off the canvas state stack, reverting transformations and styles back to the state saved by ctx.save().'
    },
    {
      id: 'ex-26-4',
      question: 'In Plotly.js, which object defines the data series, coordinates (x, y), and visual plot type?',
      options: [
        'The Layout object',
        'The Trace object',
        'The Frame object',
        'The Schema object'
      ],
      answer: 1,
      explanation: 'In Plotly, a Trace object contains the x/y data arrays and specifies the visual plot type (such as "scatter", "bar", or "pie").'
    },
    {
      id: 'ex-26-5',
      question: 'Which core D3.js concept is responsible for mapping an abstract data domain (e.g. 0 to 100) to visual pixel range (e.g. 0 to 500px)?',
      options: [
        'D3 Transition',
        'D3 Scale',
        'D3 Axis',
        'D3 Extent'
      ],
      answer: 1,
      explanation: 'D3 Scales (like d3.scaleLinear) map input domain values to output range coordinates on the screen.'
    },
    {
      id: 'ex-26-6',
      question: 'What is the primary architectural reason to choose Canvas or WebGL over SVG when building a high-frequency real-time scatter plot with 100,000 points?',
      options: [
        'SVG does not support tooltips',
        'Creating 100,000 separate SVG DOM elements causes severe memory bloat and degrades browser rendering',
        'Canvas is an older standard with wider browser support',
        'SVG requires external web fonts to render'
      ],
      answer: 1,
      explanation: 'In SVG, each point is an independent DOM node. 100,000 DOM nodes overwhelm browser layout engines; Canvas paints pixels directly without DOM overhead.'
    }
  ]
};
