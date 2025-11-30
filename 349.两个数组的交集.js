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
//三个循环，我没招了
