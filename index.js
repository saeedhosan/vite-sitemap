
import { format } from "date-fns";


const today = new Date()

console.log(format(today, "yyyy-MM-dd'T'HH:mm:ss'Z'"))
console.log('\n');
console.log((new Date()).toISOString());