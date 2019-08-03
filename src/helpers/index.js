export const months = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return Array(12)
      .fill(1)
      .map((value, index) => {
        const d = new Date();
        d.setMonth(index);
        return { value: index + 1, name: monthNames[index] };
      });
  };

  export const years = () => {
    const d = new Date();
    const year = d.getFullYear();
    const years = [];
    for (let i = 0; i < 8; i++) {
      years.push(year + i);
    }
    return years;
  };