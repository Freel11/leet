/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const vals = [...nums1, ...nums2].sort((a, b) => a - b);
  if (vals.length % 2 !== 0) {
    return vals[Math.floor(vals.length / 2)];
  }
  return (vals[vals.length / 2] + vals[vals.length / 2 - 1]) / 2;
};

/******************************************************/

// Best answer:

var findMedianSortedArrays = function (nums1, nums2) {
  const l1 = nums1.length;
  const l2 = nums2.length;
  const pointer = l1 + l2;
  let i = 0;
  let j = 0;
  let m1 = 0;
  let m2 = 0;
  for (let k = 0; k <= pointer / 2; k++) {
    m2 = m1;
    if (i < l1 && j < l2) {
      if (nums1[i] < nums2[j]) {
        m1 = nums1[i];
        i++;
      } else {
        m1 = nums2[j];
        j++;
      }
    } else if (i < l1) {
      m1 = nums1[i];
      i++;
    } else {
      m1 = nums2[j];
      j++;
    }
  }
  if (pointer % 2 === 1) return m1;
  else return (m1 + m2) / 2;
};
