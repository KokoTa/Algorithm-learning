// Given n non-negative integers a1, a2, ..., an, 
// where each represents a point at coordinate(i, ai).
// n vertical lines are drawn such that the two endpoints of line 
// i is at(i, ai) and(i, 0).Find two lines, which together with x-axis forms a container,
// such that the container contains the most water.
// Note: You may not slant the container and n is at least 2.
// 简单来说就是XY坐标图上有很多个点，点垂直连接X轴，形成很多的竖条
// 求两个竖条和X轴形成的桶最大的面积是多少
// PS1：height数组[1,2,3]对应点(0,1) (1,2) (2,3)
// PS2：若两条竖条长短不一，计算以最短的那条为准，就如水桶装水一样

/**
 * @param {number[]} height 含有多个高度的数组
 * @return {number}
 */
var maxArea = function (height) {
    var area = 0;
    var left = 0;
    var right = height.length - 1;
    while(left <= right) {
        area = Math.max(area, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return area;
};