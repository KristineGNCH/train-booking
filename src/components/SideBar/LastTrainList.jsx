import LastTrainItem from "./LastTrainItem"

export default function LastTrainList({ list }) {
    const drowItems = (list) => {
        const arr = list.slice(0, 3)
        return arr.map((item, index) => {
            return <LastTrainItem item={item} key={index} />
       })
   }
    return (<ul>{drowItems(list)}</ul>)
}