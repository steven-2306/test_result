function allWildcardPermutations(input) {
    const WILDCARD = '*';
    const CHARACTERS = ['0', '1'];
    function replaceCharAt(string, position, replaceWith) {
      return ''.concat(
        string.slice(0, position),
        replaceWith,
        string.slice(position + 1)
      );
    }
    function isWildcardAt(string, position) {
      return string[position] === WILDCARD;
    }
    function hasWildcard(string) {
      return string.includes(WILDCARD);
    }
    function flattenArray(array) {
      return [].concat(...array);
    }
    function permutationsFrom(string, position) {
      if (!hasWildcard(string.slice(position))) {
        return [string];
      }
      if (isWildcardAt(string, position)) {
        return flattenArray(
          CHARACTERS.map(char =>
            permutationsFrom(replaceCharAt(string, position, char), position + 1)
          )
        );
      }
      return permutationsFrom(string, position + 1);
    }
    return permutationsFrom(input, 0);
  }