/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  //整理思路：
  //三数之和多层循环，当然去重还是老方法
  //一层循环为指针1，二层循环为指针2，left是指针3，right是指针4
  //个人想法：和三数之和差不多，多一个循环的差别，注意到了两个昨天没注意到的小细节
  let left
  let right
  let sum = 0 //和类的都要去赋初值为0
  let checkLeftSame = new Set() //检查left重复
  let res = [] //答案
  for (let i = 0; i < nums.length - 1; i++) {
    //冒泡排序
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  for (let i = 0; i < nums.length - 3; i++) {
    //四个指针，所以-3
    if (i > 0 && nums[i] === nums[i - 1]) {
      //去重
      continue //写continue，不要写break
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      //内层指针，后面还有left,right指针，所以-2
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        //去重
        continue
      }
      left = j + 1 //每次j确定后都去重新给left，right赋值，这个是注意点，很多东西一定记得要重新赋值
      right = nums.length - 1
      sum = nums[i] + nums[j] + nums[left] + nums[right] //i,j,left,right到齐，可以给sum赋值了
      //其实这个赋值多余了，但是这个是一个思想，就是在其他东西变的时候，可能会产生因变量
      //while循环让left,right迭代，此时通过判断sun去移动left,right,移动后要重新给sum赋值
      while (left < right) {
        sum = nums[i] + nums[j] + nums[left] + nums[right] //每次循环完都要重新给sum赋值，修改迭代条件量
        if (sum === target) {
          if (!checkLeftSame.has(nums[left])) {
            //注意这个地方记住的是nums[left],不是left,会导致重复的，left是下标
            res.push([nums[i], nums[j], nums[left], nums[right]])
            checkLeftSame.add(nums[left])
          }
          left++
          right--
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
      checkLeftSame.clear() //每一次j变化的时候，这个left都要去清除，因为j变了，所以不作数了
    }
  }
  return res
}
//坑点
//1.这个left重复判断，这个add进set的值不要误写成left，那个是下标
//2.我这个leftCheckSame一定要在每次j变化的时候都去清0，不然逻辑错误，会漏掉答案
