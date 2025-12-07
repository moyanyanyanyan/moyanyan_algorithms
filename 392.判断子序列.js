/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
  let tindex = 0 //这个是精华，这个是一个指针，用来指向t的下一个字母
  let flag = false //记录每个字母是否匹配到了
  for (let i = 0; i < s.length; i++) {
    //这个循环来遍历s里面的东西
    let searchs = s[i]
    flag = false //每次都要重置，代表每次一开始都是没匹配到的
    for (let j = tindex; j < t.length; j++) {
      //这个循环来遍历t里面的东西
      if (t[j] === searchs) {
        //如果匹配到了
        tindex = j + 1 //tindex要指向下一个，因为下一个才有可能匹配到s的下一个字母
        flag = true
        break //匹配到了就跳出循环，因为已经匹配到了
      }
    }
    if (!flag) {
      return false
    }
  }
  return true
}
