const baseUrl = 'https://www.24horasbet.cc/gameapi'; //请求地址
//封装 Promise组件
export function request(options) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			data: options.data || {},
			method: options.method,
			header: {
				'token':'0df502b1-f11d-4d5a-8610-77afb52d7928',//后端返回的数据
				'X-Requested-With': 'XMLHttpRequest',
				"Accept": "application/json",
				'Content-Type': 'application/json; charset=UTF-8'
			},
			success(res) {
				const {
					code = 500, data = null, message = '网络错误，请稍后再试'
				} = res.data || {};
				//switch根据项目返回的code判断
				switch (res.statusCode) {
					case 200:
						resolve(data);
						break;
					case 500:
						uni.showToast({
							title: message,
							icon: "none",
						});
						reject(false);
						break;
					case 400:
						uni.showToast({
							title: message,
							icon: "none",
						});
						//跳转到登录页面
						uni.navigateTo({
							url: '/pages/login/index'
						})
						reject(message);
						break;
					default:
						reject(message);
						break;
				}
			},
			fail(err) {
				// 失败处理
				reject(err);
			}
		});
	});
}
