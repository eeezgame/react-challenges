import './App.css'

import Gallery from './challenges/Gallery/Gallery'
import Form from './challenges/Form/Form'
import FeedbackForm from './challenges/FeedbackForm/FeedbackForm'
import FeedbackFormV2 from './challenges/FeedbackFormV2/FeedbackFormV2'
import TrafficLight from './challenges/TrafficLight/TrafficLight'
import RequestTracker from './challenges/RequestTracker/RequestTracker'
import ProcessQueueTestCase from './challenges/ProcessQueueTestCase/ProcessQueueTestCase'

function App() {

  return (
    <>

      <h2>自己实现状态队列</h2>
      <div>
        {`在这个挑战中，你将从头开始重新实现 React 的一小部分！这并不像听起来那么难。

        滚动 sandbox 进行预览。请注意，它显示了 四个测试用例 。它们与你之前在本页上看到过的示例相对应。你的任务是实现 getFinalState 函数，让它为每种情况返回正确的结果。如果你对它进行了正确的实现的话，那么所有四个测试用例都应该会通过。

        你将收到两个参数：baseState 是初始状态（例如：0），queue 是一个既包含数字（例如：5）也包含更新函数（例如：n => n + 1）的数组，这些数字和数组会被按照它们被添加进来的顺序排列。

        你的任务是返回最终的 state，如同页面上的表格展示的那样！`}
      </div>
      <ProcessQueueTestCase></ProcessQueueTestCase>

      <h2>修复请求计数器</h2>
      <div>
        你正在开发一个艺术市场应用，该应用允许一个用户为一个艺术品同时提交多个订单。每次用户按下“购买”按钮，“等待”计数器应该增加一。三秒后，“等待”计数器应该减少，“完成”计数器应该增加。

        但是，“等待”计数器的行为并不符合预期。当你按下“购买”按钮时，它会减少到 -1（这本应该是不可能的）。如果你快速点击两次，两个计数器似乎都会出现无法预测的行为。

        为什么会发生这种情况？修复两个计数器。
      </div>
      <RequestTracker></RequestTracker>

      <h2>实现红绿灯组件</h2>
      <div>以下是一个人行道红绿灯组件，在按下按钮时会切换状态：</div>
      <TrafficLight></TrafficLight>
      <div>
        向 click 事件处理函数添加一个 alert 。当灯为绿色且显示“Walk”时，单击按钮应显示“Stop is next”。当灯为红色并显示“Stop”时，单击按钮应显示“Walk is next”。
        把 alert 方法放在 setWalk 方法之前或之后有区别吗？
      </div>

      <h2>FeedbackFormV2 移除不必要的 state </h2>
      <div>
        当按钮被点击时，这个例子应该询问用户的名字，然后显示一个 alert 欢迎他们。你尝试使用 state 来保存名字，但由于某种原因，它始终显示“Hello, ！”。

        要修复此代码，请删除不必要的 state 变量。（我们将在稍后讨论为什么上述代码不起作用。）

        你能解释为什么这个 state 变量是不必要的吗？
      </div>
      <br />
      <FeedbackFormV2></FeedbackFormV2>

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
