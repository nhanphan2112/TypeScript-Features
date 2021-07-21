interface Reportable {
	summary(): string;
} 

const oldCivic = {
	name: "civic",
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

// Long Type Annotations
const printVehicle = (vehicle: { name: string; year: Date; broken: boolean }): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);

// Interface usage replacing long type annoation
const printSummaryInterface = (item: Reportable): void => {
	console.log(item.summary());
};

printSummaryInterface(oldCivic);
