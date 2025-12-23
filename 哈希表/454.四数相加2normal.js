/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map12 = new Map() //使用map来存储nums1和nums2的和
  let sum = 0 //sum变量存储的是nums1和nums2里面变量相加的值，每个循环都会迭代
  let n = 0 //n变量存储的是和为0的元数组的个数
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      sum = nums1[i] + nums2[j]
      map12.set(sum, (map12.get(sum) || 0) + 1) //如果没有这个sum这个键，这个map12.get(sum)=undefined,undefined+1=NaN
      //有||那么前面这个undefined不会执行，会取到后面的0
    }
  }
  let check = 0 //要去map12里面check的值
  for (const num3 of nums3) {
    //做了优化，直接遍历数组里面的值
    for (const num4 of nums4) {
      check = 0 - num3 - num4 //每次循环check都重新赋值
      if (map12.has(check)) {
        //如果有check
        n += map12.get(check) * 1
      }
    }
  }
  return n
}
