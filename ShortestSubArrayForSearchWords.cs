public static Result GetShortestSubArray(List<String> inputArray, HashSet<String> searchWrods)
{
    // inputArrau: [ a1, a2, a3, a4, a5, a6 ]
    // searchWords: [ x0, x1, x2, x3, x4, xn ]
    var begin = -1;
    var end = -1;
    var length = int.MaxValue;

	// save searched string index into the queue
    var queue = new Queue<int>();
    // this map record the occurrency of the string from begin to end
    var occMap = new Dictionary<string, int>();
    var count = 0;
    var result = new Result();
    for (var i = 0; i < inputArray.Count; i++)
    {
        var currentStr = inputArray[i];
        if (searchWrods.Contains(currentStr))
        {
        	// put index into the queue
            queue.Enqueue(i);
            
            // move end to i
            end = i;

            if (!occMap.ContainsKey(currentStr))
            {
            	// if first time find the str in the input, increase the count
                occMap.Add(currentStr, 1);
                count++;
            }
            else
            {
                occMap[currentStr] = occMap[currentStr] + 1;
            }

			// find all the strings in the search words set from begin to end
            if (count == searchWrods.Count)
            {
                begin = queue.Peek();
                
    			// Iterating the queue to find [xi ... xj] when xi, xj only appear once and searchWords are all in the array
                while (occMap[inputArray[begin]] > 1)
                {
                    queue.Dequeue();
                    occMap[inputArray[begin]] = occMap[inputArray[begin]] - 1;
                    begin = queue.Peek();
                }

                // get length;
                var offset = end - begin + 1;
                if (offset < length)
                {
                    length = offset;
                    result.Begin = begin;
                    result.End = end;
                }

                // once calculate the length, remove the first string from the queue and map
                occMap.Remove(inputArray[begin]);
                queue.Dequeue();
                count--;
            }
        }
    }

	// the time complexity will be O(size of the input Array) + O(size of the queue) < 2 * O(size of the input Array);
    return result;
}

public struct Result
{
    public int Begin;
    public int End;
}
