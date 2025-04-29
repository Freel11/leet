/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const subStrs = [];
  for (let i = 0; i < s.length; i++) {
    const tmp = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
      if (tmp.includes(s[j])) {
        break;
      }
      tmp.push(s[j]);
    }
    subStrs.push(tmp);
  }

  let maxLen = 0;

  subStrs.forEach((s) => {
    if (s.length > maxLen) {
      maxLen = s.length;
    }
  });

  console.log(maxLen);
};

/************************************************/

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("anviaj");

/************************************************/

// Best answer:

var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let charFreqMap = new Map();
  let maxlen = 0;

  for (let end = 0; end < s.length; end++) {
    if (charFreqMap.has(s[end]) && charFreqMap.get(s[end]) >= start) {
      start = charFreqMap.get(s[end]) + 1;
    }

    charFreqMap.set(s[end], end);
    maxlen = Math.max(maxlen, end - start + 1);
  }

  return maxlen;
};
