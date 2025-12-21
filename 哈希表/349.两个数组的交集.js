var intersection = function (nums1, nums2) {
  let same = []
  let k = 0
  for (let i = 0; i < nums1.length; i++) {
    //去对第一个数组每一个元素进行遍历
    for (let j = 0; j < nums2.length; j++) {
      //对第二个数组进行遍历
      if (nums1[i] == nums2[j]) {
        //如果两个数组有相同的元素
        let flag = 1 //定义一个标志位，用来判断是否重复
        for (let n = 0; n < k; n++) {
          //遍历same数组
          if (same[n] == nums1[i]) {
            //如果same数组中有相同的元素
            flag = 0 //标志位为0
          }
        }
        if (flag == 1) {
          //如果标志位为1
          same[k] = nums1[i] //将相同的元素添加到same数组中
          k++
        }
      }
    }
  }
  return same
}
//三个循环，我没招了，时间复杂度最大为O(n × m × min(n, m))，这个是我当时拿循环硬着头皮搞的
//以下是set的解决方案
var intersection = function (nums1, nums2) {
  let nums1Set = new Set(nums1) //set自动去重，减少循环工作量
  let nums2Set = new Set(nums2)
  let same = new Set()
  if (nums2Set.size > nums1Set.size) {
    //这里使得nums1Set总是size小的哪一个，避免我在if else
    let tem = nums1Set //语句里面复制粘贴的时候有的东西忘记改，我下面的遍历只要写一遍就够了
    nums1Set = nums2Set
    nums2Set = tem
  }
  for (let num of nums2Set) {
    //遍历小的set
    if (nums1Set.has(num)) {
      //用了方法has，这个方法的时间复杂度为O（1），底层是哈希表
      same.add(num) //实际上的性能比我再写一个for去遍历nums1Set好，再 写for时间复杂度就变成O（n）了
    }
  }
  return Array.from(same)
}
