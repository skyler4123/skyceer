let(:pagination_params) { { page: 1, per_page: 3 } }
let(:tsi_brands) do
  (1..(pagination_params[:per_page] + 1)).map { create(:tsi_brand) }
end
let(:tsi_brand_ids) { tsi_brands.map(&:id) }
let(:total_pages) { (tsi_brands.size / pagination_params[:per_page].to_f).ceil }
let(:tsi_brand_items) do
  tsi_brands.map do |tsi_brand|
    (1..2).map { create(:tsi_brand_item, tsi_brand: tsi_brand) }
  end
end
let(:tsi_brand_item_ids) { tsi_brand_items.map(&:id) }
let(:tsi_sub_brand_items) do
  tsi_brands.map do |tsi_brand|
    (1..2).map { create(:tsi_sub_brand_item, tsi_brand: tsi_brand) }
  end
end
let(:tsi_sub_brand_item_ids) { tsi_sub_brand_items.map(&:id) }


let(:response_data) { JSON.parse(response.body).with_indifferent_access }
let(:response_tsi_xxx_ids) { response_data[:data].map { |xxx| xxx[:id] } }
let(:response_tsi_xxx_yyy_ids) { (response_data[:data].map { |xxx| xxx[:yyy] }).flatten.map { |yyy| yyy[:id] } }

it 'get all xxx' do
  get '/tsi/api/xxx', params: pagination_params
  expect(tsi_xxx_ids).to include(response_tsi_xxx_ids)
end
it 'get all yyy from xxx' do
  get '/tsi/api/xxx', params: pagination_params
  expect(tsi_yyy_ids).to include(response_tsi_yyy_ids)
end
it 'get all xxx from per_page' do
  get '/tsi/api/xxx', params: pagination_params
  expect(response_tsi_xxx_ids.size).to eq(pagination_params[:per_page])
end
it 'get total page' do
  get '/tsi/api/xxx', params: pagination_params
  expect(response_data[:pagination][:total_pages]).to eq(total_pages)
end
it 'get default 25x xxx when pagination params is wrong' do
  get '/tsi/api/xxx', params: { page:1, per: 3 }
  expect(response_data[:pagination][:limit_value]).to eq(25)
  expect(response_tsi_xxx_ids).to eq(tsi_xxx_ids)
end