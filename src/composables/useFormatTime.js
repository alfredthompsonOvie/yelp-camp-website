import { formatDistance } from 'date-fns';


const useFormatTime = () => {
  let date = new Date().getDate();
  let day1 = new Date().toLocaleString();
  // console.log("day1", day1);
  let month = new Date().getMonth();
  // console.log(String(month + 1).padStart(2, "0"));
  month = String(month + 1).padStart(2, "0")

  let year = new Date().getFullYear();
  let dateFormat = `${year}-${month}-${date}`;
  // console.log("dateFormat", dateFormat);
  // formatDistance(date/[past], baseDate/[present], [options])

  const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1), { includeSeconds: true, addSuffix: true })

  return result;
}

export default useFormatTime;