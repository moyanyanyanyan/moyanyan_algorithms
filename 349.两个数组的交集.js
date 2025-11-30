var intersection = function (nums1, nums2) {
  let same = []
  let k = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        let flag = 1
        for (let n = 0; n < k; n++) {
          if (same[n] == nums1[i]) {
            flag = 0
          }
        }
        if (flag == 1) {
          same[k] = nums1[i]
          k++
        }
      }
    }
  }
  return same
}
