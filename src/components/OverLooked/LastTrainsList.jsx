import LastTrainsItem from "./LastTrainsItem"

export default function LastTrainsList({ list }) {
    const drowItems = (list) => {
        const arr = list.slice(0, 3)
        return arr.map((item, index) => {
            return <LastTrainsItem item={item} key={index} />
       })
   }
    return (<ul>{drowItems(list)}</ul>)
}