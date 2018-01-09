/**
 * 常用函数
 * Author: CellerChan
 */

/**
 * 根据Id名获取元素
 * @param id
 */

 function $(id) {
    return document.getElementById(id)
}

/**
 * getElementsByClassName的兼容性处理
 * 未解决: 
 * 1. 不适用于多个类名
 * 2. 有可能找到含有并非目标类名的元素（类名字符串中含有目标类名）
 * @param element,className
 * className参数是字符串
 * @returns {*} 
 */
 function getElementsByClassName (element,className) {
 	if (element.getElmentsByClassName) {
 		return element.getElementsByClassName
 	}
 	else {
		var elements = element.getElementsByTagName("*")
		var filterArr = []
		for (var i = 0; i < elements.length; i++) {
		 	if (elements[i].className.indexOf(className)!==-1) {
				filterArr.push(elements[i])				
			}
		} 	
		return filterArr	
 	}
 }

/**
 * 新的getElementsByClassName函数
 * 1. 解决了会找到类名中包含目标类名的元素的问题
 * @param 
 * @returns {*} 
 */
function getElementsByClassName (element,className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName
    }
    else {
        var elements = element.getElementsByTagName("*")
        var filterAr = []
        for (var i = 0; i < elements.length; i++) {
            var names = elements[i].className.split(" ")
            for (var j = 0; j < names.length; j++) {
                if (names[j]===className) {
                    filterArr(elements[i])
                    break                                       //当一个元素中有类名与要寻找的类名相等时,直接跳出遍历这个元素类名的循环
                }
            }
        }
        return filterArr
    }
}


/**
 * innerText与textContent兼容性问题处理
 * @param element 
 */
function getInnerText (element) {
    if (element.innerText) {                               
        return element.innerText
    }
    else {
        return element.textContent
    }
}

/**
 * firstElementChild的兼容性处理
 * @param element
 */
function getFirstElement (element) {
    var next = element.firstElementChild
    if (next) {
        return next
    }
    else {
        next = element.firstChild
        while (next && next.nodeType!==1) {
            next = next.nextSibling
        } 
        return next
    }
}

/**
 * lastElementChild的兼容性处理
 * @param 
 * @returns {*} 
 */
 function getLastElement (element) {
    var next = element.lastElementChild
    if (next) {
        return next
    }
    else {
        next = element.lastChild
        while (next && next.nodeType!==1) {
            next = next.previousSibling
        }
        return next
    }
 }

/**
 * 寻找下一个兄弟元素
 * @param element
 * @returns {*} 
 */
function getNextElement (element) {
    var next = element.nextElementSibling
    if (next) {
        return next
    }
    else {
        next = element.nextSibling
        while (next && next.nodeType!==1) {
            next = next.nextSibling
        }
        return next
    }
}

/**
 * 寻找下一个兄弟元素的第二种方法
 * @param element
 * @returns {*} 
 */
function getNextElement2 (element) {
    var next = element.nextSibling
    if (next.nodeType === 1) {
        return next
    }
    else {
        while (next && next.nodeType!==1) {
            next = next.nextSibling
        }
        return next
    }
}


/**
 * 替换类名的函数
 * @param 
 * @returns {*}
 */ 
function replaceClassName(element,oldName,newName) {
    element.className = element.className.replace(oldName,newName)
}

/**
 * 替换类名的函数
 * @param 
 * @returns {*} 
 */
function replaceClassName(element,oldName,newName) {
    var names = element.className.split(" ")
    for (var i = 0; i < names.length; i++) {
        if (names[i]===oldName) {
            names[i] = newName
        }
    }
    element.className = names.join(" ")
}


/**
 * 动画函数
 * @param 
 * @returns {*} 
 */
function animate (obj,json,fn) {
    clearInterval(obj.timeId)
    obj.timeId = setInterval(function(){
        var flag = true
        for ( var k in json ) {
            if ( k==="opacity" ) {
                var leader = getStyle(obj,k)*100
                var target = json[k]*100
                var step = (target-leader)/10
                step = step>0 ? Math.ceil(step) : Math.floor(step)
                leader = leader + step
                obj.style[k] = leader/100                    
            }
            else if ( k==="zIndex" ) {
                obj.style.zIndex = json[k]
            }
            else {
                var leader = parseInt(getStyle(obj, k)) || 0            
                var target = json[k]
                var step = ( target - leader ) / 10 
                step = step > 0 ? Math.ceil(step) : Math.floor(step)    
                leader = leader + step
                obj.style[k] = leader + "px"
            }
            if (leader!==target) {
                flag = false
            }
        }
        if (flag) {
            clearInterval(obj.timeId)
            if (fn) {
                console.log(fn)
                fn()
            }
        }
    },15)
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

function animateOpacity (obj,json,fn) {
    clearInterval(obj.timeId)
    obj.timeId = setInterval(function(){
        var flag = true
        for ( var k in json ) {
            if ( k==="opacity" ) {
                var leader = getStyle(obj,k)*100
                var target = json[k]*100
                var step = (target-leader)/10
                step = step>0 ? Math.ceil(step) : Math.floor(step)
                leader = leader + step
                obj.style[k] = leader/100                    
            }
            else if ( k==="zIndex" ) {
                obj.style.zIndex = json[k]
            }
            else {
                var leader = parseInt(getStyle(obj, k)) || 0            
                var target = json[k]
                var step = ( target - leader ) / 10 
                step = step > 0 ? Math.ceil(step) : Math.floor(step)    
                leader = leader + step
                obj.style[k] = leader + "px"
            }
            if (leader!==target) {
                flag = false
            }
        }
        if (flag) {
            clearInterval(obj.timeId)
            if (fn) {
                console.log(fn)
                fn()
            }
        }
    },30)
}
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}


