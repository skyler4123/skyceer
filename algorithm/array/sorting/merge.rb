def merge(array = [9,0,8,4,3,2,1])
  length = array.length
  return array if length == 1
  if length == 2
    return sort_two_element_array(array)
  end
  if length > 2
    first_subarray, last_subarray = divide_array_at_medium(array)
    first_subarray = merge(first_subarray)
    last_subarray = merge(last_subarray)
    return merge_two_sorted_array(first_subarray, last_subarray)
  end
end


def sort_two_element_array(array = [3,2])
  a = array[0]
  b = array[1]
  if a > b
    return [b, a]
  else
    return [a, b]
  end
end

def divide_array_at_medium(array = [0,1,2,3,4,5,6,7])
  length = array.length
  return array if length == 1
  pivot_index = length / 2
  first_subarray = array[0..pivot_index]
  last_subarray = array[(pivot_index + 1)..-1]
  return [first_subarray, last_subarray]
end

def merge_two_sorted_array(array1 = [3,5,7], array2 = [2,4,6,8,10])
  length1 = array1.length
  length2 = array2.length
  total_length = length1 + length2
  result = []

  array1_index = 0
  array2_index = 0
  total_length.times do |n|
    if array1_index == length1
      result[n] = array2[array2_index]
      array2_index += 1
      next
    end
    if array2_index == length2
      result[n] = array1[array1_index]
      array1_index += 1
      next
    end
    if array1[array1_index] < array2[array2_index]
      result[n] = array1[array1_index]
      array1_index += 1
    else
      result[n] = array2[array2_index]
      array2_index += 1
    end
  end
  result
end

puts merge.to_s