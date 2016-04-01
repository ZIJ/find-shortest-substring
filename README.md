# find-shortest-substring
An interview problem designed to assess coding skills and understanding of complexity

Rephrased version of the [Minimal Window Substring](https://leetcode.com/problems/minimum-window-substring) puzzle

## The problem

Given two strings, find the shortest substring of the first string that contains all letters of the second one. Count matters.
Examples:
```
"AAAAABBBB", "BAB" -> "ABB"
"AAABBBCCC", "ABC" -> "ABBBC"
"THELONGTEXT", "ETT" -> "TEXT"
```

## Implementation

- O(n) CPU / O(n) memory solution based on two hashmaps and two sliding window pointers
- Written in JavaScript targeting ECMAScript 2015 or newer environments
- Code style favors readability over compactness

See [findShortestSubstring.js](https://github.com/ZIJ/find-shortest-substring/blob/master/findShortestSubstring.js)



