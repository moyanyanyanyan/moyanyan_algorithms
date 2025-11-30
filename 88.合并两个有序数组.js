var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2) // 合并两个数组
  nums1.sort((a, b) => a - b) // 排序
}
