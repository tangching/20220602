var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){ //預設值(工廠)
		this.r= args.r || random(200)  //  ||符號主要設定優先使用args.r，如果沒有傳args.r參數，採用下一個值
		this.p= args.p || {x:random(width),y:random(height)}  
		this.v=args.v || {x:random(-1,1),y:random(-1,1)}
		this.color = random(colors)
	}	
}
var ball
var balls=[]  //宣告一個陣列
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<10;i++){
		ball = new Ball({p:{x:width/2,y:height/2}})
		balls.push(ball)
	}	
}

function draw() {
	background(0);
	for(var i=0;i<balls.length;i++){
		let ball = balls[i];		
		fill(ball.color)
		circle(ball.p.x, ball.p.y , ball.r);		
		ball.p.x=ball.p.x+ball.v.x
		ball.p.y+=ball.v.y
	}
}