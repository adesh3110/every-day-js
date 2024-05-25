// print diameter, area amd circumference of circles whoes radius is given in an array

const radii = [3, 6, 5, 4, 7, 8, 9];
const PI = Math.PI;

// Mathematical Formula
const diameter = (r) => r * 2;
const area = (r) => PI * r * r;
const circumference = (r) => PI * r * 2;

// Helper to map input to outpuse based on formula(function)
const transformer = (arr, fn) => arr.map(fn);

// Helper function for printing
const print = (value, tag = "") => console.log(tag, value);

const diameters = transformer(radii, diameter);
const circumferences = transformer(radii, circumference);
const areas = transformer(radii, area);

print(circumferences, "CIRCUMFERENCES");
print(diameters, "DIAMETERS");
print(areas, "AREAS");
