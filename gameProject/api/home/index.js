//引入request
import { request } from '@/utils/requset.js'
//获取游戏列表
export const getCateGames = (data) => {
	return request({
		method: 'get',
		url: '/api/get_cate_games?category_id=1&page=1&limit=1000',	
	}, data)
}
//获取游戏类型
export const getCategoryList = (data) => {
	return request({
		method: 'get',
		url: '/api/category_list',	
	}, data)
}

export const getBanner = (data) => {
	return request({
		method: 'get',
		url: '/api/get_banner',	
	}, data)
}