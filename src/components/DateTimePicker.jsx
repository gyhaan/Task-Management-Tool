/* eslint-disable react/prop-types */
function DateTimePicker({ setDeadline, deadline = null }) {
  function timeReturned(deadline) {
    if (deadline === null) return;
    if (deadline) {
      const localDate = new Date(deadline);

      // Adjust the hours to UTC+2
      localDate.setUTCHours(localDate.getUTCHours() + 2);

      return localDate.toISOString().slice(0, 16);
    }
  }

  return (
    <input
      value={timeReturned(deadline)}
      type="datetime-local"
      className="input-date"
      min={new Date().toISOString().slice(0, 16)}
      onChange={(e) => setDeadline(Date.parse(e.target.value))}
    />
  );
}

export default DateTimePicker;
