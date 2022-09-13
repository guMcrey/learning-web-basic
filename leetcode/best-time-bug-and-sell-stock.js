/**
 * 买卖股票的最佳时机: https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 * 描述: 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票
 * 思路: 贪心算法, 尽最大可能在最低点买入, 最高点卖出, 保证利润尽可能最大
 */

function maxProfit(prices) {
    if (!prices.length) return 0;
    let buy = prices[0]
    let maxPrices = 0;
    let finallyPrices = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        }
        if (prices[i] > buy) {
            maxPrices = prices[i] - buy;
        }
        if (maxPrices > finallyPrices) {
            finallyPrices = maxPrices;
        }
    }
    return finallyPrices;
}

console.log(maxProfit([0, 9, 3, 2]))  // 9