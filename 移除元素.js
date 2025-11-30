var removeElement = function (nums, val) {
  //一个快指针，一个慢指针，如果有不一样的，慢指针停下，快指针继续前进，然后当快指针指向的值和目标不一样时，就进行替换
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j] = nums[i]
      j += 1 //当i碰到target会错位，然后就会在下一个循环里把j位的数字挪到i位，实现搬运功能
      //i碰到不是val的k就+1
    }
  }
  return j
}
