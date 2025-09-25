export class Weather {
  constructor(
    public id: number,
    public location: string,
    public temperature: number,
    public feelsLike: number,
    public description: string,
    public icon: string,
    public humidity: number,
    public pressure: number,
    public windSpeed: number,
    public timestamp: number
  ) {}

  get temperatureCelsius(): number {
    return Math.round(this.temperature - 273.15);
  }

  get feelsLikeCelsius(): number {
    return Math.round(this.feelsLike - 273.15);
  }

  get formattedDescription(): string {
    return this.description.charAt(0).toUpperCase() + this.description.slice(1);
  }
}

export class WeatherForecast {
  constructor(
    public date: Date,
    public temperature: number,
    public minTemp: number,
    public maxTemp: number,
    public description: string,
    public icon: string,
    public humidity: number,
    public windSpeed: number
  ) {}

  get temperatureCelsius(): number {
    return Math.round(this.temperature - 273.15);
  }

  get minTempCelsius(): number {
    return Math.round(this.minTemp - 273.15);
  }

  get maxTempCelsius(): number {
    return Math.round(this.maxTemp - 273.15);
  }
}