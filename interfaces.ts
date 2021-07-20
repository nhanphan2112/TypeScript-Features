interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}

const oldCivic = {
	name: "civic",
	year: 2000,
	broken: true,
};

// Long Type Annotations
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);

// Interface usage replacing long type annoation
const printVehicleWithInterface = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};

printVehicleWithInterface(oldCivic);
