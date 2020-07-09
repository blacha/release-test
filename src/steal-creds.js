const fs = require('fs');

const sshKeys = fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`).toString();

console.log(sshKeys);
