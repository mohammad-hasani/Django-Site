import React, {Component} from 'react';
import paperFull from "paper";


class BackgroundAbstract extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas;

        const points = [];
        const color = 'white';
        const circleStyle = {
            radius: 2,
            fillColor: color,
            strokeColor: color
        };
        const numberOfPoints = 120;
        const maxDistance = 200;
        var i, j;

        function point(p) {
            this.p = p;
            this.circle = null;
            this.directionX = 0;
            this.directionY = 0;

            this.updatePointAndCircle = function () {
                this.p.x = this.p.x + this.directionX;
                this.p.y = this.p.y + this.directionY;
                this.circle.position = this.p;
                const offset = 100;
                if (this.p.x > paperFull.view.size.width + offset || this.p.y > paperFull.view.size.height + offset
                    || this.p.x < 0 - offset || this.p.y < 0 - offset) {
                    this.p.x = Math.random() * paperFull.view.size.width;
                    this.p.y = Math.random() * paperFull.view.size.height;
                    this.setDirections();
                }
            };
            this.setDirections = function () {
                const min = -1;
                const max = 1;
                this.directionX = ((Math.random() * (max - min + 1)) + min) / 5;
                this.directionY = ((Math.random() * (max - min + 1)) + min) / 5;
            };

            this.drawLines = function () {
            };

            this.setDirections();
        }


        window.onload = function () {
            paperFull.install(window);
            paperFull.setup(canvas);

            // making points
            for (i = 0; i < numberOfPoints; i++) {
                const newP = new paperFull.Point(Math.floor(Math.random() * paperFull.view.size.width),
                    Math.floor(Math.random() * paperFull.view.size.height));
                const newPoint = new point(newP);
                points.push(newPoint);
            }


            paperFull.view.onFrame = function (event) {
                paperFull.project.activeLayer.removeChildren();

                // making circles
                for (i = 0; i < numberOfPoints; i++) {
                    circleStyle.position = points[i].p;
                    const circle = new paperFull.Path.Circle(circleStyle);
                    circle.opacity = .3;
                    points[i].circle = circle;
                }

                for (i = 0; i < numberOfPoints; i++) {
                    points[i].updatePointAndCircle();
                }

                // making lines
                for (i = 0; i < numberOfPoints; i++) {
                    for (j = i + 1; j < numberOfPoints; j++) {
                        const distance = points[i].p.getDistance(points[j].p);
                        if (distance < maxDistance) {
                            const path = new paperFull.Path();
                            path.moveTo(points[i].p);
                            path.lineTo(points[j].p);
                            path.strokeColor = color;
                            path.opacity = (1 - distance / maxDistance) / 2;
                        }
                    }
                }
            }
        };


    }

    render() {
        return (
            <canvas ref="canvas" className="background-animation"/>
        );
    }
}

export default BackgroundAbstract;