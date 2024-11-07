{
    function sumArray(arr: number[]): number {
        const sum = arr.reduce((acc, num) => acc + num, 0);
        return sum;
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
}