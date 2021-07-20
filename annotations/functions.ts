const add = (a: number, b: number): number => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}

//below is an example of anonymous fuction in Typescript
const multiple = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};

//Adding object type to a function
const todayWeather = {
	date: new Date(),
	weather: "sunny",
};
// Destructoring in TypeScript
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todayWeather);
