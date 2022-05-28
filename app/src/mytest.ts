import 'core-js/actual/array/from';
import 'core-js/actual/set'; 
import hashids  from '@dalongrong/hashids'

let myhashids = new hashids("demoapp",10)

// @ts-ignore
console.log(myhashids.encode(3333))