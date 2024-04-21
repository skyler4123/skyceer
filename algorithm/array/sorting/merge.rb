def merge(array = [9,0,8,2,1,3,5,4,7,6])
  length = array.length
  return array if length == 1
  if length == 2

    return sort(array)
  end

  result = array
  return result
end


def sort(a, b)
  if a > b
    return [b, a]
  else
    return [a, b]
  end
end

puts merge.to_s