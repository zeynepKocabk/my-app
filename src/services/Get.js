import { useState } from "react";

export default function Get(){
    const [data, setData] = useState(null);
    return(
        <div>
            {data}
        </div>
    )
}