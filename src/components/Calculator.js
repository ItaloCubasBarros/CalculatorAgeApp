import React, { useState } from 'react';
import styles from './Calculator.module.css';
import Logo from '../images/icon-arrow.svg';

function Calculator() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [errorDay, setErrorDay] = useState('');
    const [errorYear, setErrorYear] = useState('');
    const [errorMonth, setErrorMonth] = useState('');
    const [ageYears, setAgeYears] = useState('--');
    const [ageMonths, setAgeMonths] = useState('--');
    const [ageDays, setAgeDays] = useState('--');

    const handleDayChange = (e) => {
        const inputValue = e.target.value;
        if (+inputValue > 31 || +inputValue === 0) {
            setErrorDay('Must be a valid date');
        } else {
            setErrorDay('');
            setDay(inputValue);
        }
    };

    const handleYearChange = (e) => {
        const inputValue = e.target.value;
        if (+inputValue > 2024 || +inputValue === 0) {
            setErrorYear('Must be a valid date');
        } else {
            setErrorYear('');
            setYear(inputValue);
        }
    };

    const handleMonthChange = (e) => {
        const inputValue = e.target.value;
        if (+inputValue > 12 || +inputValue === 0) {
            setErrorMonth('Must be a valid date');
        } else {
            setErrorMonth('');
            setMonth(inputValue);
        }
    }

    const calculateAge = () => {
 
        if (!day || !month || !year || errorDay || errorMonth || errorYear) {
            console.error('Please fill all fields correctly');
            return;
        }


        const birthDate = new Date(`${year}-${month}-${day}`);

    
        const currentDate = new Date();

   
        const differenceInMs = currentDate - birthDate;


        const ageDate = new Date(differenceInMs);
        const years = Math.abs(ageDate.getUTCFullYear() - 1970);
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1; 

        
        setAgeYears(years);
        setAgeMonths(months);
        setAgeDays(days);
    };

   


    return (
        <div className={styles.Container}>
            <div className={styles.inputFlex}>
                <div className={styles.inputContainer}>
                    <span>Day</span>
                    <input
                        className={styles.Input}
                        type='number'
                        id='day'
                        placeholder='DD'
                        value={day}
                        onChange={handleDayChange}
                    />
                    <small className={styles.errorDay}>{errorDay}</small>
                </div>
                <div className={styles.inputContainer}>
                    <span>Month</span>
                    <input
                        className={styles.Input}
                        type='number'
                        id='month'
                        placeholder='MM'
                        value={month}
                        onChange={handleMonthChange}
                    />
                    <small className={styles.errorMonth}>{errorMonth}</small>
                </div>
                <div className={styles.inputContainer}>
                    <span>Year</span>
                    <input
                        className={styles.Input}
                        type='number'
                        id='year'
                        placeholder='YY'
                        value={year}
                        onChange={handleYearChange}
                    />
                    <small className={styles.errorYear}>{errorYear}</small>
                </div>
            </div>
            <button onClick={calculateAge} className={styles.SubmitBtn}>
                <img src={Logo} alt="submit" />
            </button>
            <div className={styles.Results}>
                <h1>
                    <span className={styles.ResultYear}>{ageYears}</span>years
                </h1>
                <h1>
                    <span className={styles.ResultMonth}>{ageMonths}</span>months
                </h1>
                <h1>
                    <span className={styles.ResultDay}>{ageDays}</span>days
                </h1>
            </div>
        </div>
    );
}

export default Calculator;
