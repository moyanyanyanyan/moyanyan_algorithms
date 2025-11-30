var reverseString = function (s) {
  //延用双指针
  let left = 0 //左指针
  let right = s.length - 1 //右指针
  let tem = 0
  while (left < right) {
    //当左指针小于右指针时
    tem = s[left] //交换
    s[left] = s[right]
    s[right] = tem
    left++ //左指针右移
    right-- //右指针左移
  }
  return s
}
