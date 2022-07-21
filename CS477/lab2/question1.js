"use strict";
/*eslint-disable*/
const dns = require('dns');
dns.resolve4('www.miu.edu',(err,ipaddress) =>{
    if(err)
    throw new error;
    console.log(ipaddress);
});