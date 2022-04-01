import { useDeferredValue } from 'react'

const CardLists = ({ list }) => {
    const deferredProducts = useDeferredValue(list);

    return (
        <ul className="list-none m-8 w-full p-0">
            {list?.map((item, index) => {
                return (
                    <li key={index} className="bg-red-500 text-center p-4 my-4 rounded-xl text-white">{item}</li>
                )
            })}
        </ul>
    )
}

export default CardLists