import React from "react";

type CarComponentType = {
    CarsArray: Array<CarsPropsType>
}
type CarsPropsType = {
    manufacturer: string
    model: string
}
export const Automobile = (props: CarComponentType) => {
    return (
        <table>
            {props.CarsArray.map((objectFromCarsArray, index: number) => {
                return (
                    <tr key={objectFromCarsArray.model}>
                        {/*<th>{objectFromCarsArray.}</th>*/}
                        <th>{index}</th>
                        <th>{objectFromCarsArray.manufacturer}</th>
                        <th>{objectFromCarsArray.model}</th>

                    </tr>
                )
            })}
                {/*<th>{props.CarsArray[0].manufacturer}</th>*/}
                {/*<th>{props.CarsArray[1].manufacturer}</th>*/}
                {/*<th>{props.CarsArray[2].manufacturer}</th>*/}
                {/*<td>{props.CarsArray[0].model}</td>*/}
                {/*<td>{props.CarsArray[1].model}</td>*/}
                {/*<td>{props.CarsArray[2].model}</td>*/}
        </table>
    )
}