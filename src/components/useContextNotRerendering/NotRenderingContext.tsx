import CountContextProvider, {useCountContext} from "./CountContextProvider.tsx";


export default function NotRenderingContext() {
    return (
        <main>
            <CountContextProvider>
                <ExampleComponent1/>
                <ExampleComponent2/>
            </CountContextProvider>
        </main>
    )
}

export function ExampleComponent1() {
    const {count, setCount} = useCountContext()
    console.log('ExampleComponent1')
    return <div>
        Example component1 =  {count}
        <button onClick={() => setCount(count + 1)}>
            Click
        </button>
    </div>
}

export function ExampleComponent2(){
    console.log('ExampleComponent2')
    return <div>
        Example component2
    </div>
}