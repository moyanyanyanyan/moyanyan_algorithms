var search = function (nums, target) {
  let left = 0 //left是nums的下标
  let right = nums.length //right是nums的下标
  while (left < right) {
    //如果left=right，说明已经遍历完了
    middle = left + ((right - left) >> 1) //middle是nums的下标
    if (target < nums[middle]) {
      //如果target比middle代表的值小
      right = middle //那么target只可能在left和middle之间，所以right=middle
    } else if (target == nums[middle]) {
      //如果target等于middle代表的值
      return middle //那么target就是middle，返回middle
    } else {
      //如果target比middle代表的值大
      left = middle + 1 //那么target只可能在middle和right之间，所以left=middle+1
    }
  }
  return -1
}
