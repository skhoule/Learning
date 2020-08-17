const square = function (x) {
    return x*x
}
// Arrow Functions do not bind "this".
const square2 = (x) => {
    return x*x
}
// Quick Arrow function when function only returns a value.
const square3 = (x) => x*x

console.log(square(3));
console.log(square2(2));
console.log(square3(7));

const event = {
    name: 'Recon',
    guestList: ['Andrew','Jen', 'Mike'],
    printGuestList() {
        console.log(`Guest list for ${this.name}`);

        this.guestList.forEach((guest) => {
            console.log(`${guest} is attending ${this.name}`);
        })

        // //Normal function creates local "this" binding, under parent "this" binding. Arrow functions dont bind "this".
        // this.guestList.forEach(function (guest) {
        //     console.log(`${guest} is attending ${this.name}`);
        // })
    }
    // Arrow functions do not bind this keyword.
    // printGuestList: function () {
    //     console.log(`Guest list for ${this.name}`);
    // }
}
event.printGuestList()