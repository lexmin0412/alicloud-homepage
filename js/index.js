/*

内容：

主内容区的所有动效js

未解决：

1. (已解决) 鼠标移入导航栏的items高度变化动画

2. （已解决）鼠标移入时无法获取当前需要显示的items盒子高度

3. 所有的样式只能放到commonPage，否则会产生冲突。

4. 08/12--- 轮播图鼠标移上部分无效

5. 08/12--- 将轮播图改为上下播放

新增：

08/11

1. 页面右下角的反馈部分

2. 返回顶部按钮

3. 上面两部分的动画效果

08/12

1. banner部分轮播图

2. solutions部分的动效的添加

*/



window.onload = function () {
	// 1. 导航栏的移入移出显示隐藏效果
	var nav = $("nav")
	var ul = nav.children[0]
	var items = nav.children[1]
	var navLis = ul.children
	// 2. 第一次进入导航栏时执行动画
	var itemsList = items.children
	var itemsHeight = itemsList[0].children[0].clientHeight;
	animate(items,{"height":itemsHeight})
	var underline = $("underline")
	for (var i = 0; i < navLis.length-1; i++) {       //这里-1是因为最后一个li元素没有二级导航栏
		navLis[i].index = i
		navLis[i].onmouseover = function () {
			items.style.display = "block"
			items.style.zIndex = 1
			for (var i = 0; i < itemsList.length; i++) {
				itemsList[i].style.display = "none"
			}
			var index = this.index
			itemsList[index].style.display = "block"
			// 获取每一个详情页栏的第一个dl的高度值，将其赋给items
			// var itemsHeight = itemsList[index].children[0].offsetHeight;
			var itemsHeight = itemsList[index].children[0].clientHeight;
			animate(items,{"height":itemsHeight})

			// 1.2 鼠标移入相应导航项时在下方对应显示下划线
			underline.style.width = this.offsetWidth + "px"
			underline.style.left = this.offsetLeft + "px"
			// animate(underline,{"left":this.offsetLeft})
			// animate(underline,{"width":this.offsetWidth})
		}
	}
	// onmouseout 不能用
	nav.onmouseleave = function () {
		// items.style.display = "none"
		animate(items,{"height":0})
		items.style.overflow = "hidden"
		underline.style.width = 0
	}

	// 2. banner部分


	// 暂时将首页的js放在这里

	// 3. solutions部分
	// 3.1 每个div的背景图片
	var solutions = document.getElementById("solutions")
	console.log(solutions)
	var lis = solutions.children[0].children
	var images = ["solutions_app","solutions_elecshopping","solutions_finance","solutions_game","solutions_medical"]
	for (var i = 0; i < lis.length; i++) {
		lis[i].children[0].children[0].children[0].children[0].style.display = "block"
		lis[i].children[0].children[0].children[0].children[1].style.display = "none"
		lis[i].style.backgroundImage = "url(images/"+images[i]+".jpg)"
		lis[i].onmouseover = function () {
			animate(this.children[0].children[0],{"top":50})
			this.children[0].className = "mask_hover"
			this.children[0].children[0].children[0].children[0].style.display = "none"
			this.children[0].children[0].children[0].children[1].style.display = "block"
			this.children[0].children[0].children[1].style.display = "none"
			// this.children[0].children[0].children[2].style.display = "block"
			this.children[0].children[0].children[3].style.display = "block"
			this.children[0].children[0].children[4].style.display = "block"
		}
		lis[i].onmouseout = function () {
			
			animate(this.children[0].children[0],{"top":116})
			this.children[0].children[0].children[0].children[0].style.display = "block"
			this.children[0].children[0].children[0].children[1].style.display = "none"
			this.children[0].className = "mask"
			this.children[0].children[0].children[1].style.display = "block"
			// this.children[0].children[0].children[2].style.display = "none"
			this.children[0].children[0].children[3].style.display = "none"
			this.children[0].children[0].children[4].style.display = "none"
		}

	}
	// 3.2 onmouseover时背景及div变化





	// 4. software部分
	var software_items = $("software_items")
	var lis = software_items.children
	for (var i = 0; i < lis.length; i++) {
		var icon = lis[i].children[0].children[0]
		icon.onmouseover = function () {
			// this.style.backgroundPosition = "0 -4421px"
			// this.style.transition = "0.001s"
			// this.style.backgroundPosition = "0 -4421px"
			// 4.1 通过改变背景图片的backgroundPosition来实现动效
			/*this.style.backgroundPositionY = "-4421px"
			this.style.transition = "1.1s"*/
			// animate(this,{"backgroundPositionY":-4421})
			// this.style.transition = "1.1s"
			this.nextElementSibling.style.color = "#00c1de"
			this.nextElementSibling.style.transition = "1.0s"
		}
		icon.onmouseout = function () {
			this.nextElementSibling.style.color = "#373d41"
		}
	}

	// 5. developer部分
	var developerUl = document.getElementById("developerUl")
	var lis = developerUl.children
	var images = []
	for (var i = 0; i < lis.length; i++) {
		var image = lis[i].children[0].children[0]
		images.push(image)
	}
	console.log(images)
	for (var i = 0; i < images.length; i++) {
		images[i].parentNode.style.position = "relative"
		images[i].style.position = "absolute" 
		images[i].style.left = 0
		images[i].parentNode.style.height = "230px"
		images[i].parentNode.style.overflow = "hidden"
		images[i].onmouseover = function () {

			// animate(this,{"width": 456})
			/*animate(this,{})
			animate(this,{})*/
		}
		images[i].onmouseout = function () {
			// animate(this,{"width": 380})
		}
	}

	// 6. 右下角的反馈onmouseover出现效果
	var feedbackImg = $("feedbackImg")
	var feedbackDetail = $("feedback_detail")
	var feedBack = feedbackDetail.parentNode
	var backToTop = $("backToTop")
	feedbackImg.onmouseover = function () {
		feedbackDetail.style.display = "block"
		// backToTop.style.display = "block"
		// feedbackDetail.style.transition = "1.0s"
		animate(feedbackDetail,{"height":224,"opacity":1})
	}
	feedbackImg.parentNode.onmouseleave = function () {
		// backToTop.style.display = "none"
		// feedbackDetail.style.transition = "1.0s"
		animate(feedbackDetail,{"height":0})
		feedbackDetail.style.display = "none"
	}

	// 7. 当屏幕上方内容溢出高度超过600时显示返回顶部按钮
	window.onscroll = function () {
		if (scroll().top > 600) {
			// console.log("超过了")
			backToTop.style.display = "block"
			// feedBack.style.bottom = "80px"
			animate(backToTop,{"bottom":30})
			animate(feedBack,{"bottom":90})
		}
		else {
			backToTop.style.display = "none"
			// feedBack.style.bottom = "30px"
			animate(feedBack,{"bottom":30})
		}
	}
	// 7.1 scroll函数 
	function scroll () {
		var obj = {}
		obj.top = document.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		obj.left = document.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
		return obj
	}

	// 8. banner部分轮播图效果
	var banner = $("banner")
	var ul = banner.children[0]
	var ol = banner.children[1]
	var ulLis = ul.children
	// var divWidth = ul.children[0].offsetWidth
	var divHeight = ul.children[0].offsetHeight

	// 8.1 按钮部分
	// 8.1.1 根据盒子数量动态生成按钮
	for (var i = 0; i < ulLis.length; i++) {
		var li = document.createElement("li")
		ol.appendChild(li)
		li.innerText = i+1
	}

	// 8.1.2 定位按钮
	ol.style.marginLeft = -ol.offsetWidth / 2 + "px"

	// 8.1.3 鼠标移上按钮变色
	var olLis = ol.children

	// 初始状态时第一个按钮变色
	olLis[0].className = "current"
	// 克隆第一张图片放到最后的位置,实现无缝连接
	var firstDiv = ulLis[0].cloneNode(true)
	ul.appendChild(firstDiv)

	for (var i = 0; i < olLis.length; i++) {
		olLis[i].index = i
		olLis[i].onmouseover = function () {
			for (var i = 0; i < olLis.length; i++) {
				olLis[i].className = ""
			}
			this.className = "current"
			// left = -this.index * divWidth
			var top = -this.index * divHeight 
			div = this.index
			square = this.index
			console.log("来啊")
		}


		/*olLis[i].onmouseout = function () {
			this.className =  ""
		}*/
	}

	// 8.2 按钮与轮播

	// 8.2.1 鼠标经过按钮跳转到相应的图片
	for (var i = 0; i < olLis.length; i++) {
		olLis[i].index = i
		olLis[i].onmouseover = function () {
			var index = this.index
			// 1. 通过改变ul的left值实现轮播
			// animate(ul,{"left":-index*divWidth})
			// 2. 通过改变ul的top值实现轮播
			animate(ul,{"top":-index*divHeight})
			for (var i = 0; i < olLis.length; i++) {
				olLis[i].className = ""
			}
			this.className = "current"
		}
	}

	// 8.3 定时器轮播
	var div = 0
	var square = 0
	var timeId
	var timeId = setInterval(play,1500)

	function play () {
		if ( div === ulLis.length-1 ) {
			// ul.style.left = 0
			ul.style.top = 0
			div = 0
		}
		div++
		// var ulLeft = - div * divWidth
		var ulTop = - div * divHeight
		// animate(ul,{"left":ulLeft})
		animate(ul,{"top":ulTop})

		// 8.3.1 切换图片时,相应按钮高亮
		if ( square < olLis.length - 1 ) {
			square++
		}
		else {
			square = 0
		}
		for (var i = 0; i < olLis.length; i++) {
			olLis[i].className = ""
		}
		olLis[square].className = "current"
	}

	// 8.4 鼠标移入盒子停止播放,移出自动播放
	banner.onmouseover = function () {
		clearInterval(timeId)
	}
	banner.onmouseout = function () {
		// timeId = setInterval(play,1500)
		timeId = setInterval(play,2000)
	}

	// 9. product_items items_detail部分
	// 9.1 点击product_items中的items_title时,显示相应的items_detail
	var productItems = document.getElementById("productItems")
	// console.log(productItems)
	var itemsTitles = document.getElementsByClassName("items_titles")
	console.log(itemsTitles)
	var itemsDetails = document.getElementsByClassName("details")
	console.log(itemsDetails)
	var itemsGotos = document.getElementsByClassName("goto")
	var productItemsHeight = productItems.offsetHeight
	var productHeight = productItems.parentNode.offsetHeight
	for (var i = 0; i < itemsTitles.length; i++) {
		itemsTitles[i].index = i
		// 
		// itemsTitles[i].children[0].children[0].children[0].style.display = "block"
		// itemsTitles[i].children[0].children[0].children[1].style.display = "none"
		itemsTitles[i].onclick = function () {
			for (var i = 0; i < itemsDetails.length; i++) {
				itemsDetails[i].style.display = "none"
				// animate(itemsDetails[i],{"height":0})
				// itmesDetails[index].parentNode.style.height = 0
			}
			var index = this.index
			itemsDetails[index].parentNode.style.display = "block"
			itemsDetails[index].style.display = "block"
			var DetailHeight = itemsDetails[index].offsetHeight
			// 给点击时弹出的盒子添加动画
			// animate(itemsDetails[index].parentNode,{"height":itemsDetails[index].offsetHeight})
			// 34为product_items的上边距
			// productItems.style.height = productItemsHeight + DetailHeight - 34 + "px"
			animate(productItems,{"height":productItemsHeight + DetailHeight - 34})
			// productItems.parentNode.style.height = productHeight + DetailHeight + "px"
			animate(productItems.parentNode,{"height":productHeight + DetailHeight})

			// 9.3 点击itmes_title时切换图片为checked状态
			// 9.3.1 先将所有的图片换回未选中状态
			for (var i = 0; i < itemsTitles.length; i++) {
				itemsTitles[i].children[0].children[0].children[0].style.display = "block"
				itemsTitles[i].children[0].children[0].children[1].style.display = "none"
			}
			// 9.3.2 将当前点击的items_title的checked的状态切换
			this.children[0].children[0].children[0].style.display = "none"
			this.children[0].children[0].children[1].style.display = "block"
		}
	}
	// 9.2 给所有li标签添加mouseover事件
	for (var i = 0; i < itemsDetails.length; i++) {
		var detailLis = document.getElementsByClassName("detailLi")
		for (var i = 0; i < detailLis.length; i++) {
			detailLis[i].onmouseover = function () {
				this.children[1].style.display = "block"
			}
			detailLis[i].onmouseout = function () {
				this.children[1].style.display = "none"
			}
		}
	}

	/*for (var i = 0; i < itemsTitles.length; i++) {
		itemsTitles[i].index = i
		itemsTitles[i].onclick = function () {
			productItems.style.display = "block"
			for (var i = 0; i < itemsDetails.length; i++) {
				itemsDetails[i].style.display = "none"
			}
			var index = this.index
			itemsDetails[index].style.display = "block"*/
			// var itemsDetailHeight = itemsDetail.children[0].offsetHeight
			// var itemsDetailHeight =  itemsDetails[index].offsetHeight
			/*var itemsDetailHeight = productItems.scrollHeight
			console.log(itemsDetailHeight)*/
			// itemsDetail.style.height = itemsDetailHeight + "px"
			// productItems.style.height = itemsDetailHeight + "px"
			// 这里应该选择每一个高度的。

			// solutions.style.marginTop = itemsDetailHeight + "px"
		// }
	// }

	// 10. defense区域数字动态变化
	/*var attackNumber = 1000000000
	if ( window.scrollTop > 308 ) {}
		animate(attackNumber,309,537,340)

	}*/

}