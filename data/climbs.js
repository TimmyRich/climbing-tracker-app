// Urban Climb locations
export const URBAN_CLIMB_GYMS = [
  "Milton",
  "West End",
  "Newstead"
];

// Locations within a gym
export const GYM_ZONES = new Map([
  ["Milton", ["The Cave"]],
  ["West End", ["Stronarch"]],
  ["Newstead", ["Big Bulge"]]
]);

// Grade/Difficulty of a climb
export const GRADES = [ // Wish this could be an enum :(
  "Yellow",
  "Blue",
  "Purple",
  "Green",
  "Orange",
  "Red",
  "Black",
  "White"
];

/**
 * Represents a climbing route at an Urban Climb gym.
 * 
 * @property {string} gym - The Urban Climb location.
 * @property {string} zone - The zone within the gym where the climb is located.
 * @property {string} grade - The difficulty/grade of the climb
 * @property {Date} date - The date the climb was registered.
 * 
 * This class defines key attributes of a climb, such as location, zone,
 * difficulty, and date. Climbs are regularly reset, and each gym has 
 * multiple zones with climbs of varied difficulty.
 */
export class Climb {
  /**
   * Create a new Climb.
   * @param {string} gym - Urban Climb location
   * @param {string} zone - Zone within the gym
   * @param {string} grade - Climb difficulty
   * @param {string} date - Date the climb was registered
   */
  constructor(gym, zone, grade, date) {

    // Validate constructor args
    if (!URBAN_CLIMB_GYMS.includes(gym)) {
      throw new Error(`Invalid gym: ${gym}`);
    }
    if (!GYM_ZONES.get(gym).includes(zone)) {
      throw new Error(`Invalid zone: ${zone}`);
    }
    if (!GRADES.includes(grade)) {
      throw new Error(`Invalid grade: ${grade}`);
    }
    //TODO add date validator

    // If no date provided, use current date
  if (!date) {
    date = new Date();
  } else {
    date = new Date(date);
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date: ${date}`);
    }
  }
    

    this.gym = gym;
    this.zone = zone;
    this.grade = grade;
    this.date = date;
  }
}