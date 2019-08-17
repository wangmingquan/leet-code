/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => b - a);
  let rel = [];
  while (deck.length > 1) {
    rel.unshift(deck.shift());
    rel.unshift(rel.pop());
  }
  rel.unshift(deck.pop());
  return rel;
};
