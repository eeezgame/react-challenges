import './App.css'

import Gallery from './challenges/Gallery/Gallery'
import Form from './challenges/Form/Form'
import FeedbackForm from './challenges/FeedbackForm/FeedbackForm'
function App() {

  return (
    <>
      
      <h2>FeedbackForm 修复一个错误</h2>
      <div>这是一个收集用户反馈的小表单。当反馈被提交时，它应该显示一条感谢信息。但是，现在它会发生崩溃并显示错误消息“渲染的 hooks 比预期的少”。你能发现错误并修复它吗？</div>
      <br />
      <FeedbackForm></FeedbackForm>

      <h2>Form 修复卡住的输入表单</h2>
      <div>
        {`当你输入字段时，什么也没有出现。这就像输入值被空字符串给“卡住”了。第一个 <input> 的 value 设置为始终匹配 firstName 变量，第二个 <input> 的 value 设置为始终匹配 lastName 变量。这是对的。两个输入框都有 onChange 事件处理函数，它尝试根据最新的用户输入（e.target.value）更新变量。但是，变量似乎并没有在重新渲染时“记住”它们的值。通过使用 state 变量来解决此问题。`}
      </div>
      <br />
      <Form></Form>    

      <h2>Gallery 完成画廊组件</h2>
      <div>
        当你在最后一个雕塑上按 “Next” 时，代码会发生崩溃。请修复逻辑以防止此崩溃。你可以尝试在事件处理函数中添加额外的逻辑，或在操作无法执行时禁用掉按钮。

        修复崩溃后，添加一个显示上一个雕塑的 “Previous” 按钮。同样地，确保它不在第一个雕塑里发生崩溃。
      </div>
      <br />
      <Gallery></Gallery>
    </>
  )
}

export default App
