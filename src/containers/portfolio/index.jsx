import React, { useState } from "react";
import "./styles.scss";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import ecom from "../../images/ecomm img.webp";
import crm from "../../images/crm img.jpg";
import mba from "../../images/mba img.jpg";
import cv from "../../images/cv img.png";

const portfolioData = [
    {
        id: 2,
        name: "Ecommerce",
        image: ecom,
        link: "google.com"
    },
    {
        id: 3,
        name: "CRM",
        image: crm,
        link: "google.com"
    },
    {
        id: 3,
        name: "Movie Booking App",
        image: mba,
        link: "google.com"
    },
    {
        id: 3,
        name: "CV",
        image: cv,
        link: "google.com"
    },
]

const filterData = [
    {
        filterId: 1,
        label: "All"
    },
    {
        filterId: 2,
        label: "Backend"
    },
    {
        filterId: 3,
        label: "Frontend"
    },

]

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentFilter) {
        setFilteredValue(currentFilter)
    }

    // console.log(filteredValue);

    const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue)

    // console.log(filteredItems);

    function handleHover(index) {
        setHoveredValue(index)
    }


    return (
        <section id='portfolio' className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map((item) => (
                            <li className={item.filterId === filteredValue ? "active" : ""} onClick={() => handleFilter(item.filterId)} key={item.filterId}> {item.label} </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div className="portfolio__content__cards__item"
                                key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img src={item.image} alt="dummy data" />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button>
                                                    <a href={item.link}>Click Me</a>
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Portfolio;