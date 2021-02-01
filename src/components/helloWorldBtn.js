import './helloWorldBtn.css'
class HelloWorldBtn {
    render(){
        const button = document.createElement('button');
        const body  = document.querySelector('body');
        button.innerHTML = 'Hello World!';
        button.classList.add('hello-world-btn');
        body.appendChild(button);
    }
}

export default HelloWorldBtn;