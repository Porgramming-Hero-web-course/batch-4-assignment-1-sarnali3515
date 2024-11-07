{
    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shapeObj: Shape): number {
        if (shapeObj.shape === "circle") {
            const area: number = Math.PI * shapeObj.radius * shapeObj.radius;
            return parseFloat(area.toFixed(2));
        }

        if (shapeObj.shape === "rectangle") {
            const area: number = shapeObj.width * shapeObj.height;
            return area;
        }
        return 0;
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);

    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    console.log(rectangleArea);

}