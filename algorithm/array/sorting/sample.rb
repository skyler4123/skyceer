def sample(array = [9,0,8,2,1,3,5,4,7,6])
  length = array.length
  return array if length < 2

  result = array
  return result
end

def sort(array)
  a = array[0]
  b = array[1]
  if a > b
    return [b, a]
  else
    return [a, b]
  end
end

puts sample.to_s