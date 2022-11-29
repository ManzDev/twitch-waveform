export const draw = (normalizedData) => {
  console.log(normalizedData);
  const canvas = document.querySelector("canvas");
  const dpr = window.devicePixelRatio || 1;
  const padding = 20;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.translate(0, canvas.offsetHeight / 2 + padding);

  // draw line segment
  const width = canvas.offsetWidth / normalizedData.length;
  for (let i = 0; i < normalizedData.length; i++) {
    const x = width * i;
    const value = normalizedData[i];
    let height = value * canvas.offsetHeight - padding;

    if (height < 0) { height = 0; } else if (height > canvas.offsetHeight / 2) {
      height = canvas.offsetHeight / 2;
    }
    drawLineSegment(ctx, x, height, width, (i + 1) % 2);
  }
};

export const drawLineSegment = (ctx, x, y, width, isEven) => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#0f0";
  ctx.beginPath();
  y = isEven ? y : -y;
  ctx.moveTo(x, 0);
  ctx.lineTo(x, y);
  ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
  ctx.lineTo(x + width, 0);
  ctx.stroke();
};
