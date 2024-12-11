# MongoDB $inc Operator with Nested Arrays

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB to update nested arrays. The provided code snippet showcases the incorrect usage and its solution. The issue arises because the `$inc` operator is designed to increment numeric fields and does not directly support incrementing elements within nested arrays.

## Bug Description

The primary issue revolves around attempting to increment a value within a nested array using `$inc`.  This doesn't modify the array as expected and often leads to errors or unexpected results. The `$inc` operator expects a top-level field to operate on.

## Solution

The provided solution utilizes the `$inc` operator correctly by either restructuring the document or using array operators (`$push`, `$pull`, `$set`) to manipulate the nested array values directly.