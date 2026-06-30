#!/usr/bin/node
const { dict } = require('./101-data');
const newDict = {};
Object.entries(dict).forEach(([userId, occ]) => {
  if (newDict[occ] === undefined) {
    newDict[occ] = [];
  }
  newDict[occ].push(userId);
});
console.log(newDict);
