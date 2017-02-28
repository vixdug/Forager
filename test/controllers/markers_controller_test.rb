require 'test_helper'

class MarkersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get marker_index_url
    assert_response :success
  end

end
