{
    function removeDuplicates(arr: number[]): number[] {
        return arr.filter((num, index) => arr.indexOf(num) === index);
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}