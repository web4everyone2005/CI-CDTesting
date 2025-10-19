import { useState, useEffect } from 'react';
import './DateTimeChecker.css';

function DateTimeChecker() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [inputDate, setInputDate] = useState('');
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return {
      date: date.toLocaleDateString('vi-VN'),
      time: date.toLocaleTimeString('vi-VN'),
      day: date.toLocaleDateString('vi-VN', { weekday: 'long' }),
      timestamp: date.getTime()
    };
  };

  const calculateDifference = () => {
    if (!inputDate) {
      alert('Vui lòng nhập ngày!');
      return;
    }

    const targetDate = new Date(inputDate);
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((Math.abs(diff) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((Math.abs(diff) % (1000 * 60 * 60)) / (1000 * 60));

    setTimeDifference({
      isPast: diff < 0,
      days,
      hours,
      minutes
    });
  };

  const formatted = formatDateTime(currentDateTime);

  return (
    <div className="datetime-checker">
      <h1>📅 DateTime Checker</h1>
      
      <div className="current-time-section">
        <h2>Thời gian hiện tại</h2>
        <div className="time-display">
          <p className="date">{formatted.date}</p>
          <p className="time">{formatted.time}</p>
          <p className="day">{formatted.day}</p>
          <p className="timestamp">Timestamp: {formatted.timestamp}</p>
        </div>
      </div>

      <div className="calculator-section">
        <h2>Tính khoảng cách thời gian</h2>
        <div className="input-group">
          <input
            type="datetime-local"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="date-input"
          />
          <button onClick={calculateDifference} className="calculate-btn">
            Tính toán
          </button>
        </div>

        {timeDifference && (
          <div className="result">
            <h3>{timeDifference.isPast ? '⏪ Đã qua' : '⏩ Sắp tới'}</h3>
            <p className="difference">
              {timeDifference.days} ngày, {timeDifference.hours} giờ, {timeDifference.minutes} phút
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateTimeChecker;
