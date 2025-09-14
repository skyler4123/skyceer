def quick(array = [ 9, 0, 8, 2, 1, 3, 5, 4, 7, 6 ])
  length = array.length
  return array if length < 2
  pivot = array.last
  smaller_array = []
  bigger_array = []
  (length - 1).times do |i|
    if array[i] < pivot
      smaller_array << array[i]
    end
    if array[i] > pivot
      bigger_array << array[i]
    end
  end
  smaller_array = quick(smaller_array)
  bigger_array = quick(bigger_array)
  result = smaller_array.flatten + [ pivot ] + bigger_array.flatten
  result
end

puts quick
