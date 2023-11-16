//引入request
import { request } from '@/utils/requset.js'
//获取游戏列表
export const getCateGames = (url) => {
	return request({
		method: 'get',
		url: `/api/get_cate_games?${url}`,	
	},url)
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
