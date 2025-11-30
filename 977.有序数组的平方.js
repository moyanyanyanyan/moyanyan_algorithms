var sortedSquares = function (nums) {
  // 使用双指针方法
  // 弄一个新的空数组
  let n = nums.length
  let res = new Array(n).fill(0) //JS创建数组的语法还没学到，我先copy一下
  // 一个指针指在原数组left,一个指在right,如果有一个数被用掉了，指针就走一格
  let left = 0
  let right = n - 1
  let index = n - 1
  // 然后要比一比
  while (left - right != 1) {
    if (nums[left] * nums[left] < nums[right] * nums[right]) {
      // 把这个大的给到array的最后一位
      res[index--] = nums[right] * nums[right]
      right -= 1
    } else {
      res[index--] = nums[left] * nums[left] //包含相等的情况
      left += 1
    }
    //之后应该要循环把index和left_or_right改变，突然发现index的变化可以通过index--来实现
    //然后left_or_right的变化也可以在if_else后面做手脚
    // 我们这个if_else的语句要在array没有填满时一直执行，所以要有一个条件限制，现在让我来补写一个while
    // 这个while条件本来想写array未满，由于无法表达，改成left！=right,因为当执行完毕的时候left肯定在right的左边一位
    // 对上面纠错，当left=right时这个元素仍然还没加进去，所以条件改成left-right!=1
  }
  return res
}

//复杂做法
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i]
  }
  for (let k = 0; k < nums.length - 1; k++) {
    //k代表以及排好的元素的个数,最后一轮剩下2个，此时排好的是nums.length-2个
    for (let j = 0; j < nums.length - k - 1; j++) {
      //j代表当前轮次要比较的元素个数
      if (nums[j] > nums[j + 1]) {
        //如果前一个元素大于后一个元素
        let temp = nums[j] //把前一个元素给temp
        nums[j] = nums[j + 1] //把后一个元素给前一个元素
        nums[j + 1] = temp //把temp给后一个元素
      }
    }
  }
  return nums
}
