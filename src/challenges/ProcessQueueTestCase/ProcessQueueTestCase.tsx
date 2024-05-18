import { getFinalState } from './processQueue.js';

function increment(n: number) {
    return n + 1;
}
increment.toString = () => 'n => n+1';

export default function ProcessQueueTestCase() {
    return (
        <>
            <TestCase
                baseState={0}
                queue={[1, 1, 1]}
                expected={1}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    increment.toString(),
                    increment.toString(),
                    increment.toString()
                ]}
                expected={3}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    5,
                    increment.toString(),
                ]}
                expected={6}
            />
            <hr />
            <TestCase
                baseState={0}
                queue={[
                    5,
                    increment.toString(),
                    42,
                ]}
                expected={42}
            />
        </>
    );
}

function TestCase({
    baseState,
    queue,
    expected
}: {
    baseState: number
    queue: (number | string)[],
    expected: number
}) {
    const actual = getFinalState(baseState, queue);
    return (
        <>
            <p>初始 state：<b>{baseState}</b></p>
            <p>队列：<b>[{queue.join(', ')}]</b></p>
            <p>预期结果：<b>{expected}</b></p>
            <p style={{
                color: actual === expected ?
                    'green' :
                    'red'
            }}>
                你的结果：<b>{actual}</b>
                {' '}
                ({actual === expected ?
                    '正确' :
                    '错误'
                })
            </p>
        </>
    );
}
