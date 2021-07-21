interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
  summary(): string;
}

const oldCivic = {
	name: "civic",
	year: new Date(),
	broken: true,
  summary(): string{
    return `Name: ${this.name}`
  }
};

// Long Type Annotations
const printVehicle = (vehicle: { name: string; year: Date; broken: boolean }): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);

// Interface usage replacing long type annoation
const printVehicleWithInterface = (vehicle: Vehicle): void => {
	console.log(vehicle.summary());
};

printVehicleWithInterface(oldCivic);
