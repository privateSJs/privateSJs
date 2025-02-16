'use client'
import React, { useEffect, useRef } from "react";
import {Chrono} from "react-chrono";


const PortfolioPage = () => {
    const items = [
        {
            title: "Technikum",
            cardTitle: "Start projektu",
            cardDetailedText: "Rozpoczęcie prac nad projektem.",
        },
        {
            title: "Studia",
            cardTitle: "Pierwsza wersja",
            cardDetailedText: "Wdrożenie pierwszej wersji aplikacji.",
        },
        {
            title: "Staż",
            cardTitle: "Finalna wersja",
            cardDetailedText: "Zakończenie prac i wdrożenie finalnej wersji.",
        },
    ];

    return (
        <div className="w-full h-full">
            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
                theme={{

                }}
                disableNavKey
                buttonTexts={{
                first: 'Jump to first',
                last: 'Jump to last',
                next: 'Next',
                previous: 'Previous',
            }} >
            </Chrono>
        </div>
    )
}

export default PortfolioPage;