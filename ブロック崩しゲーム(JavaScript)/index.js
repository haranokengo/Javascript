      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');

      const paddleHeight = 10;
      const paddleWidth = 50;
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

      const bricks = [];
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

      function drawTime() {
        ctx.font = "30px 'Comic Sans MS'";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(timer, canvas.width/2-30, 40);
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

      function drawBall() {
        if(ballStatus == 1) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }else if(ballStatus == 0) {
          ctx.beginPath();
          ctx.arc(x, y, ballRadius, 0, Math.PI*2);
          ctx.fillStyle = "red";
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
                ballStatus = 0;
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

      

      
      // const block = {
      //   width: null,
      //   height: 20,
      //   data: [],

      //   update: function() {
      //     this.data.forEach(brick => {
      //       ctx.strokeRect(brick.x, brick.y, brick.width, brick.height);
      //       ctx.stroke();
      //     })
      //   }
      // }
      // const level = [
      //   [0,0,1,1,0,0],
      //   [0,1,0,0,1,0],
      //   [1,0,1,1,0,1],
      //   [1,0,1,1,0,1],
      //   [1,0,0,0,0,1],
      //   [1,0,1,1,0,1],
      // ]
      

      

      


      // const init = () => {
      //   paddle.x = canvas.width / 2 - paddle.width / 2;
      //   paddle.y = canvas.height - paddle.height;

      //   ball.x = canvas.width / 2;
      //   ball.y = canvas.height / 2 + 160;
      //   ball.dx = ball.speed;
      //   ball.dy = ball.speed;

      //   block.width = canvas.width / level[0].length;

      //   for(let i = 0; i < level.length; i++) {
      //     for(let j = 0; j < level[i].length; j++) {
      //       if(level[i][j]) {
      //          a = block.data.push({
      //           x: block.width * j,
      //           y: block.height * i,
      //           width: block.width,
      //           height: block.height
      //         })
      //       }
      //     }
      //   }
      // }

      
      // const loop = () => {
      //   ctx.clearRect(0,0,canvas.width,canvas.height);

      //   paddle.update();
      //   ball.update();
      //   block.update();
      //   drawScore.update();

      //   if(collide(ball, paddle)) {
      //     ball.dy *= -1;
      //     ball.y = paddle.y - ball.height;
      //   }

      //   block.data.forEach((brick, index) => {
      //     if(collide(ball, brick)) {
      //       ball.dy *= -1;
      //       score++;
      //       if(block.data.splice(index, 1));
      //       if(score == a) {
      //         alert("YOU WIN, CONGRATULATION!");
      //         document.location.reload();
      //       }
      //     }
      //   })

      //   const interval = window.requestAnimationFrame(loop);
      // }

      // init();
      // loop();

      // document.addEventListener('keydown', e => {

      //   if(e.key == 'ArrowLeft') {
      //     if(e.key == 'ArrowLeft' && paddle.x > 0){
      //       paddle.speed = -6;
      //     }
      //   }
      //   if(e.key == 'ArrowRight') {
      //     if(e.key == 'ArrowRight' && paddle.x < canvas.width - paddle.width) {
      //       paddle.speed = 6;
      //     }
      //   }
      // });
      // document.addEventListener('keyup', () => paddle.speed = 0);