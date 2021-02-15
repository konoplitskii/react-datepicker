() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
      minDate={new Date(2020, 5, 2)}
    />
  );
};
