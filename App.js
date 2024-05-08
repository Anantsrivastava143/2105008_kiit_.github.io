import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [average, setAverage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const primesResponse = await axios.get('http://20.244.56.144/test/primes');
        const fibonacciResponse = await axios.get('http://20.244.56.144/test/fibo');
        const primes = primesResponse.data.numbers;
        const fibonacci = fibonacciResponse.data.numbers;

        // Displaying the first two prime numbers and the first two Fibonacci numbers
        if (primes.length >= 2 && fibonacci.length >= 2) {
          setNumber1(primes[0]);
          setNumber2(primes[1]);
          setNumber3(fibonacci[0]);
          setNumber4(fibonacci[1]);
        }
      } catch (error) {
        console.error('Error fetching numbers:', error);
      }
    };

    fetchData();
  }, []);

  const calculateAverage = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const num3 = parseFloat(number3);
    const num4 = parseFloat(number4);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
      setAverage('Please enter valid numbers.');
      return;
    }

    const sum = num1 + num2 + num3 + num4;
    const avg = sum / 4;
    setAverage(Average: ${avg.toFixed(2)});
  };

  return (
    <div className="calculator">
      <h1>Average Calculator</h1>
      <div className="input-group">
        <label htmlFor="number1">Number 1:</label>
        <input
          type="text"
          id="number1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="number2">Number 2:</label>
        <input
          type="text"
          id="number2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="number3">Number 3:</label>
        <input
          type="text"
          id="number3"
          value={number3}
          onChange={(e) => setNumber3(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="number4">Number 4:</label>
        <input
          type="text"
          id="number4"
          value={number4}
          onChange={(e) => setNumber4(e.target.value)}
        />
      </div>
      <button onClick={calculateAverage}>Calculate</button>
      <div id="result">{average}</div>
    </div>
  );
}

export default App;