import { foo, bar } from './math';
import data from './../data/test.json'
import './../css/test.css'

const  d = JSON.stringify(data);

document.body.append("entry.js is working.../");
document.body.append(foo(3) + "/");
document.body.append(bar(3) + "/");
document.body.append(d + "/");