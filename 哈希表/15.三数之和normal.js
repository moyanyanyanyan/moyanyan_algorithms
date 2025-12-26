/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //这个部分是冒泡排序
  for (let i = 0; i < nums.length - 1; i++) {
    //只要定好nums.length-1个元素，最后一个会自动确定
    for (let j = 0; j < nums.length - 1 - i; j++) {
      //前一个和后一个比，i个已经排好要减掉，因为是前后比，最后两个只要比1次，所以-1
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  //三个指针，一个在循环改变，一个left，一个right处理相加>0和<0的情况
  let left
  let right
  let t
  let res = []
  for (let i = 0; i < nums.length - 2; i++) {
    //i就是第一个指针
    //每次都重新定义left指针和right指针
    if (i > 0 && nums[i] === nums[i - 1]) {
      //防止重复
      continue
    }
    left = i + 1 //i后面的那个元素
    right = nums.length - 1 //最后一个元素
    t = nums[i] + nums[left] + nums[right] //获得三元素之和
    let leftCheck = new Set() //每次i改变之后这个leftCheck都必须清0
    while (left < right) {
      //只要left<right就一直迭代，<0则left++，>0则 right--,只要不break迟早会<
      // 不能用！=会死循环的,血泪教训，同时++--就会死循环
      t = nums[i] + nums[left] + nums[right]

      if (t === 0) {
        if (!leftCheck.has(nums[left])) {
          res.push([nums[i], nums[left], nums[right]])
          leftCheck.add(nums[left]) //如果push了就加这个left，防止重复
        }
        left++
        right--
      } else if (t < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}
//1.这个部分的去重有两部分，第一部分是外面的循环，在前一个和后一个相等时要continue
//  第二部分是里面的while的left和right部分，我这个地方也得去重，这个left和right也会重复的比如-3，1，1，2，2
//2.while里面的条件写的是<,而不是！=，写！=会导致死循环，因为在同时++--
//3.因为是有三个，所以for循环里面写的是nums.length-2
//4.这个set是push进去的要记录，不是什么东西都要记录的
//5.while里面每次都要迭代三数之和
