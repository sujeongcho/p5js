setup = () => {
    createCanvas(600, 600);
    fill(0);
    stroke(255);
  };
  
  draw = (_) => {
    let p = [];
    f = frameCount;
    background(0);
    stroke('red');
    for (y = 100; y < 800; y += 19) {
      beginShape();
      for (x = 0; x < 300; x += 7) {
        dy = (90 / (1 + pow(x - 150, 4) / 8e6)) * noise(x / 40 - f / 40 - y);
        p.push({ x, y: y-dy }); //right
        vertex(x, y-dy); //left
      }
      endShape();
    }
    stroke('red');
    for (let i = p.length; i--; ) {
      const a = p[i];
      for (let j = i; j--; ) {
        const b = p[j];
        const d = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
        d < 240 && line(a.x + 300, a.y, b.x + 300, b.y);
      }
    }
  };
  