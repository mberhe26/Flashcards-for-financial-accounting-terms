import React, { useState } from 'react';
import '../App.css';

const Card = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
            <div className="card-inner">
                <div className="card-front">
                    {frontContent}
                </div>
                <div className="card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

const Flashcards = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleSkip = () => {
        const randomIndex = Math.floor(Math.random() * cards.length); 
        setCurrentCardIndex(randomIndex);
    };
    
    const handlePrevious = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); 
    };
    

    

    const cards = [
        {
            frontContent: <h2>Assets</h2>,
            backContent: <p>The wealth that has been accumulated by the business and is owned outright without lien or loan.</p>
        },
        {
            frontContent: <h2>Balance sheet</h2>,
            backContent: <p>is an important aspect of business. It records the basic accounting formula of assets = liabilities + stockholder equity / capital at a certain point in time, either monthly, quarterly or yearly.</p>
        },
        {
            frontContent: <h2>General ledger</h2>,
            backContent: <p>The general ledger is the side of the bookkeeping ledger that contains the balance sheet and the income statement accounts. Here all business transactions are recorded, including sales, credit purchases, office expenses and income losses.</p>
        },
        {
            frontContent: <h2>Gross margin</h2>,
            backContent: <p>Gross margin or profit is the total number of sales that have been made, subtracted by the associated costs, such as manufacturing costs, wholesales costs, material, and supplies.</p>
        },
        {
            frontContent: <h2>Loss</h2>,
            backContent: <p>When a service or product sells for less than what it cost to supply or manufacture it, or when expenses have exceeded revenues of a particular asset, it's called a loss.</p>
        },
        {
            frontContent: <h2>On credit/On account</h2>,
            backContent: <p>On credit or on account means that products or services have been sold with the use of credit. Payment has not immediately been provided for these items, and there may be terms on account that may result in interest charges.</p>
        },
        {
            frontContent: <h2>Receipts</h2>,
            backContent: <p>Receipts is the total amount of cash collected in business transactions over the course of one day. It does not include other revenue collected.</p>
        },
        {
            frontContent: <h2>Revenue</h2>,
            backContent: <p>Income and revenue are interchangeable, compromising the total amount of all income collected at one point in time. It may include cash sales, credit purchases, subscription fees and interest income.</p>
        },
        {
            frontContent: <h2>Trade discount</h2>,
            backContent: <p>A trade discount is a percentage discounted from the purchase price, and is based on the volume of goods ordered at one point in time. Higher discounts may be applicable to larger orders, with smaller discounts for lesser orders.</p>
        },
        {
            frontContent: <h2>Trial balance</h2>,
            backContent: <p>The trial balance is recorded in the general ledger, and includes both debits and credits for one particular account. The sheet must balance, with debits equaling credits.</p>
        }
    ];

    return (
        <div className="flashcards-container">
            <Card
                frontContent={cards[currentCardIndex].frontContent}
                backContent={cards[currentCardIndex].backContent}
            />
            <div className="flashcard-navigation">
                <button onClick={handlePrevious} >Previous</button>
                <button onClick={handleSkip} >Skip</button>
            </div>
        </div>
    );
};

export default Flashcards;
