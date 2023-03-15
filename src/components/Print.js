import React from 'react'
import '../styles/cardrename.css'

const Print = (props) => {
    console.log("hii", props.item.id)
    const { title, author, price, img } = props.item;
    const titles = props.item.title;
    console.log("hiiiii", titles);
    return (
        <section className='set'>
            <div className="cards">
                <div className="image_box">
                    <img src={img} alt="Image" />
                </div>
                <div className="details">
                    <p>{title}</p>
                    <p>{author}</p>
                    <p>Price - {price}Rs</p>
                    <button > Add to Cart </button>
                </div>
            </div>
        </section>


    )
}

export default Print
