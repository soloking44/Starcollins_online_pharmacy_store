import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const [product, setProduct] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/categories/${id}/`)
                console.log(response.data)
                setProduct(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getDetails()
    }, [id])

    return (
        <div>
            {/* {console.log(product)}
            {product.id} */}
            <div>
                {/* {product.map((data) => (
                    <div key={data.id}>
                        {data.id}
                    </div>
                ))} */}
            </div>
        </div>

    )
}

export default ProductDetails