'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let collection = db.collection('tabs')
	const res = await collection.get()
	//返回数据给客户端
	return {
		code: 200,
		msg: "请求成功",
		data: res.data
	}
};
