// Solution
// Only change code below this line
class Thermostat {
    constructor(FarenTemperature) {
        this._CelTemperature = (FarenTemperature - 32) * (5 / 9);
    }

    // getter
    get temperature() {
        return this._CelTemperature;
    }

    // setter
    set temperature(newTemperature) {
        this._CelTemperature = newTemperature;
    }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius