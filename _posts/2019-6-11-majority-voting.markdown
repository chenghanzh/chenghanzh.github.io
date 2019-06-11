---
layout: csPost
title:  "Majority Voting Algorithm"
categories: [cs]
classification: [cs-algorithm]
reference: https://gregable.com/2013/10/majority-vote-algorithm-find-majority.html
identifier:
  - Problem_statement
  - Boyer-Moore_Algorithm
---

<h2 id="Problem_statement"> Problem Statement </h2>

Imagine that you have a non-sorted list of values. You want to know if there is a value that is present in the list for more than half of the elements in that list. If so what is that value? If not, you need to know that there is no majority element. You want to accomplish this as efficiently as possible.

<br />

<h2 id="Boyer-Moore_Algorithm"> Boyer-Moore Algorithm </h2>

In the first pass, we generate a single candidate value which is the majority value if there is a majority. The second pass simply counts the frequency of that value to confirm.

```c++
// The first pass
int candidate = 0;
int count = 0;
for (auto value:input){
  if(count==0) candidate = value;
  if(candidate==value) count++ else count--;
}
```

```count``` records the times that candidate appears. If count is below zero, candidate is no longer the number that appears most and we need to switch to another candidate.

Time complexity: O(n); Space complexity: O(1).
