//1 8 7 2 3 4 6 5

//event loop sẽ ưu tiên những task đồng bộ do đó in 1 sau đó đến 8 
// tiếp theo đưa setTimeout của function A và B và promise của function C cho web time out sử lý
// promise là miscro task nên sẽ được ưu tiên hơn 
// mà ở trong promise C có console log đồng bộ nên ra 7 trước
// sau đó ném function D cho web  API xử lí và lúc đó thì setTimeout của A và B hoàn thành
// nên A và B sẽ ra trước sau đó là 4 trong fucntion D và promise trong funtion D là 6 và cuối cùng setTimeout 5 