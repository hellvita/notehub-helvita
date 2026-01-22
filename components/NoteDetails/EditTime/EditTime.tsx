import { formatDate, FormattedData } from "@/lib/utils/strings";

interface EditTimeProps {
  dataTime: string;
}

export default function EditTime({ dataTime }: EditTimeProps) {
  const formattedDT: FormattedData = formatDate(dataTime);
  return (
    <div className="text-yellow-500 leading-3 flex flex-wrap gap-1 justify-center text-s12 max-mobile:max-w-20">
      <p>{formattedDT.data}</p>
      <p>{formattedDT.time}</p>
    </div>
  );
}
