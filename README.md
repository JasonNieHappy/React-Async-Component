# 如何运行
1. 在node v10.22.0 上可以运行
2. 开发环境：先运行npm run mock开启本地模拟数据，然后npm run dev
3. 发布环境：运行npm run build

# react-async-component
#### 目前已完成：
1.  webpack v3 前端工程：dev、mock、build
	- dev为本地开发环境，使用eslint、postcss、webpack-dev-server等工具
	- mock为本地模拟数据，通过koa2来处理本地的前端请求
	- build是发布环境，npm run build以后会生成build目录及相关文件。会将package.json里的dependencies打包成vendor.[hash].js，页面中js代码打包为app.[hash].js，scss打包为app.[hash].css，给图片和font加hash，然后压缩CSS、JS、图片。
2. react + react-redux + react-router v4 实现页面首页、城市页、搜索结果页、轮播图、下拉加载更多、搜索等功能。
3. react 热更新
4. 使用dynamic import将JS按页面代码分离，加速了首屏显示
5. scope hosting
6. Async Component
