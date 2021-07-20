const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];
// Below are tuples
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
