const _ = require("lodash");
const { emojis } = require("./emojis");

const isOneEmoji = (string) =>
  typeof string === "string" ? stringIsEmoji(string.trim()) : false;

const isMultipleEmoji = (string) =>
  typeof string === "string"
    ? allStringsAreEmoji(_.toArray(string.trim()))
    : false;

const stringIsEmoji = (string) => emojis.some((emoji) => emoji === string);

const allStringsAreEmoji = (array) =>
  array.length > 0 && array.every((element) => stringIsEmoji(element));

module.exports = {
  isOneEmoji,
  isMultipleEmoji,
};
