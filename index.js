import { emojis } from "./emojis";
import array from "lodash";

export const isOneEmoji = (string) =>
  typeof string === "string" ? stringIsEmoji(string.trim()) : false;

export const isMultipleEmoji = (string) =>
  typeof string === "string"
    ? allStringsAreEmoji(array.toArray(string.trim()))
    : false;

const stringIsEmoji = (string) =>
  emojis.some((emoji) => emoji.character === string);

const allStringsAreEmoji = (array) =>
  array.every((element) => stringIsEmoji(element));
