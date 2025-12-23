/* ### Create a date object from a string or timestamp (milliseconds) ### */
const now = new Date();
console.log(now); // Current date and time
console.log("Current Date and Time:", now.toString());
const date1 = new Date("2024-06-15T12:30:00Z"); // ISO 8601 format (000Z for UTC) - this also mean we can create date from String
const date2 = new Date(1718322600000); // Timestamp in milliseconds
const yesterday = now - 24 * 60 * 60 * 1000; // Subtracting 1 day in milliseconds

console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Date from 3 days in milliseconds
// 3 * 24 * 60 * 60 * 1000 = 259200000 milliseconds
// 259200000 -> Timestamp
// or we can use getTime() method to get the timestamp
console.log(date1.getTime()); // Milliseconds since January 1, 1970
// then we can create date from timestamp
console.log(new Date(259200000)); // Create date from timestamp
console.log(new Date(date1.getTime())); // Create date from timestamp

// Date comparison
console.log(date1 > date2); // true or false based on the dates
console.log(date1.getTime() === date2.getTime()); // false

/* ### Experimenting Internationalizing Date API ### */
// look for more options here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
console.log(new Intl.DateTimeFormat("en-US").format(now)); // "6/15/2024"
console.log(new Intl.DateTimeFormat("de-DE").format(now)); // "15.6.2024"
console.log(new Intl.DateTimeFormat("th-TH").format(now)); // "15/6/2567"
const thaiFullDate = new Intl.DateTimeFormat("th-TH", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}).format(now);

console.log(thaiFullDate); // e.g., "วันเสาร์ที่ 15 มิถุนายน พ.ศ. 2567 เวลา 19:30:00"

/* ### Operations on dates ### */
const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day
const tomorrow = new Date(now.getTime() + oneDay);
console.log("Tomorrow's Date:", tomorrow.toString());
const theDayAfterTomorrow = (day) => new Date(day.getTime() + 2 * oneDay);
console.log(
  "The Day After Tomorrow's Date:",
  theDayAfterTomorrow(now).toString()
);
const formatDate = function (date) {
  const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / oneDay;
  const daysPassed = calcDaysPassed(date, now);
  console.log(daysPassed);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // else return formatted date
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
console.log(formatDate(yesterday));

/* ### Get various date and time components ### */
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); //Day of the week (0-6)
console.log(now.toISOString()); // ISO 8601 format for example: "2024-06-15T12:30:00.000Z"
console.log(now.toLocaleString()); // Locale specific format for example: "6/15/2024, 12:30:00 PM"
console.log(now.toUTCString()); // UTC format for example: "Sat, 15 Jun 2024 12:30:00 GMT"

/* ### Date / Month / Year manipulation ### */
const date = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
console.log(`Today is: ${date}-${month + 1}-${year}`); // Month is 0-indexed
// Time manipulation
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

// Setting date and time
console.log("Set a new date from:" + date1); // Change year to 2025date1.setFullYear(2025))); // Change year to 2025
console.log("Original Timestamp:", date1.getTime());
date1.setFullYear(2025); // Change year to 2025
date1.setMonth(11); // December (0-11)
date1.setDate(25);
date1.setHours(10);
date1.setMinutes(45);
date1.setSeconds(30);
console.log("Updated Timestamp:", date1.getTime());
console.log("Updated Date1:", date1.toString());
