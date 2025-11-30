var reverseString = function (s) {
  //延用双指针
  let left = 0
  let right = s.length - 1
  let tem = 0
  while (left < right) {
    tem = s[left]
    s[left] = s[right]
    s[right] = tem
    left++
    right--
  }
  return s
}
