      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');

      const paddleHeight = 10;
      let paddleWidth = 50;
      const paddleOffsetBottom = 80;
      let paddleX = (canvas.width - paddleWidth) / 2;

      let x = canvas.width/2
      let y = canvas.height - 150;
      let dx = 2;
      let dy = -2;

      const ballRadius = 5;
      let ballStatus = 1;

      let rightPressed = false;
      let leftPressed = false;

      const brickRowCount = 6;
      const brickColumnCount = 14;
      const brickColors = ["#F39800", "#FFF100", "#8FC31F"];
      const brickWidth = 25;
      const brickHeight = 10;
      const brickPadding = 5;
      const brickOffsetTop = 70;
      const brickOffsetLeft = 30;

      let score = 0;

      let lives = 3;

      let bricks = [];
      for(let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for(let r = 0; r < brickRowCount; r++) {
          bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
      }

      document.addEventListener("keydown", keyDownHandler, false);
      document.addEventListener("keyup", keyUpHandler, false);
      document.addEventListener("mousemove", mouseMoveHandler, false);

      function mouseMoveHandler(e) {
        let relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > paddleWidth && relativeX < canvas.width) {
          paddleX = relativeX - paddleWidth;
        }
      }

      function drawBricks() {
        for(let c = 0; c < brickColumnCount; c++) {
          for(let r = 0; r < brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
              let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
              let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              ctx.beginPath();
              ctx.rect(brickX, brickY, brickWidth, brickHeight);
              ctx.fillStyle = brickColors[Math.floor(r/2)];
              ctx.fill();
              ctx.closePath();
            }
          }
        }
      }

      // let itemY = 0;
      function drawItems() {
        for(let c = 0; c < brickColumnCount; c++) {
          for(let r = 0; r < brickRowCount; r++) {
            if(bricks[c][r].status == 0) {
              let itemX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
              let itemY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
              ctx.beginPath();
              ctx.arc(itemX, itemY, ballRadius, 0, Math.PI*2);
              ctx.fillStyle = "#00FF00";
              ctx.fill();
              ctx.closePath();
              itemY++;
            }
          }
        }
          // drawItems(itemX, itemY);
          // ctx.beginPath();
          // ctx.arc(itemX, itemY, ballRadius, 0, Math.PI*2);
          // ctx.fillStyle = "#00FF00";
          // ctx.fill();
          // ctx.closePath();
          // itemX += 50;
          // itemY += 50;
      }

      function drawBall() {
        if(ballStatus == 0) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#00FF00";
          ctx.fill();
          ctx.closePath();
        }
        else if(ballStatus == 1) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#00FFFF";
          ctx.fill();
          ctx.closePath();
        }
        else if(ballStatus == 2) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#FFFF00	";
          ctx.fill();
          ctx.closePath();
        }
        else if(ballStatus == 3) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#FF0000	";
          ctx.fill();
          ctx.closePath();
        }
        else if(ballStatus == 4) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#FF00FF";
          ctx.fill();
          ctx.closePath();
        }
        else if(ballStatus == 5) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#0000FF";
          ctx.fill();
          ctx.closePath();
        }
        else if(ballStatus == 6) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#5507FF";
          ctx.fill();
          ctx.closePath();
        }
        else if(ballStatus == 7) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#00F9A9";
          ctx.fill();
          ctx.closePath();
        }
      }

      function collisionDetection() {
        for(let c = 0; c < brickColumnCount; c++) {
          for(let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status == 1) {
              if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                dy = -dy;
                b.status = 0;
                ballStatus = Math.floor( Math.random() * 8 );
                score++;
                if(score == brickRowCount * brickColumnCount) {
                  alert("YOU WIN, CONGRATULATIONS!");
                  document.location.reload();
                }
              }
            }
          }
        }
      }

      function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + score, 8, 20);
      }

      function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
      }


      function keyDownHandler(e) {
        if(e.key == "ArrowRight") {
          rightPressed = true;
        }
        else if(e.key == "ArrowLeft") {
          leftPressed = true;
        }
      }

      function keyUpHandler(e) {
        if(e.key == "ArrowRight") {
          rightPressed = false;
        }
        else if(e.key == "ArrowLeft") {
          leftPressed = false;
        }
      }

      function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight-paddleOffsetBottom, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawItems();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();
        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
          dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        }
        else if(y + dy > canvas.height-paddleOffsetBottom-ballRadius) {
          if (y+dy<canvas.height-paddleOffsetBottom-ballRadius+brickHeight) {
            if(x>paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
                ballStatus = Math.floor( Math.random() * 8 );
            }
          }
          if(y + dy > canvas.height - ballRadius) {
            lives--;
            if(!lives) {
              alert("GAME OVER");
              document.location.reload();
            }
            else {
              x = canvas.width / 2;
              y = canvas.height - paddleOffsetBottom - brickHeight;
              dx = 2;
              dy = -2;
              paddleX = (canvas.width - paddleWidth) / 2;
            }
          }
        }

        if(rightPressed && paddleX < canvas.width - paddleWidth) {
          paddleX += 7;
        }
        else if(leftPressed && paddleX > 0) {
          paddleX -= 7;
        }
        x += dx;
        y += dy;
      }
      const interval = setInterval(draw, 10);