const app = new Vue({
    el: '#app',
    data: {
        equation: '0',
        isOperatorAdd: false,
        isDecimalAdd: false,
        //计算器开始
        isStart: false,
    },
    methods: {
        //判断是否是+ - * /
        isOperator(character) {
            return ['+', '-', '÷', '×'].indexOf(character) > -1;
        },
        //数字的点击
        append(character) {
            //当计算器界面为0时
            if (this.equation === '0' && !this.isOperator(character)) {
                if (character === "." && !this.isDecimalAdd) {
                    this.equation += character
                    this.isDecimalAdd = true

                } else {
                    this.equation = character
                }
                this.isStart = true
                return
            }
            //不是运算符
            if (!this.isOperator(character)) {
                if (character === '.') {
                    if (this.isDecimalAdd) {
                        return
                    }
                    if (!this.isOperatorAdd) {
                        this.equation += character
                        this.isDecimalAdd = true
                        this.isOperatorAdd = true
                    }
                } else {
                    this.equation += character
                    this.isOperatorAdd = false
                }
            }
            if (this.isStart && this.isOperator(character) && !this.isOperatorAdd) {
                this.equation += character
                this.isOperatorAdd = true
                this.isDecimalAdd = false
            }
        },
        //百分号
        calculatePercentage() {
            if (!this.isStart || this.isOperatorAdd) {
                return
            }
            this.equation += '* 0.01'
            this.calculate()
        },
        //正负号切换 
        calculatorTog() {
            //未开始输入值或者在刚输入一次运算符之后不能进入改函数 
            if (!this.isStart || this.isOperatorAdd) {
                return
            }
            this.equation += '*-1'
            this.calculate()
        },
        //计算
        calculate() {
            let result = this.equation.replace(new RegExp('×', 'g'), '*').replace(new RegExp('÷', 'g'), '/')
            this.equation = parseFloat(eval(result).toFixed(9)).toString()
        },
        //清空符号的实现
        clear() {
            this.equation = '0'
            this.isOperatorAdd = false
            this.isDecimalAdd = false
            this.isStart = false
        }
    }
})