() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      minDate={new Date(2020, 5, 5)}
    />
  );
};
