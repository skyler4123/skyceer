def sample(array = [ 9, 0, 8, 2, 1, 3, 5, 4, 7, 6 ])
  length = array.length
  return array if length < 2

  result = array
  result
end

def sort(array)
  a = array[0]
  b = array[1]
  if a > b
    [ b, a ]
  else
    [ a, b ]
  end
end

puts sample
