"use strict"
let canvas = document.getElementById("area");
let context = canvas.getContext("2d");

//линии система координат
context.moveTo(150,0);
context.lineTo(150,300);
context.stroke();

context.moveTo(0,150);
context.lineTo(300,150);
context.stroke();

//стрелки
context.moveTo(140,10);
context.lineTo(150,0);
context.stroke();

context.moveTo(160,10);
context.lineTo(150,0);
context.stroke();

context.moveTo(290,140);
context.lineTo(300,150);
context.stroke();

context.moveTo(290,160);
context.lineTo(300,150);
context.stroke();

//деление вправо
context.moveTo(200,140);
context.lineTo(200,160);
context.stroke();
context.font = "italic 10pt Arial";
context.fillText("R/2", 190, 132);

context.moveTo(250,140);
context.lineTo(250,160);
context.stroke();
context.font = "italic 10pt Arial";
context.fillText("R", 245, 132);

//деление ввех
context.moveTo(140,100);
context.lineTo(160,100);
context.stroke();
context.font = "italic 10pt Arial";
context.fillText("R/2", 168, 105);

context.moveTo(140,50);
context.lineTo(160,50);
context.stroke();
context.fillText("R", 168, 55);

//деление влево
context.moveTo(100,140);
context.lineTo(100,160);
context.stroke();
context.font = "italic 10pt Arial";
context.fillText("-R/2", 85, 132);

context.moveTo(50,140);
context.lineTo(50,160);
context.stroke();
context.font = "italic 10pt Arial";
context.fillText("-R", 42, 132);

//деление вниз
context.moveTo(140,200);
context.lineTo(160,200);
context.stroke();
context.font = "italic 10pt Arial";
context.fillText("-R/2", 170, 204);

context.moveTo(140,250);
context.lineTo(160,250);
context.stroke();
context.font = "italic 10pt Arial";
context.fillText("-R", 170, 254);


//прямоугольник
context.fillStyle = '#CD853F';
context.globalAlpha = 0.2;
let rect = {
    x:150,
    y:50,
    width:100,
    height:100
};
context.fillRect(rect.x,rect.y,rect.width,rect.height);

//треугольник
let triangle = {
    x1: 100,
    y1: 150,
    x2: 150,
    y2: 150,
    x3: 150,
    y3: 250
};
context.globalAlpha = 0.2;
context.beginPath();
context.moveTo(triangle.x1, triangle.y1);
context.lineTo(triangle.x2, triangle.y2);
context.lineTo(triangle.x3, triangle.y3);
context.lineTo(triangle.x1, triangle.y1);
context.closePath();
context.fillStyle = '#CD853F';
context.fill();

//часть окружности
let part_of_circle = {
    x1:150,
    y1:150,
    radius:100
};
context.beginPath();
context.moveTo(part_of_circle.x1, part_of_circle.y1);
context.arc(part_of_circle.x1, part_of_circle.y1, part_of_circle.radius, Math.PI, Math.PI/-2, false);
context.closePath();
context.fillStyle = '#CD853F';
context.fill();