# vue-router中router和route的区别

1.router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。

举例：history对象

$router.push({path:'home'});本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录

方法：

$router.replace({path:'home'});//替换路由，没有历史记录

2.route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等

$route.path 
字符串，等于当前路由对象的路径，会被解析为绝对路径，如 `"/home/news"` 。

$route.params 
对象，包含路由中的动态片段和全匹配片段的键值对

$route.query 
对象，包含路由中查询参数的键值对。例如，对于 `/home/news/detail/01?favorite=yes` ，会得到`$route.query.favorite == 'yes'` 。

$route.router 
路由规则所属的路由器（以及其所属的组件）。

$route.matched 
数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。

$route.name 
当前路径的名字，如果没有使用具名路径，则名字为空。

`$route.path, $route.params, $route.name, $route.query`这几个属性很容易理解，主要用于接收路由传递的参数