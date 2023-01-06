"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeKey = exports.genFunctionName = void 0;
// generate function name based on dir name and filename
const genFunctionName = (dirname, filename) => {
    const dirName = dirname.split("/").slice(-1)[0].toLowerCase();
    const fileName = filename.split("/").slice(-1)[0].split(".")[0];
    const pascalFileName = fileName.substring(0, 1).toUpperCase() + fileName.substring(1);
    return `${dirName}${pascalFileName}`;
};
exports.genFunctionName = genFunctionName;
/**
 * Generate a random string of numbers and letters
 * @param {number} length - The length of the key to generate.
 * @returns A string of random numbers.
 */
const makeKey = (length) => {
    const result = [];
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++)
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    return result.join("");
};
exports.makeKey = makeKey;
//# sourceMappingURL=functions.js.map