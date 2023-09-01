import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  const date = new Date();
  const formattedDate = moment(date).format("MMMM Do YYYY");
  interface Calender {
    date: Date;
    view: string;
  }
  // Function to add custom CSS class to the active date
  const tileClassName = ({ date, view }: Calender) => {
    if (view === "month" && date.toDateString() === new Date().toDateString()) {
      return "text-black rounded-md bg-pink-200 font-bold hover::bg-pink-100"; // Your custom CSS class
    }
    return null;
  };

  return (
    <div>
      <Calendar
        value={date}
        tileClassName={tileClassName}
        className=" border-none p-3 w-full"
      />
      <p className="text-center py-2 font-semibold text-gray-400">Date: {formattedDate}</p>
    </div>
  );
};

export default Calender;
