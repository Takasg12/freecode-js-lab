const lunches = []

//function addLunchToEnd (push)
const addLunchToEnd = (lunchesArray, item) => {
    lunchesArray.push(item)
    console.log(`${item} added to the end of the lunch menu.`)
    return lunchesArray;
}

//function addLunchToStrat (Unshift)
const addLunchToStart = (lunchesArray, item) => {
    lunchesArray.unshift(item);
    console.log(`${item} added to the start of the lunch menu.`)
    return lunchesArray;
}

//function remove (pop)
const removeLastLunch = (lunchesArray) => {
    if (lunchesArray.length === 0) {
        console.log("No lunches to remove.")
        return lunchesArray;
    }
    const removed = lunchesArray.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
    return lunchesArray;
}

// function remove (shift)
const removeFirstLunch = (lunchesArray) => {
    if (lunchesArray.length === 0) {
        console.log("No lunches to remove.");
        return lunchesArray;
    }
    const removed = lunchesArray.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
    return lunchesArray;
}

//function grtRandomLunch 
const getRandomLunch = (lunchesArray) => {
    if (lunchesArray.length === 0) {
        console.log("No lunches available.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * lunchesArray.length);
    console.log(`Randomly selected lunch: ${lunchesArray[randomIndex]}`);
}

//function showLunchMenu
const showLunchMenu = (lunchesArray) => {
    if (lunchesArray.length === 0) {
        console.log("The menu is empty.");
        return
    }
    console.log(`Menu items: ${lunchesArray.join(', ')}`);
}

let testArray = []
addLunchToEnd(testArray, "Tacos")
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"))

addLunchToStart(lunches, "Shusi");
console.log(addLunchToStart(["Burger", "Shushi"], "Pizza"));

removeLastLunch([]);
removeLastLunch(["Stew", "Soup", "Toast"]);
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

removeFirstLunch([]);
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
console.log(removeFirstLunch(["Shushi", "Pizza", "Burger"]));

getRandomLunch([]);
getRandomLunch(["Pizza", "Burger", "Shushi"])

showLunchMenu([]);
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);