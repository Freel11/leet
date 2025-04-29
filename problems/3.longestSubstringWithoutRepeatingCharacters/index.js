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
